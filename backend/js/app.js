import express from 'express';
import cors from 'cors';
import * as CM from './controller.js'

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

const routes = express.Router();

// Returns all artists 
routes.get("/", CM.getAllArtists);
// Returns all artists that have favorite = true
routes.get("/favorite", CM.getAllArtistsFavorited);
// Returns a single artist based on ID
routes.get("/:id", CM.getArtist);
// Posts a new artist to data.json
routes.post("/", CM.postArtist);
//Updates single artist based on ID 
routes.put("/:id", CM.updateArtist);
//Deletes a single artist based on ID
routes.delete("/:id", CM.deleteArtist);
//Changes the favorite bool to the opposite of an artist by ID
routes.patch("/favorite/:id", CM.toggleArtistFavoriteBool);

app.use("/artists", routes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});