/**
 * Created by cw on 16/7/28.
 */


import React ,{Component} from 'react';
import {TouchableOpacity, Image,StyleSheet} from 'react-native';


export default class ImageButton extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

      render(){
          return(
              <TouchableOpacity
                  style={this.props.containerstyle}
                  onPress={this.props.onPress}
              >
                  <Image
                      style={this.props.imgstyle}
                      source={this.props.source}
                  />
              </TouchableOpacity>
          );
      }
}


