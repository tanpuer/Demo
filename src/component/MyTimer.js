/**
 * Created by cw on 16/7/17.
 */

import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import ToolBar from '../component/HomeToolBar';

export default class MyTimer extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {hour: 0, minute: 0, second: 0};
        this.onPress = this.onPress.bind(this);
        this.simulatePost = this.simulatePost.bind(this);
    }

    componentDidMount() {
        this.interval = setInterval(()=>{
            if(this.state.second === 0){
                this.setState({second:59,minute:this.state.minute-1});
                if(this.state.minute === -1){
                    this.setState({minute:59,hour:this.state.hour-1})
                }
            }else{
                this.setState({second:this.state.second-1});
            }
        }, 1000);
    }

    componentWillUnMount() {
        this.interval && clearInterval(this.interval);
        this.interval = false;
    }

    onPress(){
        this.interval && clearInterval(this.interval);
        const {navigator} = this.props;
        navigator.pop();
    }

    simulatePost(){
       this.setState({hour: 1, minute: 59, second: 59})
    }

    render() {
        return (
            <View style={{flex:1}}>
                <ToolBar source={require('../png/icon_left.png')} title="计时器" onPress={this.onPress}/>
                <View style={styles.container}>
                    <View style={styles.timer}>
                        <Text style={styles.time}> {this.state.hour>=0? this.state.hour:0} </Text>
                        <Text > : </Text>
                        <Text style={styles.time}> {this.state.hour>=0? this.state.minute:0} </Text>
                        <Text > : </Text>
                        <Text style={styles.time}> {this.state.hour>=0? this.state.second:0} </Text>
                    </View>
                    <TouchableOpacity>
                        <Text
                            style={{marginTop:50,}}
                            onPress={this.simulatePost}
                        >
                            模拟网络请求,倒计时
                        </Text>
                    </TouchableOpacity>
                </View>
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
    timer:{
        width:120,
        height:20,
        flexDirection:'row',
        alignItems:'center',
    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});

