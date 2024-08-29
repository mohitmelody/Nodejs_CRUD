const todo = require("../models/todo");

exports.deleteTodo = async (req, res) => {
  try {
const {id} = req.params;
console.log(id)
await todo.findByIdAndDelete({id});
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