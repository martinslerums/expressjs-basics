# expressjs-basics

//Basic express.js server
//1. Create Folder
//2. npm init -y
//3. npm i express
//4. Create Instance express
//5. Provide port for instances to listen (for example 8000)
//6. Basic route that goes to / ( home )

```
import express from "express";
```
//Initialize express instance
```
const app = express();
```
//Server Port
```
const port = 8000;
```
//Basic route for home
```
app.get("/", (req, res) => {
  res.send("Welcome to ExpressJS");
});
```
//Listening to our port.
```
  app.listen(port, () => {
    console.log("Listening to server");
  });
```
