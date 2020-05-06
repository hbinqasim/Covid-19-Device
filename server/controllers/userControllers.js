const fs = require("fs");
const tempdata = JSON.parse(fs.readFileSync(`${__dirname}/../data/users.json`));

exports.getAllUsers = (req, res) => {
  res.status(200).json({
    status: "success",
    data: "<All TEMPORARY>",
  });
};

exports.getUser = (req, res) => {
  console.log(req.params);
  res.status(200).json({
    status: "success",
    data: "<ONE TEMPORARY>",
  });
};

exports.createUser = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: "<CREATE TEMPORARY>",
  });
};

exports.updateUser = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: "<UPDATE TEMPORARY>",
  });
};

exports.deleteUser = (req, res) => {
  console.log(req.body);
  res.status(200).json({
    status: "success",
    data: "<DELETE TEMPORARY>",
  });
};
