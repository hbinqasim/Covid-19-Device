const fs = require("fs");
const tempdata = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/patients.json`)
);

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
