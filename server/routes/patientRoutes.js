const express = require("express");
const patientRouter = express.Router();

const {
  getAllPatients,
  getPatient,
  createPatient,
  updatePatient,
  deletePatient,
} = require(`${__dirname}/../controllers/patientControllers`);

patientRouter.route("/").get(getAllPatients).post(createPatient);
patientRouter
  .route("/:id")
  .get(getPatient)
  .patch(updatePatient)
  .delete(deletePatient);

module.exports = patientRouter;
