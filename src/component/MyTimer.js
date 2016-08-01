/**
 * Created by cw on 16/7/17.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default class MyTimer extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {hour: 1, minute: 59, second: 59};
    }

    componentDidMount() {
        this.interval = setInterval(()=>{
            if(this.state.second === 0){
                this.setState({second:59,minute:this.state.minute-1});
                if(this.state.minute === -1){
                    this.setState({minute:59,hour:this.state.hour-1})
                }
            }else {
                this.setState({second:this.state.second-1});
            }
        }, 1000);
    }


    componentWillUnMount() {
        this.interval && this.clearInterval(this.interval);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.time}> {this.state.hour>=0? this.state.hour:0} </Text>
                <Text > : </Text>
                <Text style={styles.time}> {this.state.hour>=0? this.state.minute:0} </Text>
                <Text > : </Text>
                <Text style={styles.time}> {this.state.hour>=0? this.state.second:0} </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    time:{
        flex:8,
        backgroundColor:'black',
        color:'white',
        textAlign:'center',
        fontWeight:'bold',
    },
    container:{
        width:120,
        height:20,
        flexDirection:'row',
        alignItems:'center',
    },
});

