const envelopeRouter = require("express").Router();
module.exports = envelopeRouter;
const { createEnvelope } = require("../objects/envelopeObj");

const envelopes = [];

envelopeRouter.param("envelopeId", (req, res, next, id) => {
  const envelope = envelopes.find((elem) => (elem.id === parseInt(id)));
  if (envelope) {
    req.envelope = envelope;
    next();
  } else {
    res.status(404).send();
  }
});

envelopeRouter.get("/", (req, res, next) => {
  res.send(envelopes);
});

envelopeRouter.post("/", (req, res, next) => {
  const newEnvelope = createEnvelope(req.body);
  if (newEnvelope) {
    envelopes.push(newEnvelope);
    res.status(201).send(envelopes);
  } else {
    res.status(500).send();
  }
});

envelopeRouter.get("/:envelopeId", (req, res, next) => {
  res.send(req.envelope);
});
