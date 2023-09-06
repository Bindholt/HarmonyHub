import { showUpdateArtistDialog, showPostArtistDialog} from "./display.js";
import { handleUpdateArtist } from "./submit.js";

export function setEventListeners() {
    document.querySelector("#show-post-artist-dialog").addEventListener("mouseup", () => {
        document.querySelector("#post-artist-dialog").showModal();
    });
    document.querySelector("#update-artist-form").addEventListener("submit", handleUpdateArtist)
    document.querySelector("#dialog-close-button").addEventListener("mouseup", () => {
        document.querySelector("#display-artist-dialog").close();
    });
    document.querySelector("#post-dialog-close-button").addEventListener("mouseup", () => {
        document.querySelector("#post-artist-dialog").close();
    });
    document.querySelector("#update-dialog-close-button").addEventListener("mouseup", () => {
        document.querySelector("#update-artist-dialog").close();
    });
}

export function setDisplayDialogEventListeners(artist) {
    document.querySelector("#show-update-dialog-btn").addEventListener("mouseup", () => {
        showUpdateArtistDialog(artist);
    });
}
