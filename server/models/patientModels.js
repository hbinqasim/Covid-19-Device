const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String },
  CNIC: { type: String },
  age: { type: Number },
  address: { type: String },
  contact: { type: String },
  email: { type: String },
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
