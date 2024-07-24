/* Understanding Route Params */
// Route parameters allow you to capture dynamic values from the URL.
// Example: In the route "/ecom/products/iphone/:model", `:model` is a dynamic parameter 
// that can be accessed in the route handler.

app.get("/ecom/products/iphone/:model", (req, res) => {
  // Destructure the dynamic `model` parameter from the Requests objects params
  const { model } = req.params;
  res.send(`Phone model: ${model}`);
});

// Handling multiple dynamic route parameters
// Example: "/product/:category/:id" where `:category` and `:id` are dynamic parameters

app.get("/product/:category/:id", (req, res) => {
  const { category, id } = req.params;
  res.send(`Product category: ${category} Product ID: ${id}`); // Respond with category and ID
});

// Using app.param middleware
/*
The `app.param()` function allows you to define middleware that executes 
whenever a specific route parameter is matched. 
This is useful for tasks like parameter validation or data fetching 
before the main route handler is called.
*/

app.param("id", (req, res, next, id) => {
  console.log(`ID: ${id}`);

  // Example validation: Ensure `id` is numeric
  if (!/^\d+$/.test(id)) {
    return res.status(400).send('Invalid ID format, must be a number.');
  }
  // Proceed to the next middleware or route handler
  next();
});

// Route that uses the `app.param` middleware
// This route will use the `app.param` middleware to validate the `id` parameter
app.get("/user/:id", (req, res) => {
  console.log("This is User ID Path");
  res.send(`Response OK for user ID: ${req.params.id}`); 
});
