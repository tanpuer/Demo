/**
 * Created by cw on 16/8/1.
 */
import React, {Component} from 'react';
import {View,} from 'react-native';

export default class HalfCircle extends Component{
    render(){
        const {radius,isAbove, backgroundcolor,marginleft} = this.props;
        if (isAbove){
            return(
                <View style={{
                    width:radius*2,
                    height:radius,
                    backgroundColor:backgroundcolor,
                    borderTopLeftRadius: radius,
                    borderTopRightRadius: radius,
                    borderBottomLeftRadius: 0,
                    borderBottomRightRadius: 0,
                    marginLeft:marginleft,
                }}>
                </View>
            );
        }else {
            return(
                <View style={{
                    width:radius*2,
                    height:radius,
                    backgroundColor:backgroundcolor,
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0,
                    borderBottomLeftRadius: radius,
                    borderBottomRightRadius: radius,
                    marginLeft:marginleft,

                }}>
                </View>
            );
        }
    }
}

