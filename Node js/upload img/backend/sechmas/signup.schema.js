const mongoose = require("mongoose");
const attachemntmodel = require("./attachment.scema");

const singupSchema = mongoose.Schema({
  fullname: String,
  email: String,
  profilePic: {
    type: Schema.type.ObjectId,
    ref: "attachment",
  },
  gender: String,
  password: String,
});

const singupModel = new mongoose.model("singup", singupSchema);


module.exports = singupModel;







