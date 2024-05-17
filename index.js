const express = require("express");
const app = express();

//  data ko parser
app.use(express.json());

require("dotenv").config();
const PORT = process.env.port || 4000;
//  bad practise
// let port = 8080;
// app.listen(8080, () => {
//   console.log(`app is listenting on ${port}`);
// });

const todoRoutes = require("./routes/todo");
app.use("/api/v1", todoRoutes);
app.listen(PORT, () => {
  console.log(`app is listenting on ${PORT}`);
});
//

// connet to db
const dbConnect = require("./config/database");
dbConnect();

//  default route
app.get("/", (req, res) => {
  res.send(`<h1> this is my homepage</h1>`);
});
