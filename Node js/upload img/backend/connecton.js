const mongoose = require("mongoose");

const connection = async () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect("mongodb://localhost:9000/img", {
      useUnifiedToplogy: true,
      useNewUrlParser: true,
      w: "majority",
    });
    console.log("database successfuly connect to database");
  } catch (error) {
    console.log("database can not connected to the database"+error);
  }

};



module.exports = connection;
