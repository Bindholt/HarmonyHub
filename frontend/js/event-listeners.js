import { showUpdateArtistDialog, showDeleteArtistDialog, closeAllDialogs, showFavorites} from "./display.js";
import { handlePostArtist, handleUpdateArtist, handleDeleteArtist } from "./submit.js";
import { searchByName, sortArtists } from "./search.js";

export function setEventListeners() {

    document.querySelector("#search").addEventListener("keyup", (event) => {
        searchByName(event);
    });

    document.querySelector("#order-artists").addEventListener("change", (event) => {
        sortArtists(event);
    });

    document.querySelector("#show-post-artist-dialog").addEventListener("mouseup", () => {
        document.querySelector("#post-artist-form").reset();
        document.querySelector("#post-artist-dialog").showModal();
    });

    document.querySelector("#update-artist-form").addEventListener("submit", handleUpdateArtist)
    document.querySelector("#post-artist-form").addEventListener("submit", handlePostArtist);
    document.querySelector("#dialog-close-button").addEventListener("mouseup", () => {
        document.querySelector("#display-artist-dialog").close();
    });

    document.querySelector("#post-dialog-close-button").addEventListener("mouseup", () => {
        document.querySelector("#post-artist-dialog").close();
    });

    document.querySelector("#update-dialog-close-button").addEventListener("mouseup", () => {
        document.querySelector("#update-artist-dialog").close();
    });

    document.querySelector("#delete-artist-btn").addEventListener("mouseup", handleDeleteArtist);
    document.querySelector("#delete-artist-refuse-btn").addEventListener("mouseup", closeAllDialogs);

    document.querySelector("#show-favorites").addEventListener("mouseup", showFavorites);
}

export function setDisplayDialogEventListeners() {
    document.querySelector("#show-delete-dialog-btn").addEventListener("mouseup", showDeleteArtistDialog);
    document.querySelector("#show-update-dialog-btn").addEventListener("mouseup", showUpdateArtistDialog);
}
