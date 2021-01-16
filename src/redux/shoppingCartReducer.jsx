
const INITIAL_STATE = [];


const shoppingCartReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "addProductToCart":
        console.log(action.product);
    //   return {
    //     ...state,
    //     currentUser: action.payload
    //   };
      state = [...state, action.product];
      return state;
    default:
        return state;
  }
};


export default shoppingCartReducer;

