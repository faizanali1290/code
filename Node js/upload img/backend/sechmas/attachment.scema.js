const mongoose = require("mongoose");

const attachemntsecma = mongoose.Schema({
  filename: String,
  fieldname: String,
  pathname: String,
  mimetype: String,
  size: String,
  encoding: String,
});

const attachemntmodel = new mongoose.model("attachment", attachemntsecma);
module.exports = attachemntmodel;



