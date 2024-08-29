const mongoose = require("mongoose");

// Load environment variables from a .env file
require("dotenv").config();

// Define a function to establish a database connection
const dbConnect = () => {
  mongoose.connect(process.env.database_api, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.error("Issue in database connection:");
    console.error(error.message);
    process.exit(1); // Exit the process if there's an error
  });
};

// Export the dbConnect function
module.exports = dbConnect;
