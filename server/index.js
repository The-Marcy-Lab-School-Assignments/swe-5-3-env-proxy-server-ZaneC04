//////////////////////////
// Imports
//////////////////////////

const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

//////////////////////////
// Constants
//////////////////////////

const port = 8080;
const pathToFrontend = path.join(__dirname, '../frontend');
const app = express();

//////////////////////////
// Middleware/Controllers
//////////////////////////


const serveStatic = express.static(pathToFrontend);

const serveGifs = async (req, res, next) => {
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/trending?limit=10&rating=g&api_key=${process.env.API_KEY}`)
        if (!response.ok) {
            throw Error(`Fetch failed. ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        res.send(data)
    }

    catch (error) {
        res.status(503).send(error);
    }
}

const serveSearchGifs = async (req, res, next) => {
    const searchTerm = req.query.q
    try {
        const response = await fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${process.env.API_KEY}`)
        if (!response.ok) {
            throw new Error(`Fetch Failed: ${response.status} ${response.statusText}`,);
        }
        const data = await response.json()
        res.send(data)
    }
    catch (error) {
        res.status(503).send(error)
    }
}




app.use(serveStatic);

app.get("/api/gifs", serveGifs)
app.get("/api/gifs/search", serveSearchGifs)

//////////////////////////
// Listener
//////////////////////////

app.listen(port, () => console.log(`listening at http://localhost:${port}`)); 