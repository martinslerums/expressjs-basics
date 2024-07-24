/* Understanding Middleware */
// Middleware is a function that takes in (req, res, next) and processes the request and response.
// It can modify req and res as needed and calls next() to pass control to the next middleware.
// Middleware runs between the time the server receives a request and sends a response.

const mockUser = {
  name: "name",
  password: "password",
};

// Usually, controllers are placed in separate files for better organization (demonstrated here for simplicity).
// This function acts as the route handler for the "/profile" endpoint.
// Route setup: app.get("route", middleware, route-handler)
const profileController = (req, res) => {
  console.log("WELCOME TO PROFILE PAGE");
  res.send("WELCOME TO PROFILE PAGE");
};

// Using app.use() makes middleware global.
// The logger and afterMiddleware functions will run before each route handler.
app.use(logger, afterMiddleware);

app.get("/", (req, res) => {
  console.log("WELCOME TO HOME PAGE");
  res.send("WELCOME TO HOME PAGE");
});

app.use(loginMiddleware);

// AuthMiddleware is a single-action middleware, executed only for the "/profile" route.
// The order of middleware execution for "/profile":
// 1. logger (global, runs first due to app.use())
// 2. loginMiddleware (defined globally, checks user login)
// 3. authMiddleware (specific to "/profile", authenticates request)
// 4. profileController (sends the response if authenticated)
app.get("/profile", authMiddleware, profileController);

// NOTE: Middleware executes in the order it is defined.
// The following app.use() is defined after our route handlers, so it won't run for those routes.
// This is why global middleware is usually placed at the top of the file.
// To ensure this middleware runs, add next() in route handlers where needed.
app.use(notLoggedMiddleware);

function loginMiddleware(req, res, next) {
  // Middleware must call next() to pass control to the next middleware or route handler.
  // This middleware is executed for each route request due to app.use().
  // Without next(), the request would be stuck here.

  console.log("I am the Login Middleware");
  if (
    req.query.name === mockUser.name &&
    req.query.password === mockUser.password
  ) {
    // Authentication success example: http://localhost:8000/feed?name=name&password=password
    console.log("Login successful");
    next();
    // Use return to prevent code outside this if block from executing.
    return;
  }
  res.send("Auth failed");
}

function authMiddleware(req, res, next) {
  console.log("You have been authenticated");
  next();
}

function logger(req, res, next) {
  console.log("Log");
  next();
}

function notLoggedMiddleware(req, res, next) {
  console.log("This will not be logged");
  next();
}

// To run middleware after route handlers, call next() immediately.
// This allows control to return to this middleware after the route handler finishes.
function afterMiddleware(req, res, next) {
  next()
  console.log("This middleware is run after every route handler")
}
