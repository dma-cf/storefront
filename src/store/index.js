import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

const store = () => configureStore({
  reducer: {
    categories: categoryReducer,
    products: productsReducer,
    cart: cartReducer
  }
});

export default store();

