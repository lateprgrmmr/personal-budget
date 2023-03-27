const createEnvelope = (reqBody) => {
  return {
    id: Math.floor(Math.random() * 9999),
    name: reqBody.name,
    description: reqBody.description,
    amount: reqBody.amount,
  };
};

module.exports = { createEnvelope };
