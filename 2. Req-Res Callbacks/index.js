// Callbacks and Next Argument
// Demonstrates using multiple callback functions in a route handler

// This example showcases how to handle requests with more than one callback function.
// The `next()` function is used to pass control to the next middleware or route handler.

app.get(
  "/double-cb",
  (req, res, next) => {
    console.log("First Callback"); // This is the first callback function
    // 'next()' allows us to jump from the first callback to the second callback
    next(); // Move to the next callback function
  },
  (req, res) => {
    res.send("Second Callback"); // Send the response from the second callback
  }
);

// Callback Functions
// Defining standalone callback functions to be used in route handlers

const cb1 = (req, res, next) => {
  console.log("First Callback"); // Log a message indicating the first callback is executed
  next(); // Call next() to pass control to the next callback function
};

const cb2 = (req, res, next) => {
  console.log("Second Callback"); // Log a message indicating the second callback is executed
  next(); // Pass control to the next callback function
};

const cb3 = (req, res) => {
  console.log("Third Callback"); // Log a message indicating the third callback is executed
  res.send("Array of Callback"); // Send a response back to the client
};

// Multiple Callback Functions in Array
// Demonstrating the use of an array of callback functions in a single route handler

// The app.get() method defines a route with multiple callbacks in an array.
// The callbacks are executed sequentially in the order they appear in the array.

app.get("/array-cb", [cb1, cb2, cb3]);

// Craziness with Combined Callbacks
// Demonstrating a more complex route handler setup with both array and inline callbacks

app.get(
  "/",
  [cb1, cb2], // Array of callback functions
  (req, res, next) => {
    console.log("Third Callback"); 
    next(); 
  },
  (req, res, next) => {
    console.log("Fourth Callback"); 
    res.send("Craziness in Fourth Callback");
  }
);

/**
 * `req` Object:
 * - `req.query`: Contains query parameters from the URL as an object.
 *   Example: In http://localhost:8000/?name=John, `req.query.name` would be "John".
 * - `req.params`: Contains route parameters as an object.
 *   Example: With a route defined as `app.get('/user/:id')`, accessing `/user/123` would make `req.params.id` equal "123".
 * - `req.body`: Contains parsed request body data, typically available when using middleware like `express.json()` or `express.urlencoded()`.
 * - `req.headers`: Contains request headers as an object.
 *   Example: `req.headers['content-type']` can be used to check the content type of the request.
 * - `req.method`: A string indicating the HTTP method used in the request (e.g., "GET", "POST").
 * - `req.url`: A string containing the path of the request URL.
 *
 * `res` Object:
 * - `res.send()`: Sends the HTTP response. The parameter can be a string, object, array, or Buffer. It automatically sets the `Content-Type` header.
 * - `res.json()`: Sends a JSON response. This method converts the parameter to a JSON string and sets the `Content-Type` header to `application/json`.
 * - `res.status()`: Sets the HTTP status code for the response. It can be chained with other methods like `res.send()`, `res.json()`, etc.
 * - `res.sendFile()`: Sends a file as an HTTP response. Useful for sending static files such as images or documents.
 * - `res.redirect()`: Redirects the client to a different URL. Accepts a status code and a URL as parameters.
 * - `res.set()`: Sets response headers. Accepts either a single key-value pair or an object of header-value pairs.
 */

