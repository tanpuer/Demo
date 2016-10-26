/**
 * Created by cw on 16/9/6.
 */
import * as types from '../constants/ActionTypes';

const initialState = {
    isAndroid:true,
    isIOS:false,
    isReact:false,
};

export function avatar(state=initialState,action) {
    switch (action.type){
        case types.CHANGE_TO_ANDROID:
            return Object.assign({}, state, {
                isAndroid:true,
                isIOS:false,
                isReact:false,
            });
        case types.CHANGE_TO_IOS:
            return Object.assign({}, state, {
                isAndroid:false,
                isIOS:true,
                isReact:false,
            });
        case types.CHANGE_TO_REACT:
            return Object.assign({}, state, {
                isAndroid:false,
                isIOS:false,
                isReact:true,
            });
        default:
            return state;
    }
}