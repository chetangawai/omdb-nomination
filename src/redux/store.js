import { createStore, applyMiddleware } from "redux";
import allReducers from "./reducers";
import thunk from 'redux-thunk';

const store = createStore(
  allReducers,
  applyMiddleware(thunk)
);
store.getState();
console.log('store.getState()', store.getState())
export default store;