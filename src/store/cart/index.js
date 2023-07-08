let initialState = {
  cart: []
};

// https://api-js401.herokuapp.com/api/v1/todo
function cartReducer(state=initialState, action){
  switch(action.type){
    case 'ADD_CART':
      return {
        cart: [...state.cart, action.payload],
      }
    case 'REMOVE_CART':
      return {
      ...state,
       cart: state.cart.filter(item => item.name !== action.payload.name),
      }
    default:
      return state;
  }
}

export default cartReducer;