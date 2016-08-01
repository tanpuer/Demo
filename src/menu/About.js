/**
 * Created by cw on 16/7/31.
 */
import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class About extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.text}>详细代码请访问</Text>
                <Text>https://github.com/tanpuer</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    } ,
    text:{
        fontSize:20,
        color:'darkgoldenrod',
    },
});