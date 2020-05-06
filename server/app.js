const userRouter = require(`${__dirname}/routes/userRoutes`);
const express = require("express");
// const morgan = require("morgan");

const app = express();

app.use(express.json());
app.use("/api/v1/users", userRouter);

module.exports = app;
