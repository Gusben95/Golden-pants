import { addItemToOrder, increment, decrement } from "../actions/orderactions";
import Menu from "../views/Menu";

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
      case "INCREMENT" : 
      return{
        
        ...state.menu,
        amount: amount++,
        
      }
      case "DECREMENT" : 
      return{
        ...state.menu,
        amount: amount--,
      }
      console.log(state);
    default:
      return state;
  }
};

export default orderreducer;
