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
import MealTicket from '../CustomizedCom/MealTicket';
import MusicPan from '../animation/MusicPan';
import WaitingForLunch from '../animation/WaitingForLunch';

export default class RNPager extends Component{
    render(){
        return(
                <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={true}>
                    <MyTimer />
                    <MyCircle/>
                    <MealTicket/>
                    <MusicPan/>
                    <WaitingForLunch />

                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
   container:{
       height:1000,
       alignItems:'center',
       backgroundColor:'wheat',
       flexDirection:'column',
   },
});