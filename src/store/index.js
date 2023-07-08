import {legacy_createStore as createStore, combineReducers} from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import categoriesReducer from './categories';

let reducers = combineReducers({
    //all the reducers
    categories: categoriesReducer,
});

const store = () => createStore(reducers, composeWithDevTools());

export default store() ;