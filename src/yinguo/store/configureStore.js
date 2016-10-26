/**
 * Created by cw on 16/9/7.
 */
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import RootReducer from '../reducer/Root';

let createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
let store = createStoreWithMiddleware(RootReducer);

export default store;