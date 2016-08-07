/**
 * Created by cw on 16/8/6.
 */
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers';


export default function configureStore(initialState) {
    const store = createStore(
        reducer,
        initialState,
        //compose工具函数组合了我们的中间链
        compose(
            applyMiddleware(thunk),
        )
    );

    if (module.hot){
        //Enbale hot module replacement for reducers
        module.hot.accept(()=>{
            const nextRootReducer = require('../reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}

