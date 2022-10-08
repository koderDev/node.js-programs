//Mongoose module helps to connect with mongoDB
const mongoose = require("mongoose");

//Create a .env file and add MONGO_URL="your mongo url" 
//your mongo url is the url you create while making an account 
mongoose.connect(process.env.MONGO_URL, (err) => {
    if (!err) {
        console.log('MongoDB Connection Succeeded.');
      } else {
        console.log('Error in DB connection : ' + err);
      }
    });