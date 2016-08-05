/**
 * Created by cw on 16/8/4.
 */
import React,{Component} from 'react';
import {Animated,} from 'react-native';
import Svg,{Ellipse,} from 'react-native-svg';


export default class Oval extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {radius:new Animated.Value(50),halfradius:new Animated.Value(20)};
      }

      render(){

          return(
              <Svg
                  height="100"
                  width="110"
              >
                  <Ellipse
                      cx="50"
                      cy="50"
                      rx="25"
                      ry="10"
                      stroke="gray"
                      strokeWidth="2"
                      fill="gray"

                  />
              </Svg>
          );
      }
}