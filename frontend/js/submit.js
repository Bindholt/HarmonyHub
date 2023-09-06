import { displayArtistsGrid, closeAllDialogs, toggleFavoriteImage } from "./display.js";
import { updateArtist, postArtist, deleteArtist, updateArtistFavorite } from "./rest-services.js";
import { showToastMessage } from "./toast-messages.js";

export async function handleUpdateArtist(event) {
    event.preventDefault();
    const form = event.target;

    const artistData = {
        id: form.id.value,
        name: form.name.value,
        genres: form.genres.value,
        birthdate: form.birthdate.value,
        activeSince: form.activeSince.value,
        labels: form.labels.value,
        website: form.website.value,
        image: form.image.value,
        shortDescription: form.description.value,
        favorite:false,
    }
    const response = await updateArtist(JSON.stringify(artistData, null, 2));
    
    if (response.ok) {
        const artists = await response.json(); //response.json() returns an array of all artists.
        displayArtistsGrid(artists);
        showToastMessage("Artist updated successfully!", "success");
        closeAllDialogs();
    } else {
        const error = await response.json();
        showToastMessage(JSON.stringify(error), "error");
    }
}

export async function handlePostArtist(event) {
    event.preventDefault();
    const form = event.target;

    const artistData = {
        name: form.name.value,
        genres: form.genres.value,
        birthdate: form.birthdate.value,
        activeSince: form.activeSince.value,
        labels: form.labels.value,
        website: form.website.value,
        image: form.image.value,
        shortDescription: form.description.value,
        favorite:false,
    }
    const response = await postArtist(JSON.stringify(artistData, null, 2));
    
    if (response.ok) {
        const artists = await response.json(); //response.json() returns an array of all artists.
        displayArtistsGrid(artists);
        showToastMessage("Artist posted successfully!", "success");
        closeAllDialogs();
    } else {
        const error = await response.json();
        showToastMessage(JSON.stringify(error), "error");
    }
}

export async function handleDeleteArtist() {
    const id = document.querySelector("#dialog-id").innerHTML;
    const response = await deleteArtist(id);
    
    if (response.ok) {
        const artists = await response.json(); //response.json() returns an array of all artists.
        displayArtistsGrid(artists);
        showToastMessage("Artist deleted successfully!", "success");
        closeAllDialogs();
    } else {
        const error = await response.json();
        showToastMessage("Error: Something went wrong");
    }
}

export async function toggleFavorite(target) {
    const id = target.dataset.id;
    const response = await updateArtistFavorite(id);

    if(response.ok) {
        toggleFavoriteImage(target);
    } else {
        showToastMessage("Error: Something went wrong", "error");
    }

}