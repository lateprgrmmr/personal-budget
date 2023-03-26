const express = require("express");
const apiRouter = express.Router();

const testRouter = require("./test");

apiRouter.use("/test", testRouter);

module.exports = apiRouter;
