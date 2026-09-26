import { COSTUMES, type Costume } from "./cat";

const h = <K extends keyof HTMLElementTagNameMap>(tag: K, cls = "", html = "") => {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html) e.innerHTML = html;
  return e;
};

export interface PanelRect {
  x: number;
  y: number;
  w: number;
  hgt: number;
}

export class UI {
  root: HTMLElement;
  private fishEl: HTMLElement;
  private objEl: HTMLElement;
  private arrowEl: HTMLElement;
  private toastEl: HTMLElement;
  private trackEl: HTMLElement;
  private subEl: HTMLElement;
  private boxTop: HTMLElement;
  private boxBot: HTMLElement;
  private portraitsEl: HTMLElement;
  private panels: { root: HTMLElement; hearts: HTMLElement; prompt: HTMLElement; name: HTMLElement; ability: HTMLElement }[] = [];
  private bossEl: HTMLElement;
  private fadeEl: HTMLElement;
  private flashEl: HTMLElement;
  modal: HTMLElement | null = null;
  private toastTimer = 0;
  private trackTimer = 0;

  constructor(root: HTMLElement) {
    this.root = root;
    const top = h("div", "hud-top");
    this.objEl = h("div", "objective");
    this.arrowEl = h("div", "nav-arrow", "<svg viewBox='0 0 64 64'><path d='M32 4 L56 50 L32 38 L8 50 Z'/></svg>");
    top.append(this.arrowEl, this.objEl);
    this.fishEl = h("div", "fish-count", "🐟 0");
    this.toastEl = h("div", "toast");
    this.trackEl = h("div", "track-toast");
    this.subEl = h("div", "subtitle");
    this.boxTop = h("div", "letterbox top");
    this.boxBot = h("div", "letterbox bottom");
    this.portraitsEl = h("div", "portraits");
    this.bossEl = h("div", "boss-bar", "<div class='boss-name'>КАРНИЗ — хулиган крыш</div><div class='boss-hp'><i></i></div>");
    this.fadeEl = h("div", "fade");
    this.flashEl = h("div", "soul-flash");
    root.append(top, this.fishEl, this.toastEl, this.trackEl, this.portraitsEl, this.bossEl, this.boxTop, this.boxBot, this.subEl, this.flashEl, this.fadeEl);
  }

  setFish(n: number) {
    this.fishEl.textContent = `🐟 ${n}`;
    this.fishEl.classList.remove("bump");
    void this.fishEl.offsetWidth;
    this.fishEl.classList.add("bump");
  }

  setObjective(text: string) {
    this.objEl.textContent = text;
    this.objEl.style.display = text ? "" : "none";
  }

  /** angle in radians relative to camera forward; null hides the arrow */
  setArrow(angle: number | null, pitch = 0) {
    if (angle === null) {
      this.arrowEl.style.display = "none";
      return;
    }
    this.arrowEl.style.display = "";
    this.arrowEl.style.transform = `rotateX(${45 + pitch * 20}deg) rotate(${angle}rad)`;
  }

  toast(text: string, ms = 2600) {
    this.toastEl.textContent = text;
    this.toastEl.classList.add("show");
    clearTimeout(this.toastTimer);
    this.toastTimer = window.setTimeout(() => this.toastEl.classList.remove("show"), ms);
  }

  track(name: string) {
    this.trackEl.textContent = `♪ ${name}`;
    this.trackEl.classList.add("show");
    clearTimeout(this.trackTimer);
    this.trackTimer = window.setTimeout(() => this.trackEl.classList.remove("show"), 3500);
  }

  subtitle(speaker: string | null, text: string | null, color = "#fff") {
    if (!text) {
      this.subEl.classList.remove("show");
      return;
    }
    this.subEl.innerHTML = speaker ? `<b style="color:${color}">${speaker}:</b> ${text}` : text;
    this.subEl.classList.add("show");
  }

  letterbox(on: boolean) {
    this.root.classList.toggle("cinematic", on);
  }

  fade(on: boolean) {
    this.fadeEl.classList.toggle("on", on);
  }

  soulFlash() {
    this.flashEl.classList.remove("go");
    void this.flashEl.offsetWidth;
    this.flashEl.classList.add("go");
  }

  boss(hp: number | null, max = 1) {
    this.bossEl.style.display = hp === null ? "none" : "block";
    if (hp !== null) (this.bossEl.querySelector("i") as HTMLElement).style.width = `${Math.max(0, (hp / max) * 100)}%`;
  }

  setupPanels(rects: PanelRect[], names: string[]) {
    this.root.classList.toggle("split", rects.length > 1);
    this.panels.forEach((p) => p.root.remove());
    this.panels = rects.map((r, i) => {
      const root = h("div", "player-panel");
      Object.assign(root.style, { left: `${r.x * 100}%`, top: `${r.y * 100}%`, width: `${r.w * 100}%`, height: `${r.hgt * 100}%` });
      const name = h("div", "pp-name", names[i]);
      const hearts = h("div", "pp-hearts");
      const ability = h("div", "pp-ability");
      const prompt = h("div", "pp-prompt");
      prompt.style.display = "none";
      root.append(name, hearts, ability, prompt);
      if (rects.length > 1) root.classList.add("split");
      this.root.insertBefore(root, this.root.firstChild);
      return { root, hearts, prompt, name, ability };
    });
  }

  updatePanel(i: number, name: string, hp: number, max: number, prompt: string, ability: string) {
    const p = this.panels[i];
    if (!p) return;
    if (p.name.textContent !== name) p.name.textContent = name;
    const hs = "❤".repeat(hp) + "<span>♡</span>".repeat(Math.max(0, max - hp));
    if (p.hearts.innerHTML !== hs) p.hearts.innerHTML = hs;
    if (p.prompt.textContent !== prompt) {
      p.prompt.textContent = prompt;
      p.prompt.style.display = prompt ? "" : "none";
    }
    if (p.ability.textContent !== ability) p.ability.textContent = ability;
  }

  setPortraits(list: { id: string; name: string; img: string; active: boolean; locked: boolean; order?: string }[], onClick: (id: string) => void) {
    this.portraitsEl.innerHTML = "";
    for (const c of list) {
      const b = h("button", `portrait${c.active ? " active" : ""}${c.locked ? " locked" : ""}`);
      b.innerHTML = `<img src="${c.img}" alt=""><span>${c.name}</span>${c.order ? `<em>${c.order}</em>` : ""}`;
      b.onclick = (e) => {
        e.stopPropagation();
        if (!c.locked) onClick(c.id);
      };
      this.portraitsEl.appendChild(b);
    }
  }

  showPortraits(on: boolean) {
    this.portraitsEl.style.display = on ? "" : "none";
  }

  // ------------------------------------------------------------ menus
  closeModal() {
    this.modal?.remove();
    this.modal = null;
  }

  menu(portraits: Record<string, string>, hasSave: boolean, onStart: (players: number, cont: boolean) => void) {
    this.closeModal();
    const m = h("div", "modal menu");
    m.innerHTML = `
      <div class="title"><h1>Дымок <span>и</span> Милена</h1><p>Два кота. Один большой город. Ноль чувства направления.</p></div>
      <div class="menu-cats">
        <figure><img src="${portraits.dymok}"><figcaption>Дымок<br><small>сила, рывок, пушистость</small></figcaption></figure>
        <figure><img src="${portraits.milena}"><figcaption>Милена<br><small>ловкость, прыжки, шипение</small></figcaption></figure>
        <figure><img src="${portraits.pixel}"><figcaption>Пиксель<br><small>3-й игрок, двойной прыжок</small></figcaption></figure>
      </div>
      <div class="menu-buttons">
        ${hasSave ? `<button data-c="1" class="primary">Продолжить</button>` : ""}
        <button data-p="1" class="${hasSave ? "" : "primary"}">1 игрок</button>
        <button data-p="2">2 игрока</button>
        <button data-p="3">3 игрока</button>
      </div>
      <details class="controls"><summary>Управление</summary>
      <table>
        <tr><th></th><th>Игрок 1</th><th>Игрок 2</th><th>Игрок 3</th></tr>
        <tr><td>Ходьба</td><td>WASD</td><td>Стрелки</td><td>Numpad 8456</td></tr>
        <tr><td>Камера</td><td>Мышь / Z X</td><td>[ ]</td><td>Numpad / *</td></tr>
        <tr><td>Прыжок</td><td>Пробел</td><td>Enter</td><td>Numpad 0</td></tr>
        <tr><td>Бег / красться</td><td>Shift / Ctrl, C</td><td>R-Shift / /</td><td>Num + / Num .</td></tr>
        <tr><td>Удар</td><td>ЛКМ / F</td><td>.</td><td>Numpad 7</td></tr>
        <tr><td>Действие</td><td>E</td><td>;</td><td>Numpad 9</td></tr>
        <tr><td>Умение</td><td>Q</td><td>,</td><td>Numpad 1</td></tr>
        <tr><td>Паутина (держать)</td><td>ПКМ / R</td><td>'</td><td>Numpad 3</td></tr>
        <tr><td>Сменить кота / приказ</td><td>Tab / G</td><td>—</td><td>—</td></tr>
        <tr><td>Вид от 1-го лица</td><td>V</td><td>\\</td><td>Numpad −</td></tr>
      </table>
      <p>Геймпады: 1-й геймпад — игрок 1, 2-й — игрок 2, 3-й — игрок 3. На iPhone/iPad — экранный джойстик и кнопки.</p>
      </details>`;
    m.querySelectorAll<HTMLButtonElement>("button").forEach((b) => {
      b.onclick = () => {
        this.closeModal();
        onStart(Number(b.dataset.p ?? 0), !!b.dataset.c);
      };
    });
    this.root.appendChild(m);
    this.modal = m;
  }

  pause(opts: { tracking: boolean; quality: string; music: number }, cb: { resume: () => void; tracking: (v: boolean) => void; quality: (q: string) => void; music: (v: number) => void; menu: () => void; reset: () => void }) {
    this.closeModal();
    const m = h("div", "modal pause");
    m.innerHTML = `<h2>Пауза</h2>
      <label><input type="checkbox" ${opts.tracking ? "checked" : ""} data-k="track"> Стрелка задания (отключение не сбрасывает прогресс)</label>
      <label>Шерсть: <select data-k="q"><option value="high">Высокое (12 слоёв)</option><option value="med">Среднее (8)</option><option value="low">Низкое (4) — для iPhone</option></select></label>
      <label>Музыка <input type="range" min="0" max="1" step="0.05" value="${opts.music}" data-k="music"></label>
      <div class="menu-buttons"><button class="primary" data-a="resume">Продолжить</button><button data-a="menu">В главное меню</button><button data-a="reset" class="danger">Сбросить сохранение</button></div>`;
    (m.querySelector("select") as HTMLSelectElement).value = opts.quality;
    m.querySelector<HTMLInputElement>("[data-k=track]")!.onchange = (e) => cb.tracking((e.target as HTMLInputElement).checked);
    m.querySelector<HTMLSelectElement>("[data-k=q]")!.onchange = (e) => cb.quality((e.target as HTMLSelectElement).value);
    m.querySelector<HTMLInputElement>("[data-k=music]")!.oninput = (e) => cb.music(Number((e.target as HTMLInputElement).value));
    m.querySelector<HTMLButtonElement>("[data-a=resume]")!.onclick = () => cb.resume();
    m.querySelector<HTMLButtonElement>("[data-a=menu]")!.onclick = () => cb.menu();
    m.querySelector<HTMLButtonElement>("[data-a=reset]")!.onclick = () => {
      if (confirm("Точно сбросить весь прогресс?")) cb.reset();
    };
    this.root.appendChild(m);
    this.modal = m;
  }

  /** Plombir's shop: item list, try-on, unit price x quantity = total. */
  shop(state: { fish: number; owned: string[]; equipped: Record<string, string | null>; cans: number; discount: boolean }, cb: {
    tryOn: (c: Costume | null, cat: string) => void;
    buyCostume: (c: Costume) => boolean;
    equip: (c: Costume | null, cat: string) => void;
    buyCans: (qty: number, unit: number) => boolean;
    close: () => void;
  }) {
    this.closeModal();
    const m = h("div", "modal shop");
    const unit = state.discount ? 12 : 15;
    const render = () => {
      let qty = 1;
      m.innerHTML = `<h2>🐟 Лавка Пломбира</h2>
        <p class="seller">Пломбир: «Мур-р, покупатели! Всё свежее. Ну, почти всё.»${state.discount ? " <b>(Скидка от Карниза!)</b>" : ""}</p>
        <div class="wallet">Общий кошелёк: <b>🐟 ${state.fish}</b></div>
        <div class="shop-grid">
          <div class="item food">
            <h3>Консерва «Сардина»</h3><p>Восстанавливает всё здоровье. Можно съесть в любой момент (клавиша H / кнопка). В запасе: ${state.cans}.</p>
            <div class="qty"><button data-q="-1">−</button><span data-qty>1</span><button data-q="1">+</button></div>
            <div class="total" data-total></div>
            <button class="primary" data-buy-cans>Купить</button>
          </div>
          ${COSTUMES.map((c) => {
            const owned = state.owned.includes(c.id);
            const eq = state.equipped[c.cat] === c.id;
            return `<div class="item" data-id="${c.id}"><h3>${c.name} <small>для: ${c.cat === "dymok" ? "Дымок" : "Милена"}</small></h3><p>${c.desc}</p>
              <div class="price">${owned ? "Куплено" : `${c.price} рыбок × 1 = ${c.price} рыбок`}</div>
              <button data-try="${c.id}">Примерить</button>
              ${owned ? `<button data-eq="${c.id}" class="${eq ? "on" : ""}">${eq ? "Снять" : "Надеть"}</button>` : `<button class="primary" data-buyc="${c.id}" ${state.fish < c.price ? "disabled" : ""}>Купить</button>`}
            </div>`;
          }).join("")}
        </div>
        <div class="menu-buttons"><button data-close>Выйти (Esc)</button></div>`;
      const upd = () => {
        m.querySelector("[data-qty]")!.textContent = String(qty);
        const tot = unit * qty;
        m.querySelector("[data-total]")!.innerHTML = `${unit} рыбок/банка × ${qty} = <b>${tot} рыбок</b>`;
        (m.querySelector("[data-buy-cans]") as HTMLButtonElement).disabled = tot > state.fish;
      };
      upd();
      m.querySelectorAll<HTMLButtonElement>("[data-q]").forEach((b) => (b.onclick = () => {
        qty = Math.max(1, Math.min(9, qty + Number(b.dataset.q)));
        upd();
      }));
      m.querySelector<HTMLButtonElement>("[data-buy-cans]")!.onclick = () => {
        if (cb.buyCans(qty, unit)) {
          state.fish -= unit * qty;
          state.cans += qty;
          render();
        }
      };
      m.querySelectorAll<HTMLButtonElement>("[data-try]").forEach((b) => (b.onclick = () => {
        const c = COSTUMES.find((x) => x.id === b.dataset.try)!;
        cb.tryOn(c, c.cat);
      }));
      m.querySelectorAll<HTMLButtonElement>("[data-buyc]").forEach((b) => (b.onclick = () => {
        const c = COSTUMES.find((x) => x.id === b.dataset.buyc)!;
        if (cb.buyCostume(c)) {
          state.fish -= c.price;
          state.owned.push(c.id);
          state.equipped[c.cat] = c.id;
          render();
        }
      }));
      m.querySelectorAll<HTMLButtonElement>("[data-eq]").forEach((b) => (b.onclick = () => {
        const c = COSTUMES.find((x) => x.id === b.dataset.eq)!;
        const on = state.equipped[c.cat] === c.id;
        state.equipped[c.cat] = on ? null : c.id;
        cb.equip(on ? null : c, c.cat);
        render();
      }));
      m.querySelector<HTMLButtonElement>("[data-close]")!.onclick = () => cb.close();
    };
    render();
    this.root.appendChild(m);
    this.modal = m;
  }

  endCard(onContinue: () => void) {
    this.closeModal();
    const m = h("div", "modal endcard");
    m.innerHTML = `<h2>Демо пройдено! 🎉</h2><p>Дымок и Милена победили Карниза и стали на шаг ближе к дому.</p>
      <p>Дальше по плану: канализация и стая крыс, Центральный парк, рыбный рынок с Шариком, метро.</p>
      <div class="menu-buttons"><button class="primary">Гулять дальше</button></div>`;
    m.querySelector("button")!.onclick = () => {
      this.closeModal();
      onContinue();
    };
    this.root.appendChild(m);
    this.modal = m;
  }

  loading(text: string | null) {
    let el = this.root.querySelector<HTMLElement>(".loading");
    if (!text) {
      el?.remove();
      return;
    }
    if (!el) {
      el = h("div", "loading");
      this.root.appendChild(el);
    }
    el.innerHTML = `<div class="spinner">🐾</div><p>${text}</p>`;
  }
}
