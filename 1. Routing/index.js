/* Understanding Routing */

// Routing in Express involves defining how different URL paths are handled by specifying route handlers for each path.
// These handlers respond to client requests with appropriate content or actions based on the URL and HTTP method used.

// Basic Routing: Define routes for simple URL paths
app.get("/", (req, res) => {
  res.send("<h1>WELCOME TO HOME</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>WELCOME TO ABOUT :)</h1>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>CONTACT PAGE</h1>");
});

// String Pattern Path: Use a pattern to match routes where certain characters are optional
app.get("/ab?cd", (req, res) => {
  res.send("This will run if user hits abcd or acd as b is optional");
});

// Regex Route: Use regular expressions to match more complex patterns in the URL
app.get(/x/, (req, res) => {
  res.send("This will run if user hits a path that includes 'x'");
});

// Regex Route with Specific Pattern: Match paths with a specific structure using regex
app.get(/^\/users\/[0-9]{4}$/, (req, res) => {
  res.send("This will run if user hits a path that includes /users/ and a four-digit number");
});

// Nested Routing: Define routes for nested paths
app.get("/products/iphone", (req, res) => {
  res.send("This will run if user hits /products/iphone");
});

