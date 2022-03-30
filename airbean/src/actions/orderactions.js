const addItemToOrder = (item) => {
  console.log(item);
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
const increment = (data) => {
  return {
    type: "INCREMENT",
    payload: data,
  };
};

const decrement = (data) => {
  return {
    type: "DECREMENT",
    payload: data,
  };
};

export { addItemToOrder, increment, decrement };
