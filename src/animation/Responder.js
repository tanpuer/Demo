/**
 * Created by cw on 16/8/9.
 */
import React,{Component} from 'react';
import { View, StyleSheet, PanResponder, Image, Animated, Easing, InteractionManager} from 'react-native';

export default class Responder extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            left: 0,
            spin:new Animated.Value(0),
        };
        this.onAnimation = this.onAnimation.bind(this);
          this.onRecover = this.onRecover.bind(this);
      }

    componentWillMount() {
        this._panResponder = PanResponder.create({
            //要求成为响应者,
            onStartShouldSetPanResponder:(evt,gestureState) => true,
            onStartShouldSetPanResponderCapture:(evt,gestureState)=> true,
            onMoveShouldSetPanResponder:(evt,gestureState) => true,
            onMoveShouldSetPanResponderCapture:(evt,gestureState) => true,

            onPanResponderGrant:(evt,gestureState)=>{
                //手势操作开始
                this._left = this.state.left;
            },

            onPanResponderMove:(evt,gestureState) =>{
                //最近一次的移动距离为gestureState.move(X,Y)
                //从成为响应者开始,累计手势移动距离为gestureState.d{X,Y}
                this.onAnimation();
                this.setState({
                    left:this._left + gestureState.dx,
                });
            },

            //同时只能有一个responder,强势返回true
            onPanResponderTerminationRequest:(evt,gestureState) => true,

            onPanResponderRelease:(evt,gestureState) =>{
                //用户松开了触摸点,此时视图成为了响应者,一般来说一个手势操作已经成功完成
                InteractionManager.runAfterInteractions(
                    //可以让一些耗时的任务在交互操作或者动画完成之后进行,这样可以保证js动画平顺进行
                    ()=>this.onRecover()
                );

                this.setState({
                    left:0,
                });
            },
            onPanResponderTerminate:(evt,gestureState) =>{
                //另一个组件成了新的响应者,所以当前手势将被取消,
            },

        });
    }

    onAnimation(){
        Animated.timing(this.state.spin,{
            toValue:1,
            duration:1000,
            easing: Easing.easeInEaseOut,
            ref:"start",
        }).start();
    }

    onRecover(){
        Animated.timing(this.state.spin,{
            toValue:0,
            duration:1000,
            easing: Easing.easeInEaseOut,
        }).start();
    }

    render(){
        var spin = this.state.spin.interpolate({
           inputRange:[0,1],
            outputRange:['45deg','0deg'],
        });
        return(
              <View style={styles.container}>

                  <Image
                      style={[styles.rect,{height:300,
                          marginLeft: this.state.left,}]}
                      source={require('../png/pan.png')}
                      {...this._panResponder.panHandlers}
                  >
                      <Animated.Image
                          source={require('../png/flag.png')}
                          style={{
                              width: 150, height: 50,position:'absolute',transform:[{rotate:spin}],
                          }}
                      />
                  </Image>


                  <Animated.Image
                      source={require('../png/flag.png')}
                      style={{
                          width: 150, height: 50,transform:[{rotate:spin}],
                      }}
                  />
                  <Image
                      style={[styles.rect,{
                          marginLeft: this.state.left,opacity:0.5,}]}
                      source={require('../png/pan.png')}
                      {...this._panResponder.panHandlers}
                  >
                  </Image>
              </View>
        );
    }
}

const styles = StyleSheet.create({
   rect:{
       width:200,
       height:200,
   },
    container:{
       flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'wheat',
    },
});