/**
 * Created by cw on 16/8/1.
 */
import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import HalfCircle from '../component/HalfCircle';

export default class MeatTicket extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.renderCircles = this.renderCircles.bind(this);
          this.renderUpperCircles = this.renderUpperCircles.bind(this);
      }


      renderCircles(i){
          return(
              <HalfCircle radius={200/31} isAbove={false} backgroundcolor={'white'} marginleft={200/31}/>
          );
      }

      renderUpperCircles(i){
          return(
              <HalfCircle radius={200/31} isAbove={true} backgroundcolor={'white'} marginleft={200/31}/>
          );
      }

    render(){
        var abovecircles = [];
        var uppercircles = [];
        for (var i=0;i<10;i++){
            abovecircles.push(this.renderCircles(i));
            uppercircles.push(this.renderUpperCircles(i));
        }

        return(
            <View style={styles.container}>
                <View style={{flexDirection:'row',marginTop:0}}>
                    {abovecircles}
                </View>
                <View
                    style={{width:60,height:60,marginTop:15,flexDirection:'row'}}
                >
                    <Image
                        style={{width:60,height:60,marginLeft:20}}
                        source={require('../png/hanbaobao.jpg')}
                    />
                    <View style={{flexDirection:'column', marginLeft:20,}}>
                        <Text style={{fontSize:20}}>饭票</Text>
                        <Text style={{fontSize:10}}>编号:111111</Text>
                        <Text style={{fontSize:10}}>截止日期:2017-1-1</Text>
                    </View>
                </View>
                <View style={{flexDirection:'row', marginTop:25-200/31*2}}>
                    {uppercircles}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:200,
        height:100,
        backgroundColor:'dodgerblue',
        margin:20,
        flexDirection:'column',

    },
});