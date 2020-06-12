const patientRouter = require(`${__dirname}/routes/patientRoutes`);
const hospitalRouter = require(`${__dirname}/routes/hospitalRoutes`);
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

app.use("/api/v1/patients", patientRouter);
app.use("/api/v1/hospitals", hospitalRouter);

module.exports = app;
