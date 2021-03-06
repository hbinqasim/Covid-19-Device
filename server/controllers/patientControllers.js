const fs = require("fs");
const PatientModel = require(`${__dirname}/../models/patientModels.js`);

exports.getAllPatients = (req, res) => {
  PatientModel.find()
    .then((value) => {
      res.status(200).json({
        status: "success",
        result: value.length,
        data: value,
      });
    })
    .catch((reason) => {
      res.status(404).json({
        status: "fail",
        data: reason,
      });
    });
};

exports.getPatient = (req, res) => {
  PatientModel.findById(req.params.id)
    .then((value) => {
      res.status(200).json({
        status: "success",
        data: value,
      });
    })
    .catch((reason) => {
      res.status(404).json({
        status: "fail",
        data: reason,
      });
    });
};

exports.createPatient = (req, res) => {
  console.log(req.body);
  PatientModel.create(req.body)
    .then((value) => {
      res.status(200).json({
        status: "success",
        data: value,
      });
      console.log("USER_ADDED_SUCCESS", req.body.name);
    })
    .catch((reason) => {
      res.status(400).json({
        status: "fail",
        data: reason,
      });
    });
};

exports.updatePatient = (req, res) => {
  console.log(req.body);
  const { lat, long, status } = req.body;

  let data = {};
  if (!status) {
    data = { current_location: { lat: lat, long: long } };
  } else {
    data = { status: status };
  }

  PatientModel.findByIdAndUpdate(req.params.id, data, { new: true })
    .then((value) => {
      const { current_location } = value;
      res.status(200).json({
        status: "success",
        data: current_location,
      });
    })
    .catch((reason) => {
      res.status(400).json({
        status: "fail",
        data: reason,
      });
    });
};

exports.deletePatient = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: "<DELETE TEMPORARY>",
  });
};
