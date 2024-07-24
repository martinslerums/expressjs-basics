//Dependecies in this level
//Code can be run from this file.

import express from "express";

const port = 8000;
const app = express();



app.listen(port, () => console.log(`Listening to server on port: ${port}`));
