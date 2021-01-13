
const INITIAL_STATE = {
  productInCart: null
};


const userReducer = (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case "some Case":
      return {
        ...state,
        currentUser: action.payload
      };
    default:
      return state;
  }
};


export default userReducer;

