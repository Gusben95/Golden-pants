const increment = (item) => {
  console.log("hshshs");
  console.log(item);
  return {
    type: "INCREMENT",
    payload: item,
  };
};

const decrement = (item) => {
  return {
    type: "DECREMENT",
    payload: item,
  };
};

export { increment, decrement };
