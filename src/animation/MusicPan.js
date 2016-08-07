/**
 * Created by cw on 16/8/2.
 */
import React,{Component} from 'react';
import {Image,
    View,
    StyleSheet,
    Animated,
    Easing,
    Text,
    TouchableWithoutFeedback,
    TouchableOpacity} from 'react-native';


export default class MusicPan extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {spin:new Animated.Value(0),isSpin:false};
        this.onAnimation = this.onAnimation.bind(this);
      }


    onAnimation(){
        this.state.spin.setValue(0);
        var animation = Animated.timing(this.state.spin,{
            toValue:1,
            duration:10000,
            easing:Easing.linear
        });
        animation.start(()=>{this.onAnimation()});
    }


      render(){
          var spin = this.state.spin.interpolate({
              inputRange:[0,1],
              outputRange:['0deg','360deg'],
          });
          return(
            <View style={{alignItems:'center',justifyContent:'center'}}>
                <Animated.Image
                    source={require('../png/flag.png')}
                    style={{
                        width: 150, height: 50,transform:[{}]

                    }}
                >
                </Animated.Image>

                <TouchableOpacity
                    style={{width:200,height:200,borderRadius:100}}
                    >
                        <Animated.View
                            style={{width:200,height:200,borderColor:'dimgray',borderRadius:100,borderWidth:50,
                                backgroundColor:'black',justifyContent:'center',alignItems:'center',
                                transform:[{rotateZ:spin}]}}
                            onPress={this.onAnimation()}
                    >
                        <Text style={{fontSize:12,color:'white'}}>
                            飘洋过海来看你
                        </Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
          );
      }
}