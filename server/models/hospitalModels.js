const mongoose = require("mongoose");
const hospitalSchema = new mongoose.Schema({
  name: { type: String },
  CNIC: { type: String },
  address: { type: String },
  contact: { type: String },
  email: { type: String },
});

const Hospital = mongoose.model("Hospital", hospitalSchema);

module.exports = Hospital;
