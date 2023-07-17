import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';


const initialState = [
    { name: 'TV', category: 'electronics', price: 699.00, inStock: 5 },
    { name: 'Radio', category: 'electronics', price: 99.00, inStock: 15 },
    { name: 'Laptop', category: 'electronics', price: 399.00, inStock: 5 },
    { name: 'Cereal', category: 'food', price: 3.99, inStock: 10 },
    { name: 'Bread', category: 'food', price: 2.50, inStock: 90 },
    { name: 'Shirt', category: 'clothing', price: 12.99, inStock: 15 },
    { name: 'Socks', category: 'clothing', price: 2.99, inStock: 15 },
  ]

  const productSlice = createSlice({
    name: 'products',
    initialState: [],
    reducers: {
      setProducts: (state, action) => action.payload,
      removeProduct: (state, action) => state.map(product => product.name === action.payload.name ? {...product, inStock: product.inStock + 1} : product),
    }
  });
  
  export const getProducts = (activeCategory) => async (dispatch) => {
    console.log('this is the active category', activeCategory)
    let response = await axios.get(`https://api-js401.herokuapp.com/api/v1/products?category=${activeCategory}`);
    dispatch(setProducts(response.data.results));
  }

  export const backToStock = (product) => async (dispatch) => {
    product = {...product, inStock: product.inStock};
    await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
  
    dispatch(getProducts(product.category));
  };

  export const removeFromStock = (product) => async (dispatch) => {
    product = {...product, inStock: product.inStock - 1};
    await axios.put(`https://api-js401.herokuapp.com/api/v1/products/${product._id}`, product);
  
    dispatch(getProducts(product.category));
  };
  
  export const { addProduct, removeProduct, setProducts } = productSlice.actions
  export default productSlice.reducer;
