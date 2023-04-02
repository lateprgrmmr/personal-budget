const envelopeRouter = require("express").Router();
module.exports = envelopeRouter;
const { createEnvelope } = require("../objects/envelopeObj");
const {
  getObjectFromArray,
  updateObjectInArray,
  deleteFromArraybyId,
} = require("../server/utils");

const envelopes = [
  {
    id: 1354,
    name: "Rent",
    amount: 600,
  },
  {
    id: 5234,
    name: "Gas",
    amount: 225,
  },
  {
    id: 6233,
    name: "Phone",
    amount: 170,
  },
];
envelopeRouter.param("envelopeId", (req, res, next, id) => {
  const envelope = getObjectFromArray(envelopes, id);
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

envelopeRouter.put("/:envelopeId", (req, res, next) => {
  const newArr = updateObjectInArray(envelopes, req.body);
  res.send(newArr);
});

envelopeRouter.delete("/:envelopeId", (req, res, next) => {
  const deleted = deleteFromArraybyId(envelopes, req.body.id);
  if (deleted) {
    res.status(204);
  } else {
    res.status(500);
  }
  res.send();
});
