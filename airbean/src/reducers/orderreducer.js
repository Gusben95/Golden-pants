// import { addItemToOrder, increment, decrement } from "../actions/orderactions";
// import Menu from "../views/Menu";

const initialState = {
  order: [],
};

const orderreducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      console.log(state);
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    case "INCREMENT":
      // const arr = state.order.filter(
      //   (item) => item.id === action.payload.item.id
      // );
      const arr = state.order;
      let newarr = arr.filter((obj) => obj.id === action.payload.item.id);
      console.log(`new arr ${JSON.stringify(newarr)}`);
      console.log(action.payload);
      let a = newarr[0].amount + action.payload.value;
      console.log(a);
      return {
        ...state.order,
        order: [...state.order],
      };
    case "DECREMENT":
      return {
        ...state.order,
        amount: state.amount - action.payload,
      };

    default:
      return state;
  }
};

export default orderreducer;
