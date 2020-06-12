const fs = require("fs");
const hospitalModel = require(`${__dirname}/../models/hospitalModels`);

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
  hospitalModel
    .create(req.body)
    .then((value) => {
      res.status(200).json({
        status: "success",
        data: value,
      });
    })
    .catch((reason) => {
      res.status(400).json({
        status: "fail",
        data: reason,
      });
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
