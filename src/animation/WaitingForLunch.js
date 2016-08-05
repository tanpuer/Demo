/**
 * Created by cw on 16/8/2.
 */
import React,{Component} from 'react';
import {Image, View, StyleSheet, Animated, Easing} from 'react-native';
import Oven from '../component/Oven';
import TimerMixin from 'react-timer-mixin';



export default class WaitingForLunch extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          //切记  动画值都要用 Animated.Value....
        this.state = {anim:new Animated.Value(0),radius:new Animated.Value(16),source:true};
        this.onAnimation = this.onAnimation.bind(this);
      }

    componentDidMount() {
        this.interval = setInterval(this.onAnimation,2000);
    }

    componentWillUnMount() {
        this.interval && clearInterval(this.interval);
    }

    onAnimation() {
        this.setState({anim:new Animated.Value(0),radius:new Animated.Value(16),source:!this.state.source});
        Animated.parallel([
            Animated.sequence([
                Animated.timing(this.state.anim,{
                    toValue:100,
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
                    toValue:8,
                    duration:1000,
                }),
                Animated.timing(this.state.radius,{
                    toValue:16,
                    duration:1000,
                }),
            ]),
        ]).start();
    }

      render(){

          return(
              <View>
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
                          borderRadius: 8,
                          backgroundColor: 'gray',
                          transform: [
                              {scaleX: 3}
                          ]}}>
                      </Animated.View>
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
});
