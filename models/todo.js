const mongoose = require("mongoose");

// Define a Mongoose schema for your "todo" collection
const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true, // The title is mandatory for each todo item
    maxLength: 50, // Keep it concise and within a reasonable length
  },
  description: {
    type: String,
    required: true, // A description is also required
    maxLength: 50, // Again, let's keep it succinct
  },
  createdAt: {
    type: Date,
    required: true,
    default: Date.now(), // Set the creation timestamp automatically
  },
  updatedAt: {
    type: Date,
    required: true,
    default: Date.now(), // Also set the update timestamp by default
  },
});

// Create a model based on the schema
module.exports = mongoose.model("todo", todoSchema);