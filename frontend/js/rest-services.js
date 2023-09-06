const endpoint = "http://localhost:3000/";
const headers = {"Content-Type": "application/json"};

// Returns array of artists from backend 
export async function getArtists() {
    const uri = "artists";
    const options = {
        method: "GET",
        headers,
    };

    const response = await fetch(endpoint + uri, options);

    return response;
}

// Returns array of favorited artists
export async function getArtistsFavorited() {
    const uri = "artists/favorite";
    const options = {
        method: "GET",
        headers,
    };

    const response = await fetch(endpoint + uri, options);

    return response;
}

//Returns single artist object from backend. Dont think this one is needed 
export async function getArtistByID(id) {
    const uri = `artists/${id}`;
    const options = {
        method: "GET",
        headers,
    };

    const response = await fetch(endpoint + uri, options);

    return response;
}

// Updates single artist by id, with artist json body
export async function updateArtist(artist) {
    const jsonArtist = JSON.parse(artist)
    const uri = `artists/${jsonArtist.id}`;
    const options = {
        method: "PUT",
        headers,
        body: artist,
    };

    const response = await fetch(endpoint + uri, options);

    return response;
}

// Posts new artist
export async function postArtist(artist) {
    const uri = `artists`;
    const options = {
        method: "POST",
        headers,
        body: artist,
    };

    const response = await fetch(endpoint + uri, options);

    return response;
}

//deletes single artist based on ID
export async function deleteArtist(id) {
    const uri = `artists/${id}`;
    const options = {
        method: "DELETE",
        headers,
    };

    const response = await fetch(endpoint + uri, options);

    return response;
}

//updates single artist's favorite bool to the opposite
export async function updateArtistFavorite(id) {
    const uri = `artists/favorite/${id}`;
    const options = {
        method: "PATCH",
        headers,
    };

    const response = await fetch(endpoint + uri, options);

    return response;
}

