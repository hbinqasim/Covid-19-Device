const express = require("express");
const hospitalRouter = express.Router();

const {
  getAllHospitals,
  getHospital,
  createHospital,
  updateHospital,
  deleteHospital,
} = require(`${__dirname}/../controllers/hospitalControllers`);

hospitalRouter.route("/").get(getAllHospitals).post(createHospital);
hospitalRouter
  .route("/:id")
  .get(getHospital)
  .patch(updateHospital)
  .delete(deleteHospital);

module.exports = hospitalRouter;
