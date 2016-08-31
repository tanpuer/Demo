/**
 * Created by cw on 16/8/30.
 */

/**
 * 更多  页面展示
 *
 */

import React,{Component} from 'react';
import {View, Text, ListView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import YinguoToolBar from '../component/YinguoToolBar';

const DATA = [
    {name:'主页', image:require('../../png/yinguo/search.png'), isMain:false, isLast:false, onpress:{}},
    {name:'邀请朋友,获取奖金', image:require('../../png/yinguo/search.png'), isMain:false,isLast:true, onpress:{}},
    {name:'公共主页', image:require('../../png/yinguo/search.png'), isMain:true, isLast:false,onpress:{}},
    {name:'创建主页', image:require('../../png/yinguo/search.png'), isMain:false, isLast:false,onpress:{}},
    {name:'管理主页', image:require('../../png/yinguo/search.png'), isMain:false, isLast:true,onpress:{}},
    {name:'社群', image:require('../../png/yinguo/search.png'), isMain:true, isLast:false,onpress:{}},
    {name:'创建社群', image:require('../../png/yinguo/search.png'), isMain:false, isLast:false,onpress:{}},
    {name:'管理社群', image:require('../../png/yinguo/search.png'), isMain:false, isLast:true,onpress:{}},
    {name:'常用功能', image:require('../../png/yinguo/search.png'), isMain:true, isLast:false,onpress:{}},
    {name:'活动', image:require('../../png/yinguo/search.png'), isMain:false, isLast:false,onpress:{}},
    {name:'发现好友', image:require('../../png/yinguo/search.png'), isMain:false, isLast:false,onpress:{}},
    {name:'收藏夹', image:require('../../png/yinguo/search.png'), isMain:false, isLast:false,onpress:{}},
    {name:'添加一些常用功能', image:null, isMain:false, isLast:true,onpress:{}},
    {name:'', image:require('../../png/yinguo/search.png'), isMain:true, isLast:false,onpress:{}},
    {name:'设置', image:require('../../png/yinguo/search.png'), isMain:false, isLast:false,onpress:{}},
    {name:'快捷设置', image:require('../../png/yinguo/search.png'), isMain:false, isLast:true,onpress:{}},

];

export default class More extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged: (row1, row2)=> row1 != row2,
            }),
        };
        this.fetchData = this.fetchData.bind(this);
      }

      fetchData(rowData){
          var isLast = rowData.isLast;
          if (rowData.isMain){
              return(
                  <View style={styles.ismain}>
                      <Text style={{fontSize:15,color:'black',left:20, top:40}}>
                          {rowData.name}
                      </Text>
                  </View>
              );
          }else {
              return(
                  <TouchableOpacity style={{height:50,backgroundColor:'white',}}>
                      <View style={{flex:1,flexDirection:'row',alignItems:'center'}}>
                          <Image
                              style={styles.image}
                              source={rowData.image}
                          />
                          <View style={[styles.text,{borderBottomWidth: isLast? 0: StyleSheet.hairlineWidth}]}>
                              <Text style={{fontSize:15,}}>
                                  {rowData.name}
                              </Text>
                          </View>
                          <Image
                            style={{width:20,height:20,right:20,}}
                            source={require('../../png/yinguo/arrow.png')}
                          />
                      </View>
                  </TouchableOpacity>
              );
          }
      }

      render(){
          return(
              <View style={{flex:1}}>
                  <YinguoToolBar type={0}/>
                  <ListView
                    dataSource={this.state.dataSource.cloneWithRows(DATA)}
                    renderRow={this.fetchData}
                  />
              </View>
          );
      }
}

const styles = StyleSheet.create({
   image:{
       width:40,
       height:40,
       marginLeft:20,
   },
    text:{
        flex:1,
        height:50,
        justifyContent:'center',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'gray',
        marginLeft:20,
    },
    ismain:{
        height:60,
        backgroundColor:'whitesmoke',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'gray',
        borderTopWidth:StyleSheet.hairlineWidth,
    }
});
