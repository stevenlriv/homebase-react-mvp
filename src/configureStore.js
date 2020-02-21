import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from "redux-thunk";

import rootReducer from './Store/Reducers/rootReducer';

import { verifyAuth } from './Store/action/authActions';

export default function configureStore(persistedState) {
  const store = createStore(
    rootReducer,
    persistedState,
    applyMiddleware(thunkMiddleware)
  );
  store.dispatch(verifyAuth());
  return store;
}
