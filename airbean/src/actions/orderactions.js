const addItemToOrder = (item) => {
  console.log(item);
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export { addItemToOrder };
