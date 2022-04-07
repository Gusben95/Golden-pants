// import { addItemToOrder, increment, decrement } from "../actions/orderactions";
// import Menu from "../views/Menu";

const initialState = {
  order: [],
};

const orderreducer = (state = initialState, action) => {
  console.log(action.payload);
  console.log(state);
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    case "INCREMENT":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === action.payload.item.id) {
            console.log("matchar!");
            return {
              ...item,
              amount: item.amount + action.payload.value,
            };
          }
          console.log(" matchar ej");
          return item;
        }),
      };
    case "DECREMENT":
      return {
        ...state,
        order: state.order.map((item) => {
          if (item.id === action.payload.item.id) {
            return {
              ...item,
              amount: item.amount - action.payload.value,
            };
          }
          return item;
        }),
      };

    default:
      return state;
  }
};

export default orderreducer;
