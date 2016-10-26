/**
 * Created by cw on 16/9/6.
 */
import * as types from '../constants/ActionTypes';

export function changeToAndroid() {
    return{
        type: types.CHANGE_TO_ANDROID,
    };
}

export function changeToIOS() {
    return{
        type: types.CHANGE_TO_IOS,
    };
}

export function changeToReact() {
    return{
        type: types.CHANGE_TO_REACT,
    };
}
