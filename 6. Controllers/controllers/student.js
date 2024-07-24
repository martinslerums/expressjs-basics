import express from "express";

// Define controller functions for handling specific requests
const allStudents = (req, res) => {
  res.send("GET Students");
};

const newStudent = (req, res) => {
  res.send("POST Students");
};

const updateStudent = (req, res) => {
  res.send("PUT Students");
};

const deleteStudent = (req, res) => {
  res.send("DELETE Students");
};

// Export the controller functions for use in route definitions
export { allStudents, newStudent, updateStudent, deleteStudent };
