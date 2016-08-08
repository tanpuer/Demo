/**
 * Created by cw on 16/8/2.
 */
import React,{Component} from 'react';
import {Image, View, StyleSheet, Animated, Easing} from 'react-native';
import ToolBar from '../component/HomeToolBar';



export default class WaitingForLunch extends
    Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          //切记  动画值都要用 Animated.Value....
        this.state = {anim:new Animated.Value(0),radius:new Animated.Value(32),source:true};
        this.onAnimation = this.onAnimation.bind(this);
          this.onPress = this.onPress.bind(this);
      }

    componentDidMount() {
        this.interval = setInterval(this.onAnimation,2000);
    }

    componentWillUnMount() {
        this.interval && clearInterval(this.interval);
    }

    onPress(){
        this.interval && clearInterval(this.interval);
        const {navigator} = this.props;
        navigator.pop();
    }

    onAnimation() {
        this.setState({anim:new Animated.Value(0),radius:new Animated.Value(32),source:!this.state.source});
        Animated.parallel([
            Animated.sequence([
                Animated.timing(this.state.anim,{
                    toValue:50,
                    duration:1000,
                    easing:Easing.easeInEaseOut,
                }),
                Animated.timing(this.state.anim,{
                    toValue:0,
                    duration:1000,
                    easing:Easing.easeInEaseOut,
                    //easing:Easing.bezier(0.44,0.65,0.33,0.55)
                }),
            ]),
            Animated.sequence([
                Animated.timing(this.state.radius,{
                    toValue:16,
                    duration:1000,
                }),
                Animated.timing(this.state.radius,{
                    toValue:32,
                    duration:1000,
                }),
            ]),
        ]).start();
    }

      render(){
          return(
              <View style={{flex:1,}}>
                  <ToolBar source={require('../png/icon_left.png')} title="等餐" onPress={this.onPress}/>
                  <View style={styles.container}>
                      <Animated.View
                          style={[styles.apple,{bottom:this.state.anim}]}
                      >
                          <Image
                              style={{width:50,height:50}}
                              source={this.state.source? require('../png/lizi.png'):require('../png/pingguo.png')}
                          />
                      </Animated.View>
                      <View style={{width:50,alignItems:'center'}}>
                          <Animated.View
                              style={{
                                  width: this.state.radius,
                                  height: this.state.radius,
                                  borderRadius: 16,
                                  backgroundColor: 'lightgray',
                                  transform: [
                                      {scaleX: 2}
                                  ]}}>
                          </Animated.View>
                      </View>
                  </View>
              </View>

          );
      }
}

const styles = StyleSheet.create({
   apple:{
       width:50,
       height:50,
       bottom:0,
       alignItems:'center',
       justifyContent:'center',
   },
    shadow:{

    },
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
});
