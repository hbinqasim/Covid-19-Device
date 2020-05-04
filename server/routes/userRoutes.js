const c = require(`${__dirname}/../controllers/userControllers`);
const express = require("express");
const userRouter = express.Router();

userRouter.route("/").get(c.getAllUsers);

module.exports = userRouter;
