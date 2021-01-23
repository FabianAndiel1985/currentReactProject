const INITIAL_STATE = [];

const shoppingCartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "addProductToCart":
      state = [...state, action.product];
      return state;
    default:
      return state;
  }
};

export default shoppingCartReducer;
