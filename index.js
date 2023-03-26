const express = require("express");
const app = express();

module.exports = app;

const PORT = process.env.PORT || 3000;

const cors = require("cors");
app.use(cors());
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const apiRouter = require("./server/api");
app.use("/api", apiRouter);

app.listen(PORT, () => {
  console.log(`Hello world, server is listening on port ${PORT}`);
});
