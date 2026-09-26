export interface SaveData {
  v: 1;
  fish: number;
  cans: number;
  owned: string[];
  equipped: Record<string, string | null>;
  flags: Record<string, boolean>;
  checkpoint: string;
  taken: string[];
  tracking: boolean;
}

const KEY = "dymok-milena-save-v1";

export function freshSave(): SaveData {
  return { v: 1, fish: 0, cans: 0, owned: [], equipped: {}, flags: {}, checkpoint: "start", taken: [], tracking: true };
}

export function loadSave(): SaveData | null {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const d = JSON.parse(raw) as SaveData;
    return d.v === 1 ? { ...freshSave(), ...d } : null;
  } catch {
    return null;
  }
}

export function writeSave(d: SaveData) {
  try {
    localStorage.setItem(KEY, JSON.stringify(d));
  } catch {
    /* private mode: progress lives for this session only */
  }
}

export function clearSave() {
  localStorage.removeItem(KEY);
}
