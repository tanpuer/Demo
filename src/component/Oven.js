/**
 * Created by cw on 16/8/2.
 */
import React,{Component} from 'react';
import {View} from 'react-native';

export default class Oven extends Component{
    render(){
        const {radius,backgroundcolor} = this.props;
        return(
          <View style={{
                      width: radius*2,
                      height: radius*2,
                      borderRadius: radius,
                      backgroundColor: backgroundcolor,
                      transform: [
                          {scaleX: 2}
                    ]}}>
          </View>
        );
    }
}

