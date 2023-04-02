const getObjectFromArray = (arr, id) => {
  const foundIndex = arr.findIndex((elem) => elem.id === parseInt(id));
  if (foundIndex === -1) {
    throw new Error(`Couldn't find object with id: ${id}`);
  } else {
    return arr[foundIndex];
  }
};

const updateObjectInArray = (arr, obj) => {
  const foundIndex = arr.findIndex((elem) => elem.id === parseInt(obj.id));
  if (foundIndex === -1) {
    throw new Error(`Could not find object to update with id: ${obj.id}`);
  } else {
    arr[foundIndex] = obj;
    return arr;
  }
};

const deleteFromArraybyId = (arr, id) => {
  let index = arr.findIndex((element) => {
    return element.id === parseInt(id);
  });
  if (index !== -1) {
    arr.splice(index, 1);
    return true;
  } else {
    return false;
  }
};

module.exports = {
  getObjectFromArray,
  updateObjectInArray,
  deleteFromArraybyId,
};
