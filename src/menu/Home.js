/**
 * Created by cw on 16/7/31.
 */
import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Home extends Component{
    render(){
        return(
          <View style={styles.container}>
              <Text style={styles.text}>欢迎访问</Text>
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