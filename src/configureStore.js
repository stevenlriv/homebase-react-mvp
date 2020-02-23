import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";

import rootReducer from './Store/Reducers/rootReducer';

import { verifyAuth } from './Store/action/authActions';
import { getAllListings } from './Store/action/getListingsActions';

export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunkMiddleware)
  );
  store.dispatch(verifyAuth());//check if user is logged in
  store.dispatch(getAllListings()); //get all current listings
  return store;
}
