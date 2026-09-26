import Peer, { type DataConnection } from "peerjs";

/**
 * Peer-to-peer online co-op over WebRTC (PeerJS). No game server is needed,
 * which keeps the game hostable on GitHub Pages: the public PeerJS broker is
 * only used to introduce players, then data flows directly between browsers.
 * Star topology: the host is authoritative for story, boss and pickups and
 * relays player states to everyone else.
 */
export type NetMsg = { t: string; [k: string]: unknown };

const PREFIX = "dymok-milena-2026-";
const ALPHABET = "ABCDEFGHJKMNPQRSTUVWXYZ23456789";
const ICE = [{ urls: "stun:stun.l.google.com:19302" }, { urls: "stun:stun.cloudflare.com:3478" }];

export function newRoomCode() {
  let s = "";
  for (let i = 0; i < 5; i++) s += ALPHABET[Math.floor(Math.random() * ALPHABET.length)];
  return s;
}

// ?net=local swaps WebRTC for BroadcastChannel: same-computer tabs, for testing the co-op logic offline
const LOCAL = typeof location !== "undefined" && new URLSearchParams(location.search).get("net") === "local";

export class Net {
  peer!: Peer;
  private bc?: BroadcastChannel;
  private localId = Math.random().toString(36).slice(2, 8);
  isHost = false;
  code = "";
  private host?: DataConnection;
  conns = new Map<string, DataConnection>();
  private handler: ((m: NetMsg, from: string) => void) | null = null;
  private early: [NetMsg, string][] = [];
  /** Messages that arrive before a handler is attached are queued, not dropped. */
  set onMessage(fn: (m: NetMsg, from: string) => void) {
    this.handler = fn;
    for (const [m, f] of this.early.splice(0)) fn(m, f);
  }
  private deliver(m: NetMsg, from: string) {
    if (this.handler) this.handler(m, from);
    else this.early.push([m, from]);
  }
  onPeerJoin: (id: string) => void = () => {};
  onPeerLeave: (id: string) => void = () => {};
  onDisconnect: () => void = () => {};

  private open(id?: string) {
    return new Promise<Peer>((resolve, reject) => {
      const peer = id ? new Peer(id, { config: { iceServers: ICE }, debug: 1 }) : new Peer({ config: { iceServers: ICE }, debug: 1 });
      const timer = setTimeout(() => reject(new Error("Сервер знакомств не отвечает. Проверьте интернет.")), 15000);
      peer.on("open", () => {
        clearTimeout(timer);
        resolve(peer);
      });
      peer.on("error", (e: { type?: string }) => {
        clearTimeout(timer);
        const msg = e.type === "unavailable-id" ? "Такая комната уже есть — попробуйте ещё раз."
          : e.type === "peer-unavailable" ? "Комната не найдена. Проверьте код."
          : e.type === "network" || e.type === "server-error" ? "Нет связи с сервером знакомств."
          : `Ошибка сети: ${e.type ?? "unknown"}`;
        reject(new Error(msg));
      });
    });
  }

  async hostRoom(code: string) {
    this.isHost = true;
    this.code = code;
    if (LOCAL) {
      this.bc = new BroadcastChannel(`dm-${code}`);
      this.bc.onmessage = ({ data: d }) => {
        if (d.type === "join") {
          this.conns.set(d.from, null as unknown as DataConnection);
          this.bc!.postMessage({ type: "joined", to: d.from });
          this.onPeerJoin(d.from);
        } else if (d.type === "msg" && d.to === "host") this.deliver(d.m, d.from);
        else if (d.type === "leave") {
          this.conns.delete(d.from);
          this.onPeerLeave(d.from);
        }
      };
      return;
    }
    this.peer = await this.open(PREFIX + code);
    this.peer.on("connection", (c) => {
      c.on("open", () => {
        this.conns.set(c.peer, c);
        this.onPeerJoin(c.peer);
      });
      c.on("data", (d) => this.deliver(d as NetMsg, c.peer));
      c.on("close", () => {
        this.conns.delete(c.peer);
        this.onPeerLeave(c.peer);
      });
    });
  }

  async joinRoom(code: string) {
    this.isHost = false;
    this.code = code.toUpperCase().trim();
    if (LOCAL) {
      const bc = new BroadcastChannel(`dm-${this.code}`);
      this.bc = bc;
      await new Promise<void>((resolve, reject) => {
        const timer = setTimeout(() => reject(new Error("Комната не найдена. Проверьте код.")), 5000);
        bc.onmessage = ({ data: d }) => {
          if (d.type === "joined" && d.to === this.localId) {
            clearTimeout(timer);
            resolve();
          } else if (d.type === "msg" && (d.to === this.localId || (d.to === "*" && d.except !== this.localId))) this.deliver(d.m, "host");
        };
        bc.postMessage({ type: "join", from: this.localId });
      });
      addEventListener("beforeunload", () => bc.postMessage({ type: "leave", from: this.localId }));
      return;
    }
    this.peer = await this.open();
    await new Promise<void>((resolve, reject) => {
      const c = this.peer.connect(PREFIX + this.code, { reliable: true, serialization: "json" });
      const timer = setTimeout(() => reject(new Error("Не удалось подключиться к комнате.")), 15000);
      this.peer.on("error", (e: { type?: string }) => {
        clearTimeout(timer);
        reject(new Error(e.type === "peer-unavailable" ? "Комната не найдена. Проверьте код." : `Ошибка сети: ${e.type}`));
      });
      c.on("open", () => {
        clearTimeout(timer);
        this.host = c;
        resolve();
      });
      c.on("data", (d) => this.deliver(d as NetMsg, "host"));
      c.on("close", () => this.onDisconnect());
    });
  }

  /** Host: broadcast to every client (optionally skipping one). Client: send to host. */
  send(m: NetMsg, except?: string) {
    if (this.bc) {
      this.bc.postMessage(this.isHost ? { type: "msg", to: "*", except, m } : { type: "msg", to: "host", from: this.localId, m });
      return;
    }
    if (this.isHost) {
      for (const [id, c] of this.conns) if (id !== except && c.open) c.send(m);
    } else if (this.host?.open) this.host.send(m);
  }

  sendTo(peerId: string, m: NetMsg) {
    if (this.bc) {
      this.bc.postMessage({ type: "msg", to: peerId, m });
      return;
    }
    const c = this.conns.get(peerId);
    if (c?.open) c.send(m);
  }

  close() {
    this.bc?.close();
    this.peer?.destroy();
    this.conns.clear();
  }
}
