/**
 * Created by cw on 16/8/2.
 */
import React,{Component} from 'react';
import {Image, View, StyleSheet, Animated} from 'react-native';

export default class MusicPan extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {anim:0};
      }

      render(){
          return(

                  <Animated.Image
                      style={{width:200,height:200}}
                      source={require('../png/pan.png')}
                  >
                      <Animated.Image
                          source={require('../png/flag.png')}
                          style={{width:100,height:50,marginLeft:100,}}
                      ></Animated.Image>
                  </Animated.Image>

          );
      }
}