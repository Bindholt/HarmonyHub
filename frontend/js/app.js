import { handleDisplayArtistsGrid } from "./setArtists.js";
import { setEventListeners } from "./event-listeners.js";

window.addEventListener("load", init);

async function init() {
    await handleDisplayArtistsGrid();
    setEventListeners();
}


