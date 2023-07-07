import { legacy_createStore as createStore, combineReducers } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from './categories';

const reducers = combineReducers({
  store: reducer,
});

const store = () => createStore(reducers, composeWithDevTools());

export default store();
