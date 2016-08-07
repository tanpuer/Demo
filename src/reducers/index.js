/**
 * Created by cw on 16/8/6.
 */
import counter from './counter';
import {combineReducers} from 'redux'

const RootReducer = combineReducers({
   counter
});

export default RootReducer;