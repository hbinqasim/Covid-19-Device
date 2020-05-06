const fs = require("fs");
const tempdata = JSON.parse(
  fs.readFileSync(`${__dirname}/../data/hospitals.json`)
);

exports.getAllHospitals = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "<All TEMPORARY>",
  });
};

exports.getHospital = (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
    data: "<ONE TEMPORARY>",
  });
};

exports.createHospital = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: "<CREATE TEMPORARY>",
  });
};

exports.updateHospital = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: "<UPDATE TEMPORARY>",
  });
};

exports.deleteHospital = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: "<DELETE TEMPORARY>",
  });
};
