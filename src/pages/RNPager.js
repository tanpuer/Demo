/**
 * Created by cw on 16/7/28.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,

} from 'react-native';
import MyTimer from '../component/MyTimer';
import MyCircle from '../animation/XiuyiXiu';

export default class RNPager extends Component{
    render(){
        return(
            <View style={styles.container}>
                <ScrollView style={{flex:1, margin:10,}} showsVerticalScrollIndicator={true}>
                    <MyTimer/>
                    <MyCircle/>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       height:800,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'wheat',
   },
});