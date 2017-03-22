/**
 * Created by cw on 2017/3/22.
 */
import React, {Component} from 'react';
import {Animated, View, Image, Keyboard, TextInput, StyleSheet, KeyboardAvoidingView} from 'react-native';

export default class LoginComponent extends Component{
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {

        };

        this.keyboardHeight = new Animated.Value(0);
        this.imageHeight = new Animated.Value(200);
    }

    componentWillMount() {
        this.keyboardWillShowSub = Keyboard.addListener('keyboardWillShow', this.keyboardWillShow);
        this.keyboardWillHideSub = Keyboard.addListener('keyboardWillHide', this.keyboardWillHide)
    }

    componentWillUnMount() {
        this.keyboardWillShowSub.remove();
        this.keyboardWillHideSub.remove();
    }

    keyboardWillShow = (event) => {
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: event.duration,
                toValue: event.endCoordinates.height,
            }),
            Animated.timing(this.imageHeight, {
                duration: event.duration,
                toValue: 50,
            }),
        ]).start();
    };

    keyboardWillHide = (event) => {
        Animated.parallel([
            Animated.timing(this.keyboardHeight, {
                duration: event.duration,
                toValue: 0,
            }),
            Animated.timing(this.imageHeight, {
                duration: event.duration,
                toValue: 200,
            }),
        ]).start();
    };

    render(){
        return(
            <Animated.View style={[styles.container, {paddingBottom:this.keyboardHeight}]}>
                <Animated.Image
                    source={require('../png/react.png')}
                    style={{width:this.imageHeight, height:this.imageHeight}}
                />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Username"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Confirm Password"
                    style={styles.input}
                />
            </Animated.View>
        );
    }

}

const styles = StyleSheet.create({
    input:{
        height:50,
        backgroundColor:'white',
        margin:10,
    },
    container:{
        alignItems:'center',
        backgroundColor:'green',
        flex:1,
        marginTop:20,
    }
});