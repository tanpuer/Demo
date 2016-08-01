/**
 * Created by cw on 16/7/31.
 */
import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class Suggestion extends Component{
    render(){
        return(
            <View>
                <Text>详细代码请访问</Text>
                <Text>https://github.com/tanpuer</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
      justifyContent:'center',
       alignItems:'center',
   } ,
});