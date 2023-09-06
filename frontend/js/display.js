import { handleUpdateArtist } from "./submit.js";
import { setDisplayDialogEventListeners, setUpdateDialogEventListeners } from "./event-listeners.js";

export function displayArtistsGrid(artistsArray) {
    document.querySelector("#artists-grid").innerHTML = "";
    for (const artist of artistsArray) {
        const artistHTML = /*html */ `
            <article id="artist-id${artist.id}">
                <div>
                    <h3><span>${artist.name}</span></h3>
                    <img src="${artist.image}" alt="Image of artist">
                </div>        
            </article>
        `
        document.querySelector("#artists-grid").insertAdjacentHTML("beforeend", artistHTML);
        document.querySelector("#artist-id" + artist.id).addEventListener("mouseup", () => {
            showDisplayArtistDialog(artist);
        });
    }
}

function showDisplayArtistDialog(artist) {
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

    setDisplayDialogEventListeners(artist);

    artistDialog.showModal();
}

function showUpdateArtistDialog(artist) {
    closeAllDialogs();
    const updateDialog = document.querySelector("#update-artist-dialog");
    document.querySelector("#update-artist-name").value = artist.name;
    document.querySelector("#update-artist-genres").value = artist.genres;
    document.querySelector("#update-artist-birthdate").value = artist.birthdate ;
    document.querySelector("#update-artist-active-since").value = artist.activeSince;
    document.querySelector("#update-artist-labels").value = artist.labels;
    document.querySelector("#update-artist-website").value = artist.website;
    document.querySelector("#update-artist-website").value = artist.website;
    document.querySelector("#update-artist-image").value = artist.image;
    document.querySelector("#update-artist-description").value = artist.shortDescription;
    document.querySelector("#update-artist-id").value = artist.id;

    setUpdateDialogEventListeners(artist.id);
    updateDialog.showModal();
}

function closeAllDialogs() {
    document.querySelector("#display-artist-dialog").close();
    // document.querySelector("#display-artist-dialog").close();
    document.querySelector("#update-artist-dialog").close();
}