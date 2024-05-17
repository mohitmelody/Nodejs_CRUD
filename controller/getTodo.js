const todo = require("../models/todo");

exports.getTodo = async (req, res) => {
  try {
    // fetch all items from database
    const todos = await todo.find({});

    // response update
    res.status(200).json({
      success: true,
      data: todos,
      message: "enter todo data is fetched ",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
    });
  }
};

exports.getTodoById = async (req, res) => {
  try {
    // extract todoitems by id
    const id = req.params.id;
    const todo = await Todo.find({_id: id, });

    if(!todo){
        return res.status(404).json({
            success:false,
            message:"no data found with givcen id "
        })
    }
    res.status(200).json({
        success:true,
        data:todo,
        message:`todo ${id } data succesfully transferred`
    })
  } catch (err) {
    console.err(err)
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
  })
}
}
