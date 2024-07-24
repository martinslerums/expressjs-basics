//Basic routing
app.get("/", (req, res) => {
  res.send("<h1> WELCOME TO HOME </h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1> WELCOME TO ABOUT :) </h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1> CONTACT PAGE </h1>");
});

// String Pattern Path
app.get("/ab?cd", (req, res) => {
  res.send("This will run if user hits abcd or acd as b is optional");
});
// Regex
app.get(/x/, (req, res) => {
  res.send("This will run if user hits path that includes x");
});
app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send(
    "This will run if user hits path that includes is /users/and-four-digit-number"
  );
});
// Nested Routing
app.get("/products/iphone", (req, res) => {
  res.send("This will run if user hits /products/iphone");
});

