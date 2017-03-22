/**
 * Created by cw on 2017/3/22.
 */
import React,{Component} from 'react';
import {View, Animated, Dimensions, PanResponder} from 'react-native';

const dragOffsetForTransparency = 0.8* Dimensions.get('window').width;

export default class Swipable extends Component{
     // 构造
       constructor(props) {
         super(props);
         // 初始状态
         this.state = {
             containerTranslateX: new Animated.Value(0),
         };

         this.panResponder = PanResponder.create({
             onStartShouldSetPanResponder: (event, gestureState)=> true,
             onPanResponderMove: Animated.event([null, {
                 dx: this.state.containerTranslateX
             }]),
             onPanResponderRelease: (event,gestureState)=>{
                 Animated.spring(this.state.containerTranslateX, {toValue:0}).start();
             }
         });
       }

       render(){
           return(
               <Animated.View {...this.panResponder.panHandlers}
                   style={{
                       opacity:this.state.containerTranslateX.interpolate({
                           inputRange:[-dragOffsetForTransparency, 0, dragOffsetForTransparency],
                           outputRange:[0,1,0],
                       }),
                       transform:[{translateX: this.state.containerTranslateX}]
                   }}
               >
                   {this.props.children}
               </Animated.View>
           );
       }
}