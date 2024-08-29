// Import necessary modules
const express = require("express");
const router = express.Router();

// Import controller functions
const { createTodo } = require("../controller/createTodo");
const { deleteTodo } = require("../controller/deleteTodo");
const { getTodo, getTodoById } = require("../controller/getTodo");
const { updateTodo } = require("../controller/updateTodo");

// Define routes and associate them with controller functions
router.post("/createTodo", createTodo); // Create a new todo
router.get("/getTodo", getTodo); // Get all todos
router.get("/getTodoById/:id", getTodoById); // Get a specific todo by ID
router.put("/updateTodo/:id", updateTodo); // Update an existing todo
router.delete("/deleteTodo/:id", deleteTodo); // Delete a todo

// Export the router for use in other parts of your app
module.exports = router;
