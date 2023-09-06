import { handleDisplayArtistsGrid } from "./display.js";
import { setEventListeners } from "./event-listeners.js";

window.addEventListener("load", init);

async function init() {
    await handleDisplayArtistsGrid();
    setEventListeners();
}


