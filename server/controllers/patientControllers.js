const fs = require("fs");
const PatientModel = require(`${__dirname}/../models/patientModels.js`);

exports.getAllPatients = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "<All TEMPORARY>",
  });
};

exports.getPatient = (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
    data: "<ONE TEMPORARY>",
  });
};

exports.createPatient = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: "<CREATE TEMPORARY>",
  });
};

exports.updatePatient = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: "<UPDATE TEMPORARY>",
  });
};

exports.deletePatient = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: "<DELETE TEMPORARY>",
  });
};
