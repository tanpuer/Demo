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
    TouchableOpacity,
    InteractionManager,} from 'react-native';
import ToolBar from '../component/HomeToolBar';

var iSMusicGo = true;
var cycleTime = 100000;
export default class MusicPan extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {spin:new Animated.Value(0),flagSpin:new Animated.Value(0),isMusic:false};
        this.onAnimation = this.onAnimation.bind(this);
          this.onPress = this.onPress.bind(this);
          this.onClick = this.onClick.bind(this);
          this.callback = this.callback.bind(this);
      }

    onAnimation(){
        console.log("cycleTime:" + cycleTime);
        var animation = Animated.timing(this.state.spin,{
            toValue:1,
            duration:cycleTime,
            easing:Easing.linear,
        });
        animation.start();
    }

    onPress(){
        const {navigator} = this.props;
        navigator.pop();
    }

    onClick() {
        this.setState({flagSpin:new Animated.Value(0)});
        //注意InteractionManager的用法
        InteractionManager.runAfterInteractions(()=> {
            Animated.timing(this.state.flagSpin, {
                toValue: 1,
                duration: 1000,
            }).start();
            iSMusicGo && this.onAnimation();
            !iSMusicGo && this.state.spin.stopAnimation((value)=>{
                console.log(value);
                this.callback(value);
            });
            iSMusicGo = !iSMusicGo;
        });
    }


    //每次暂停后修改spin和cycletime ,确保每次的转速一致。 转盘不能无限转,只能转设定的圈数
    callback(value){
        if(value<=0.99){
            cycleTime = 100000 * (1-value);
            this.setState({spin:new Animated.Value(value)});
        }else {
            cycleTime = 100000;
            this.setState({spin:new Animated.Value(0)});
        }
    }

      render(){
          var spin = this.state.spin.interpolate({
              inputRange:[0,1],
              outputRange:['0deg','3600deg'],
          });
          var flagSpin = iSMusicGo? this.state.flagSpin.interpolate({
              inputRange:[0,1],
              outputRange:['0deg','45deg'],
          }):
              this.state.flagSpin.interpolate({
                  inputRange:[0,1],
                  outputRange:['45deg','0deg'],
              });

          return(
            <View style={{flex:1,backgroundColor:'black'}}>
                <ToolBar source={require('../png/icon_left.png')} title="音乐" onPress={this.onPress}/>
                <View style={{alignItems:'center',justifyContent:'center',marginTop:100,}}>
                    <Animated.Image
                        source={require('../png/flag.png')}
                        style={{
                            width: 150, height: 50,transform:[{rotate:flagSpin}]
                        }}
                    >
                    </Animated.Image>

                    <TouchableOpacity
                        style={{width:200,height:200,borderRadius:100}}
                        onPress={this.onClick}
                    >
                        <Animated.View
                            style={{width:200,height:200,borderColor:'dimgray',borderRadius:100,borderWidth:50,
                                backgroundColor:'black',justifyContent:'center',alignItems:'center',opacity:0.5,
                                transform:[{rotateZ:spin}]}}
                        >
                            <Text style={{fontSize:12,color:'white'}}>
                                飘洋过海来看你
                            </Text>
                        </Animated.View>
                    </TouchableOpacity>
                </View>
            </View>
          );
      }
}