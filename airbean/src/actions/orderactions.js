const addItemToOrder = (item) => {
  console.log(item);
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};
const increment = (item) => {
  console.log("hshshs");
  console.log(item.item);
  return {
    type: "INCREMENT",
    payload: item,
  };
};

const decrement = (data) => {
  return {
    type: "DECREMENT",
    payload: data,
  };
};

export { addItemToOrder, increment, decrement };
