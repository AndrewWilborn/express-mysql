import express from "express";
import cors from "cors";
import { getMovies } from "./src/movies.js";

const PORT = 3009

const app = express()
app.use(cors())
app.use(express.json())

app.get("/movies", getMovies)

app.listen(PORT, () => {
    console.log(`Listening on port http://localhost:${PORT}`);
});