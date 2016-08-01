/**
 * Temple 2016-7-16
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

export default class Button extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {disable: false};
    }

    compressHander = ()=>{
        const {pressevent} = this.props;
        pressevent();
    };

    render() {
        //解构
        const { text } = this.props;
        return (
            <TouchableOpacity
                disabled={this.state.disable}
                style={[styles.button, this.state.disable && styles.disable]}
                onPress={this.compressHander}
            >
                <Text style={styles.buttontext}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>

        );
    }
}

const styles = StyleSheet.create({
    button:{
        height:40,
        width:150,
        borderRadius:10,
        backgroundColor:'green',
        justifyContent:'center',
    },
    buttontext: {
        textAlign:'center',
        color:'white',
    },
    disable:{
        backgroundColor:'gray',
    },
});

