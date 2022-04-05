const initialState = {
  order: [],
};

const orderreducer = (state = initialState, action) => {
  // console.log(action.payload);
  // console.log(`state ${JSON.stringify(state.order)}`);
  // looking for items matching action.payload and gets result in array
  const objectExist = state.order.some((item) => item.id === action.payload.id);
  switch (action.type) {
    // case for adding ..
    case "INCREMENT":
      if (objectExist) {
        return {
          // make a copy ..
          ...state,
          // .. in order map list and check each item if it matches payload and if change amount on that
          order: state.order.map((obj) => {
            if (obj.id === action.payload.id) {
              return {
                ...obj,
                amount: obj.amount + 1,
              };
            }
            //... otherwise return obj
            return {
              ...obj,
            };
          }),
        };
      }
      return {
        // if not exist => makecopy, in order make a copy of order array and then pass in item
        ...state,
        order: [...state.order, action.payload],
      };

    case "DECREMENT":
      // SUB: check if amount is 1 then I dont want it to subtract 1

      if (objectExist) {
        return {
          // ...make copy of state and map through each object in list
          ...state,
          order: state.order.map((obj) => {
            // see if id match passed item and amount is over 1
            if (obj.id === action.payload.id && obj.amount > 1) {
              // if so subtract amount with 1
              return {
                ...obj,
                amount: obj.amount - 1,
              };
              // else if id amatches passed item but amount is less than 2
            } else if (obj.id === action.payload.id && obj.amount < 2)
              // return amoutn with 0
              return {
                ...obj,
                amount: 0,
              };
            // and otherwise return obj
            return obj;
          }),
        };
      }
      // if object dont exist
      return state;
    default:
      return state;
  }
};

export default orderreducer;
