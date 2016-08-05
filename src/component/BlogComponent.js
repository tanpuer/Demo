/**
 * Created by cw on 16/8/4.
 */
import React,{Component} from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default class BlogComponent extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          const {selected} = this.props;
        this.state = {isSelected:selected};
      }

      renderImg(){

            if(this.state.isSelected){
                return(
                    <Image
                        style={{width:15,height:15}}
                        source={require('../png/check.png')}
                    />
                );
            }else {
                return(
                    <Image
                        style={{width:15,height:15}}
                    />
                );
            }

      }
    render(){
        return(
            <TouchableOpacity
                style={{flex:1,height:100,}}
                onPress={()=>{this.setState({isSelected:!this.state.isSelected});
                }}
            >
                <View
                    style={{flex:1, alignItems:'center',justifyContent:'center'}}
                >
                    <Image
                        source={require('../png/all.png')}
                        style={{width:60,height:60}}
                    />
                    <Text style={{fontSize:10}}>
                        {this.props.title}
                    </Text>
                    {this.renderImg()}

                </View>
            </TouchableOpacity>
        );
    }
}