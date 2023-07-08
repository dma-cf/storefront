import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import thunk from 'redux-thunk';

import categoryReducer from './categories';
import productsReducer from './products';
import cartReducer from './cart';

const reducers = combineReducers({
  categories: categoryReducer,
  products: productsReducer,
  cart: cartReducer
});

const store = () => createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store();
