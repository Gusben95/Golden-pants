const initialState = {
  order: [],
};

const orderreducer = (state = initialState, action) => {
  console.log(action.payload);

  console.log(`state ${JSON.stringify(state.order)}`);
  const objectExist = state.order.some((item) => item.id === action.payload.id);
  switch (action.type) {
    case "INCREMENT":
      if (objectExist) {
        return {
          ...state,
          order: state.order.map((obj) => {
            if (obj.id === action.payload.id) {
              return {
                ...obj,
                amount: obj.amount + 1,
              };
            }
            return {
              ...obj,
            };
          }),
        };
      }
      return {
        ...state,
        order: [...state.order, action.payload],
      };

    case "DECREMENT":
      //  här vill jag kolla om amount är 1, tar man bort itemet från listan
      // kanske kan flitrera bort itemet och returner nya array som listan
      const arr = [...state.order];
      const newarr = arr.filter((item) => item.id !== action.payload.id);
      console.log(newarr);
      if (objectExist) {
        return {
          ...state,
          order: state.order.map((obj) => {
            if (obj.id === action.payload.id && obj.amount > 1) {
              return {
                ...obj,
                amount: obj.amount - 1,
              };
            } else if (obj.id === action.payload.id && obj.amount < 2)
              return {
                ...obj,
                amount: 0,
              };
            return obj;
          }),
        };
      }
      return {
        ...state,
        order: [...state.order, action.payload],
      };
    default:
      return state;
  }
};

export default orderreducer;
