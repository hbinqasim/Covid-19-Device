const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: String,
});

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
