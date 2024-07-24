/* Understanding Query Strings */
// Query strings are parts of a URL that follow a question mark (?) and are used to pass data from the client to the server.
// They consist of key-value pairs separated by the & sign and allow dynamic data retrieval based on client input.
// Example query string: ?category=apple&id=12
// Full URL example: http://localhost:8000/product?category=apple&id=12

import products from "./7. Query String/products.js";


app.get("/product", (req, res) => {
  // Extract query parameters `category` and `id` from the URL
  const { category, id } = req.query;
  res.send(`Product Category: ${category} Product ID: ${id}`);
});

// Route to handle GET requests to "/products" with optional filtering
// Filter products based on the `category` query parameter if provided
// Respond with the filtered list of products or all products if no category is specified
app.get("/products", (req, res) => {
  const { category } = req.query;

  const filteredProducts = category
    ? products.filter((product) => product.category.toLowerCase() === category.toLowerCase())
    : products;

  // Send the list of products as JSON
  res.json(filteredProducts);
});
