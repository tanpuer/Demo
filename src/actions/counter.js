/**
 * Created by cw on 16/8/6.
 */
export const INCREMENT_COUNTER ='INCREMENT_COUNTER';
export const DECREMENT_COUNTER = 'DECREMENT_COUNTER';


export function increment() {
    return{
        type:INCREMENT_COUNTER
    };
};

export function decrement() {
    return{
        type:DECREMENT_COUNTER
    };
};

export function incrementIfOdd() {
    return (dispatch,getState) =>{
        var {counter} =getState();
        if(counter %2 ===0){
            return;
        }else{
            dispatch(increment());
        }
    };
};

export function incrementAsync(delay) {
    delay = delay||2000;
    return dispatch => {
        this.setTimeout(()=>{
            dispatch(increment());
        },delay);
    };
};

export function decrementAsync(delay) {
    delay = delay||2000;
    return dispatch => {
        this.setTimeout(()=>{
            dispatch(decrement());
        },delay);
    };
};

