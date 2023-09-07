import { artists } from "./setArtists.js";
import { displayArtistsGridBySearch } from "./display.js";

export function searchByName(event) {
    const searchvalue = event.target.value
    const searchArtistFilter = artists.filter(artist => artist.name.toLowerCase().includes(searchvalue.toLowerCase()));
    displayArtistsGridBySearch(searchArtistFilter);
}

//Handle the sorting functionality
export function sortArtists(event){
    const selectedValue = event.target.value;
    let sortedArtists = [];

    switch (selectedValue) {
        case "name-ascending":
            sortedArtists = artists.sort((a,z) => a.name.localeCompare(z.name));
            break;
        case "name-descending":
            sortedArtists = artists.sort((a,z) => z.name.localeCompare(a.name));
            break;
        case "active-since-ascending":
            sortedArtists = artists.sort((a,b) => b.activeSince.localeCompare(a.activeSince));
            break;
        case "active-since-descending":
            sortedArtists = artists.sort((a,b) => a.activeSince.localeCompare(b.activeSince));
            break;
    }

    displayArtistsGridBySearch(sortedArtists);
}