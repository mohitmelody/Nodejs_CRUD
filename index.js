const express = require("express");
const app = express();

// Middleware to parse URL-encoded data (e.g., form submissions)
app.use(express.urlencoded({ extended: true }));

// Load environment variables from a file (assuming it's named ".env")
require("dotenv").config({
  path: "./env",
});

// Define the port for your Express app
const Port = process.env.Port || 4000;
app.listen(Port, () => {
  console.log(`App is listening on port ${Port}`);
});

// Import and use your todo routes
const todoRoutes = require("./routes/todo.js");
app.use("/api/v1", todoRoutes);

// Connect to your database
const dbConnect = require("./config/database.js");
dbConnect();

// Define a simple homepage route
app.get("/", (req, res) => {
  res.send("This is my homepage");
});
