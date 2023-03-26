const testRouter = require("express").Router();
module.exports = testRouter;

testRouter.get("/", (req, res, next) => {
  res.send("HELLOO FROM HERE...");
});
