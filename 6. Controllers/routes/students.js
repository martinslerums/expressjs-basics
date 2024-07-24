import express from "express";
import {
  allStudents,   
  newStudent,    
  updateStudent, 
  deleteStudent  
} from "../controllers/student.js";

// Create an Express router instance for defining routes related to students
const router = express.Router();

// Define routes and associate them with controller functions
router.get("/all", allStudents);
router.post("/create", newStudent);
router.put("/update", updateStudent);
router.delete("/delete", deleteStudent);

export default router;
