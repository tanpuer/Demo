/**
 * Created by cw on 16/8/1.
 */
import React, {Component} from 'react';
import {View, StyleSheet, Animated,} from 'react-native';

const array = ['rgb(0, 0, 153)','rgb(0, 0, 255)','rgb(51, 51, 255)','rgb(102, 102, 255)','rgb(153, 153, 255)','rgb(204, 204, 255)'];
const radius = 200;
export default class Circle extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {fade: new Animated.Value(0),fade1: new Animated.Value(0),
            fade2: new Animated.Value(0),fade3: new Animated.Value(0),fade4: new Animated.Value(0),
        };
        this.onAnimation = this.onAnimation.bind(this);
      }

    componentDidMount() {
         this.interval = setInterval(this.onAnimation,2500);
    }

    componentWillUnMount() {
        this.interval && clearInterval(this.interval);
    }

    onAnimation(){
        //动画执行一次后fade变为101,下次就不执行,提前变为0,
        this.setState({fade: new Animated.Value(0),fade1: new Animated.Value(0),
            fade2: new Animated.Value(0),fade3: new Animated.Value(0),fade4: new Animated.Value(0),});
        Animated.sequence([
            Animated.timing(this.state.fade,{
                toValue:101,
                duration:500,
            }),
            Animated.timing(this.state.fade1,{
                toValue:101,
                duration:500,
            }),
            Animated.timing(this.state.fade2,{
                toValue:101,
                duration:500,
            }),

            Animated.timing(this.state.fade3,{
                toValue:101,
                duration:500,
            }),
            Animated.timing(this.state.fade4,{
                toValue:101,
                duration:500,
            }),

        ]).start();
    }

        //opacity用得不对!

      render(){
          return(
            <View style={{width:radius,height:radius,justifyContent:'center',alignItems:'center',}}>
                <Animated.View
                    style={[styles.circle,{width:radius,height:radius,borderRadius:radius/2,
                        borderColor:this.state.fade4.interpolate({
                            inputRange: [0,100,101],
                            outputRange:[array[4], array[5],array[4]],
                        })}]}
                >
                    <Animated.View
                        style={[styles.circle,{width:radius*0.8,height:radius*0.8,borderRadius:radius*0.8/2,
                            borderColor:this.state.fade3.interpolate({
                                inputRange: [0,100,101],
                                outputRange:[array[3], array[4],array[3]],
                            })}]}
                    >
                        <Animated.View
                            style={[styles.circle,{width:radius*0.6,height:radius*0.6,borderRadius:radius*0.6/2,
                                borderColor:this.state.fade2.interpolate({
                                    inputRange: [0,100,101],
                                    outputRange:[array[2], array[3],array[2]],
                                })}]}
                        >
                            <Animated.View
                                style={[styles.circle,{width:radius*0.4,height:radius*0.4,borderRadius:radius*0.4/2,
                                    borderColor:this.state.fade1.interpolate({
                                        inputRange: [0,100,101],
                                        outputRange:[array[1], array[2],array[1]],
                                    })}]}
                            >
                                <Animated.View
                                    style={[styles.circle,{width:radius*0.2,height:radius*0.2,borderRadius:radius*0.2/2,
                                    borderColor:this.state.fade.interpolate({
                                        inputRange: [0,100,101],
                                        outputRange:[array[0], array[1],array[0]],
                                    })}]}
                                >
                                </Animated.View>

                            </Animated.View>

                        </Animated.View>

                    </Animated.View>
                </Animated.View>


            </View>
          );
      }
}

const styles = StyleSheet.create({
    circle:{
        justifyContent:'center',
        alignItems:'center',
        borderColor:'red',
        borderWidth:radius/10,
    },
});