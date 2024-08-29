//  import the model
const todo = require("../models/todo");

// define route handler

exports.createTodo = async (req, res) => {
  try {
    // extract tittle and description
    const { tittle, description } = req.body;
    //create a new todo object and insert in db
    const response = await todo.create({ tittle, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry created succesful",
    });
  } catch (err) {

    console.log(err);
    res.status(500).json({
      success: false,
      data: "server not found ",
      message: err.message,
    });
  }
};
