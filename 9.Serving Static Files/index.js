/* Understanding Serving Static Files */
// Serving static files involves delivering files like HTML, CSS, and JavaScript directly to the client without dynamic processing.
// This is typically achieved by configuring middleware in Express to serve files from a specific directory, making them accessible via URL paths.

import path from "path"; // Import the path module for handling file and directory paths

// Express middleware for serving static files
// This middleware allows you to serve files directly from the "public" directory
// It will automatically handle requests for files like images, CSS, JavaScript, etc.
app.use(express.static("./public"));

// Serve static files from the "assets" directory under the "/static" path
app.use("/static", express.static(path.join(process.cwd(), "assets")));

// Serve static files from the "uploads" directory with caching
app.use("/uploads", express.static(path.join(process.cwd(), "uploads"), {
  maxAge: "7d", // Cache files for 7 days
  index: false  // Do not serve index.html automatically
}));


// Route to handle the root URL "/"
// Here we send the "index.html" file as the response for requests to the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(process.cwd(), "./public/index.html")); // Send the index.html file from the public directory
});
