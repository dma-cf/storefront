const initialState = {
  products: [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Laptop', category: 'electronics', price: 399.00, inStock: 5 },
    { name: 'Cereal', category: 'food', price: 3.99, inStock: 10 },
    { name: 'Bread', category: 'food', price: 2.50, inStock: 90 },
    { name: 'Shirt', category: 'clothing', price: 12.99, inStock: 15 },
    { name: 'Socks', category: 'clothing', price: 2.99, inStock: 15 },
  ],
}


function productsReducer(state = initialState, action) {
  switch (action.type) {
    case 'FILTER_PRODUCTS':
      return {
        ...state,
        products: initialState.products.filter(product => product.category === action.payload.name)
      }

    case 'ADD_CART':
      return {
        ...state,
        inStock: state.products.filter(product => {
          if (product.name === action.payload.name) {
            product.inStock = product.inStock - 1;
          }
        })
      }

    case 'REMOVE_CART':
    console.log(initialState.products);  
    return {
        ...state,
        
        inStock: state.products.filter(product => {
          if (product.name === action.payload.name) {
            product.inStock = product.inStock + 1;
          }
        })
      }
    default:
      return state;
  }
}



export default productsReducer;