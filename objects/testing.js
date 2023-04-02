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

// const found = testArray.find((elem => elem.id === parseInt('6233')));
// console.log(found);

let id = "6233";

const getObjectFromArray = (arr, id) => {
  const foundIndex = arr.findIndex((elem) => elem.id === parseInt(id));
  console.log(foundIndex);
  if (foundIndex === -1) {
    console.log(`Couldn't find object with id: ${id}`);
    return;
  } else {
    console.log(testArray[foundIndex]);
    return testArray[foundIndex];
  }
};

const updateObjectInArray = (arr, id) => {
  // console.log(parseInt(obj.id));
  if (foundIndex === -1) {
    console.log(`Could not find object to update with id: ${id}`);
    return;
  } else {
    console.log("here");
    arr[foundIndex] = obj;
    console.log(arr);
    return arr;
  }
};
// { "name": "test1", "description": "testing stuff1", "amount": 500 }
// { "name": "test2", "description": "testing stuff2", "amount": 225 }
// { "name": "test3", "description": "testing stuff3", "amount": 345 }
// getObjectFromArray(testArray, id);
let obj1 = {
  id: 5234,
  name: "Gas for car",
  amount: 255,
};
// updateObjectInArray(testArray, obj1);

const deleteFromArraybyId = (arr, id) => {
  let index = arr.findIndex((element) => {
    return element.id === parseInt(id);
  });
  if (index !== -1) {
    arr.splice(index, 1);
    console.log(arr);
    return true;
  } else {
    return false;
  }
};

deleteFromArraybyId(testArray, id);
