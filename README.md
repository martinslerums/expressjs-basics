# expressjs-basics

This project demonstrates various aspects of Express.js through different topics. Each topic is organized into its own folder, with an index.js file that showcases a specific feature or concept. Follow the instructions below to set up and explore these topics.

```
//Basic express.js server
1. Create Folder
2. npm init -y
3. npm i express
4. Create Instance express
5. Provide port for instances to listen (for example 8000)
6. Basic route that goes to / ( home )
```

```
import express from "express";
```
Initialize express instance
```
const app = express();
```
Server Port
```
const port = 8000;
```
Basic route for home
```
app.get("/", (req, res) => {
  res.send("Welcome to ExpressJS");
});
```
Listening to our port.
```
app.listen(port, () => {
  console.log("Listening to server");
});
```
