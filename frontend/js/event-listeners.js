export function setEventListeners() {

}

export function setDisplayDialogEventListeners(artist) {
    //add close dialog button and delete button eventlisteners
    document.querySelector("#show-update-dialog-btn").addEventListener("mouseup", () => {
        showUpdateArtistDialog(artist);
    });
}

export function setUpdateDialogEventListeners(id) {
    //add close dialog button
    document.querySelector("#update-artist-form").addEventListener("submit", handleUpdateArtist)
}