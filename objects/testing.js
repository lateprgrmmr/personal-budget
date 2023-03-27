testArray = [
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

console.log(testArray);

const found = testArray.find((elem => elem.id === parseInt('6233')));
console.log(found);


// { "name": "test1", "description": "testing stuff1", "amount": 500 }
// { "name": "test2", "description": "testing stuff2", "amount": 225 }
// { "name": "test3", "description": "testing stuff3", "amount": 345 }