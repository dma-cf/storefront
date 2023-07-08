const initialState = [
  {name:'TV', category:'electronics', price:699.00, inStock:5},
  {name:'Cereal', category:'food', price:3.99, inStock:10},
  {name:'Shirt', category:'clothing', price:12.99, inStock:15},  
]

function productsReducer(state=initialState, action){
  switch(action.type){
    case 'ADD_TO_CART':
      return {
        ...state,
        activeCategory: action.payload
      }
    default:
      return state;
  }
}

export default productsReducer;