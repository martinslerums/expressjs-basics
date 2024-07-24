/* Understanding app.route() */
// The `app.route()` method allows chaining multiple HTTP method handlers for the same route. 
// This approach improves code readability and organization by grouping related route handlers together.

// NOTE: These end-points can be easily tested with POSTMAN Agent
// POSTMAN is a tool for testing APIs by sending requests to these endpoints and viewing responses.

// Ugly Code Example
// Define multiple HTTP methods for the same route separately

app.get("/students", (req, res) => {
  res.send("GET all students"); 
});
app.post("/students", (req, res) => {
  res.send("ADD new students");
});
app.put("/students", (req, res) => {
  res.send("EDIT students");
});
app.delete("/students", (req, res) => {
  res.send("DELETE students"); 
});

// Refactor using app.route()
// Chain multiple HTTP methods for a single route for better organization

app
  .route("/students")
  .get((req, res) => {
    res.send("GET all students"); 
  })
  .post((req, res) => {
    res.send("ADD new students"); 
  })
  .put((req, res) => {
    res.send("EDIT students"); 
  })
  .delete((req, res) => {
    res.send("DELETE students");
  });