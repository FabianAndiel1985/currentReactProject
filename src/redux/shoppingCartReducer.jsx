
const INITIAL_STATE = {
  productInCart: "shalalal"
};


const shoppingCartReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "lalalal":
        console.log("works");
        return state;
    //   return {
    //     ...state,
    //     currentUser: action.payload
    //   };
    default:
        console.log("worksce");
      return state;
  }
};


export default shoppingCartReducer;

