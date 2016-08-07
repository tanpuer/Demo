/**
 * Created by cw on 16/7/31.
 */
import React,{Component} from 'react';
import {} from 'react-native';
import {Provider} from 'react-redux';
import App from '../container/app';
import configureStore from '../store/configureStore';
//临时变为redux练习

const store = configureStore();

export default class Favorite extends Component{
    render(){
        return(
            <Provider store={store}>
                <App/>
            </Provider>
        );
    }
}