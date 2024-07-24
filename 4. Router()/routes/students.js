import express from "express";

// Create a new instance of the Express Router
const router = express.Router();

// Define routes for the /students path
// Each route method (GET, POST, PUT, DELETE) handles specific actions
router.get("/all", (req, res) => {
  res.send("All Students");
});

router.post("/create", (req, res) => {
  res.send("Create new Student");
});

router.put("/update", (req, res) => {
  res.send("Update Student");
});

router.delete("/delete", (req, res) => {
  res.send("Remove Student");
});

export default router;