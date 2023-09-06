import express from 'express';
import cors from 'cors';
import fs from 'fs/promises';
import { v4 as uuidv4 } from 'uuid';

const app = express();
app.use(express.json());
app.use(cors());

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", async (req, res) => {
    res.send("Works");
});

// Returns all artists from data.json
app.get("/artists", async (req, res) => {
    const file = await fs.readFile("json/data.json");
    const jsonFile = JSON.parse(file);
    res.json(jsonFile);
});

app.get("/artists/:id", async (req, res) => {
    const file = await fs.readFile("json/data.json");
    const jsonFile = JSON.parse(file);
    const id = req.params.id;
    const artist = jsonFile.find(artist => artist.id === id)
    res.json(artist);
});

// Posts a new artist to data.json
app.post("/artists", async (req, res) => {
    const file = await fs.readFile("json/data.json");
    const jsonFile = JSON.parse(file);

    if (!jsonFile.find(artist => artist.name === req.body.name)) {
      const newArtist = {
        id: uuidv4(),
        ...req.body
      }
      
      jsonFile.push(newArtist);
      fs.writeFile("json/data.json", JSON.stringify(jsonFile, null, 2));
      
      res.json(jsonFile);
    } else {
      res.status(404).json({error: "Artist already exists"});
    }
    
});


//Updates single artist in data.json based on ID 
app.put("/artists/:id", async (req, res) => {
    const file = await fs.readFile("json/data.json");
    const jsonFile = JSON.parse(file);
    const id = req.params.id;
    const updatedArtist = req.body;

    let artistIndex = jsonFile.findIndex(artist => artist.id === id);
    if (artistIndex !== -1) {
      jsonFile[artistIndex] = updatedArtist;
      fs.writeFile("json/data.json", JSON.stringify(jsonFile, null, 2));
      res.json(jsonFile);
    } else {
      res.status(404).json({ error: "Artist does not exist"});
    }
    
});

//Deletes a single artist based on ID
app.delete("/artists/:id", async (req, res) => {
    const file = await fs.readFile("json/data.json");
    const jsonFile = JSON.parse(file);
    const id = req.params.id;
    let updatedJsonData = jsonFile.filter(artist => artist.id !== id);
    
    fs.writeFile("json/data.json", JSON.stringify(updatedJsonData, null, 2));

    res.json(jsonFile);
});