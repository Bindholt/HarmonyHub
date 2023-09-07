import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';


export async function getAllArtists(req, res) {
  const file = await getFileData(); 
  const jsonFile = JSON.parse(file);
  res.json(jsonFile);
}

export async function toggleArtistFavoriteBool(req, res) {
  const file = await getFileData(); 
  const jsonFile = JSON.parse(file);
  const id = req.params.id;

  let artist = jsonFile.find((target) => target.id === id);

  artist.favorite = !artist.favorite;
  fs.writeFile("json/data.json", JSON.stringify(jsonFile, null, 2));

  res.json(jsonFile);
}

export async function deleteArtist(req, res) {
  const file = await getFileData(); 
  const jsonFile = JSON.parse(file);
  const id = req.params.id;
  let updatedJsonData = jsonFile.filter(artist => artist.id !== id);

  fs.writeFile("json/data.json", JSON.stringify(updatedJsonData, null, 2));

  res.json(updatedJsonData);
}

export async function updateArtist(req, res) {
  const file = await getFileData(); 
  const jsonFile = JSON.parse(file);
  const id = req.params.id;
  const updatedArtist = req.body;

  let artistIndex = jsonFile.findIndex(artist => artist.id === id);
  if (artistIndex !== -1) {
    jsonFile[artistIndex] = updatedArtist;
    fs.writeFile("json/data.json", JSON.stringify(jsonFile, null, 2));
    res.json(jsonFile);
  } else {
    res.status(404).json({ error: "Artist does not exist" });
  }
}

export async function postArtist(req, res) {
  const file = await getFileData(); 
  const jsonFile = JSON.parse(file);

  if (!jsonFile.find(artist => artist.name === req.body.name)) {
    const newArtist = {
      id: uuidv4(),
      ...req.body
    };

    jsonFile.push(newArtist);
    fs.writeFile("json/data.json", JSON.stringify(jsonFile, null, 2));

    res.json(jsonFile);
  } else {
    res.status(409).json({ error: "Artist already exists" });
  }
}

export async function getArtist(req, res) {
  const file = await getFileData(); 
  const jsonFile = JSON.parse(file);
  const id = req.params.id;
  const artist = jsonFile.find(artist => artist.id === id);
  res.json(artist);
}

export async function getAllArtistsFavorited(req, res) {
  const file = await getFileData(); 
  const jsonFile = JSON.parse(file);
  const favorites = jsonFile.filter(artist => artist.favorite);
  res.json(favorites);
}

function getFileData() {
    return fs.readFile("./json/data.json");
}