import { updateArtist } from "./rest-services.js";

export async function handleUpdateArtist(event) {
    event.preventDefault();
    const form = event.target;
    form.removeEventListener("submit", handleUpdateArtist);

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

    console.log(JSON.stringify(artistData, null, 2));
    const response = await updateArtist(JSON.stringify(artistData, null, 2));
    console.log(await response.json());
}