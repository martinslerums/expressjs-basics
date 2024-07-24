/* Understanding Router() */
// The `express.Router()` method creates a new router object that can be used to define routes.
// It allows you to modularize route handling by grouping related routes into separate files. 
// This improves code organization and maintainability by separating route logic from the main application.

// Import route modules with the file extension (.js)
import students from "./routes/students.js";
import teachers from "./routes/teachers.js";

// Express application setup

// Use Express Router to modularize routes
// 1. Create a routes folder and place route definitions in separate files for better organization.
// 2. Create an instance of `express.Router()` in each route file.
// 3. Define routes using `router.method` instead of `app.method`.
// 4. Export the router from each route file.
// 5. Import the router into the main application file.
// 6. Use `app.use()` to apply the routers to specific route paths.

// Attach the imported routers to the Express application
// The route prefix ("/students" or "/teachers") is defined here, and requests will be handled by the respective router.
// Example route: http://localhost:8000/students/all
// This will use the routes defined in the students router file.
app.use("/students", students);
app.use("/teachers", teachers);
