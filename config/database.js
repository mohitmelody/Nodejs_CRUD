const mongoose = require("mongoose")
// for feed process object
require("dotenv").config();

const dbConnect = () =>{
    mongoose.connect(process.env.database_api,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=> console.log("db connection successful"))
    .catch( (error)=>{
        console.log(" issue in db connection")
        console.log(error.messgae);
        process.exit(1);
    });
}

module.exports = dbConnect;