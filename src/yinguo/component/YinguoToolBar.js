/**
 * Created by cw on 16/8/31.
 */
import React,{Component} from 'react';
import {View, StyleSheet, Dimensions, TouchableOpacity, Image, Text} from 'react-native';

/**
 *toolbar
 * 1: 搜索框+二维码扫描
 * 2:
 * 3:
 */
const SCREEN_WIDTH = Dimensions.get('window').width;
export default class YinguoToolBar extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
        this.renderToolBar = this.renderToolBar.bind(this);
      }

      renderToolBar(){
          const {type} = this.props;
          switch(type){
              case 0:{
                  return(
                      <View style={styles.container}>
                          <TouchableOpacity
                              style={styles.search}
                          >
                              <View style={{flex:1,flexDirection:'row',padding:5,alignItems:'center'}}>
                                  <Image
                                    style={{width:20, height:20}}
                                    source={require('../../png/yinguo/search.png')}
                                  />
                                  <Text
                                    style={{fontSize:16,color:'white'}}
                                  >
                                      搜索
                                  </Text>
                              </View>
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.menu}>
                              <Image
                                style={{width:35,height:35}}
                                source={require('../../png/yinguo/saoyisao.png')}
                              />
                          </TouchableOpacity>
                      </View>
                  );
              }
              case 1:{

              }
              case 2:{

              }
              default:
                  break;
          }
      }

      render(){
          return(
              this.renderToolBar()
          )
      }
}

const styles = StyleSheet.create({
    container:{
        height:60,
        backgroundColor:'red',
        flexDirection:'row',
        justifyContent:'center',
    },
    search:{
        height:35,
        flex:5,
        marginLeft:10,
        top:20,
        backgroundColor:'rgba(0,0,0,0.3)',
        borderRadius:8,
    },
    menu:{
        height:35,
        flex:1,
        top:20,
        marginLeft:10,
    },
});