const initialState = {
  order: [],
};
const orderreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    default:
      return state;
  }
};

export default orderreducer;
