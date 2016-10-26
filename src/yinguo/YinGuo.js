/**
 * Created by cw on 16/9/6.
 */
//因果项目的redux重构

import React,{Component} from 'react';
import {} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore';
import App from '../component/Iosui';

const store = configureStore();

export default class YinGuo extends Component{
    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}

