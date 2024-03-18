const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("your_mongoDB");
    console.log("Connect DB");
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;
