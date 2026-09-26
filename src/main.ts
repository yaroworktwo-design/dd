import "./style.css";
import { Game } from "./game/game";

const canvas = document.getElementById("c") as HTMLCanvasElement;
const ui = document.getElementById("ui") as HTMLElement;
const game = new Game(canvas, ui);
game.init().catch((e) => {
  console.error(e);
  ui.innerHTML = `<div class="loading"><p>Не удалось запустить игру: ${String(e?.message ?? e)}</p></div>`;
});
// handy for debugging from the console
(window as unknown as { game: Game }).game = game;
