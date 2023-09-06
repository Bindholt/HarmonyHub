import { getArtists } from "./rest-services.js";
import { displayArtistsGrid } from "./display.js";
import { setEventListeners } from "./event-listeners.js";

window.addEventListener("load", init);

async function init() {
    await handleDisplayArtistsGrid();
    setEventListeners();
}

async function handleDisplayArtistsGrid() {
    const response = await getArtists();
    const artists = await response.json();
    displayArtistsGrid(artists);
}


