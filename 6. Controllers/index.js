/* Understanding Controllers */
// Controllers encapsulate the logic for handling requests and generating responses.
// They help separate business logic from routing definitions.

// Steps to organize controllers:
// 1. Create a routes file to define all the endpoints for a particular resource.
// 2. Create a controllers file to define the callback functions that handle requests for those endpoints.

import students from "./6. Controllers/routes/students.js";

// Use the imported routes module under the "/students" path
// This sets up the routing for student-related operations by delegating requests to the `students` router
app.use("/students", students);
