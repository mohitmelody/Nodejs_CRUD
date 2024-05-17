const todo = require("../models/todo");

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const { tittle, description } = req.body;
    const todo = await todo.findByIdAndUpdate(
      { _id: id },
      {
        tittle,
        description,
        updatedAt: Date.now(),
      },
    )
    res.status(200).json({
        success: true,
        data: todo,
        message: "update successful ",
  })
 } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      data: "internal server error",
      message: err.message,
  })
}
};