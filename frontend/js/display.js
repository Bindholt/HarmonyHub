import { setDisplayDialogEventListeners } from "./event-listeners.js";
import { toggleFavorite } from "./submit.js";
import { getArtists, getArtistsFavorited } from "./rest-services.js";

export async function handleDisplayArtistsGrid() {
    const response = await getArtists();
    const artists = await response.json();
    displayArtistsGrid(artists);
}

async function handleDisplayArtistsGridFavorites() {
    const response = await getArtistsFavorited();
    const artists = await response.json();
    displayArtistsGrid(artists);
}

export function displayArtistsGrid(artistsArray) {
    document.querySelector("#artists-grid").innerHTML = "";
    for (const artist of artistsArray) {
        const favoritedImage = artist.favorite ? "../images/favorited.png" : "../images/not-favorited.png";
        const artistHTML = /*html */ `
            <article id="artist-id${artist.id}">
                <div>
                    <img data-id="${artist.id}" data-favorite="${artist.favorite}" id="favorite${artist.id}" class="favorite" src="${favoritedImage}" alt="star" />
                    <h3><span>${artist.name}</span></h3>
                    <img class="portrait" src="${artist.image}" alt="Image of artist" />
                </div>        
            </article>
        `
        document.querySelector("#artists-grid").insertAdjacentHTML("beforeend", artistHTML);
        document.querySelector("#artist-id" + artist.id).addEventListener("mouseup", () => {
            showDisplayArtistDialog(artist);
        });
        document.querySelector("#favorite" + artist.id).addEventListener("mouseup", (event) => {
            event.stopPropagation();
            toggleFavorite(event.target);
        });
    }
}
//

function showDisplayArtistDialog(artist) {
    closeAllDialogs();
    const artistDialog = document.querySelector("#display-artist-dialog");
    document.querySelector("#dialog-name").innerHTML = artist.name;
    document.querySelector("#dialog-genre").innerHTML = artist.genres;
    document.querySelector("#dialog-birthdate").innerHTML = artist.birthdate ;
    document.querySelector("#dialog-active-since").innerHTML = artist.activeSince;
    document.querySelector("#dialog-labels").innerHTML = artist.labels;
    document.querySelector("#dialog-website").href = artist.website;
    document.querySelector("#dialog-website").innerHTML = artist.website;
    document.querySelector("#dialog-image").src = artist.image;
    document.querySelector("#dialog-description").innerHTML = artist.shortDescription;
    document.querySelector("#dialog-id").innerHTML = artist.id;

    setDisplayDialogEventListeners();

    artistDialog.showModal();
}

export function showUpdateArtistDialog() {
    document.querySelector("#show-update-dialog-btn").removeEventListener("mouseup", showUpdateArtistDialog);
    closeAllDialogs();
    const updateDialog = document.querySelector("#update-artist-dialog");
    document.querySelector("#update-artist-name").value = document.querySelector("#dialog-name").innerHTML;
    document.querySelector("#update-artist-genres").value = document.querySelector("#dialog-genre").innerHTML;
    document.querySelector("#update-artist-birthdate").value = document.querySelector("#dialog-birthdate").innerHTML;
    document.querySelector("#update-artist-active-since").value = document.querySelector("#dialog-active-since").innerHTML;
    document.querySelector("#update-artist-labels").value = document.querySelector("#dialog-labels").innerHTML;
    document.querySelector("#update-artist-website").value = document.querySelector("#dialog-website").href;
    document.querySelector("#update-artist-image").value = document.querySelector("#dialog-image").src;
    document.querySelector("#update-artist-description").value = document.querySelector("#dialog-description").innerHTML;
    document.querySelector("#update-artist-id").value = document.querySelector("#dialog-id").innerHTML;

    updateDialog.showModal();
}

export function showDeleteArtistDialog() {
    document.querySelector("#show-update-dialog-btn").removeEventListener("mouseup", showDeleteArtistDialog);
    closeAllDialogs();
    const deleteDialog = document.querySelector("#delete-artist-dialog");
    document.querySelector("#delete-artist-header").innerHTML = `Are you sure that you want to delete ${document.querySelector("#dialog-name").innerHTML}?`;
    deleteDialog.showModal();
}

export function closeAllDialogs() {
    document.querySelector("#display-artist-dialog").close();
    document.querySelector("#post-artist-dialog").close();
    document.querySelector("#update-artist-dialog").close();
    document.querySelector("#delete-artist-dialog").close();
}

export function toggleFavoriteImage(target) {
    if(target.dataset.favorite === "true") {
        target.src = "../images/not-favorited.png";
        target.dataset.favorite = "false";
    } else {
        target.src = "../images/favorited.png";
        target.dataset.favorite = "true";
    }
}

export function showFavorites(event) {
    const checkbox = event.target;

    if(!checkbox.checked) {
        handleDisplayArtistsGridFavorites();
    } else {
        handleDisplayArtistsGrid();
    }
}   