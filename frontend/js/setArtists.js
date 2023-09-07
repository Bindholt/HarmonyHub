import { getArtists, getArtistsFavorited } from "./rest-services.js";
import { displayArtistsGrid } from "./display.js";

export let artists = [];

export function setArtists(artistsImport) {
    artists = artistsImport;
}

export async function handleDisplayArtistsGrid() {
    const response = await getArtists();
    artists = await response.json();
    displayArtistsGrid();
}

export async function handleDisplayArtistsGridFavorites() {
    const response = await getArtistsFavorited();
    artists = await response.json();
    displayArtistsGrid();
}