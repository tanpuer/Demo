/**
 * Created by cw on 16/8/30.
 */

/**
 * 更多  页面展示
 *
 */

import React,{Component} from 'react';
import {View, Text, Dimensions, ListView, Image, TouchableOpacity, StyleSheet, LayoutAnimation, StatusBar,RefreshControl} from 'react-native';
import YinguoToolBar from '../component/YinguoToolBar';

var DATA = {};
var startY = 0;
var endY = 0;
// const DATA = [
//     {name:'主页', image:require('../../png/yinguo/search.png'), isMain:false, isLast:false, onpress:{}},
//     {name:'邀请朋友,获取奖金', image:require('../../png/yinguo/friend.png'), isMain:false,isLast:true, onpress:{}},
//
//     {name:'公共主页', isMain:true, isLast:false,onpress:{}},
//     {name:'创建主页', image:require('../../png/yinguo/establishmain.png'), isMain:false, isLast:false,onpress:{}},
//     {name:'管理主页', image:require('../../png/yinguo/managemain.png'), isMain:false, isLast:true,onpress:{}},
//
//     {name:'社群', isMain:true, isLast:false,onpress:{}},
//     {name:'创建社群', image:require('../../png/yinguo/establishcommunity.png'), isMain:false, isLast:false,onpress:{}},
//     {name:'管理社群', image:require('../../png/yinguo/managecommunity.png'), isMain:false, isLast:true,onpress:{}},
//
//     {name:'常用功能', isMain:true, isLast:false,onpress:{}},
//     {name:'活动', image:require('../../png/yinguo/activity.png'), isMain:false, isLast:false,onpress:{}},
//     {name:'发现好友', image:require('../../png/yinguo/findfriends.png'), isMain:false, isLast:false,onpress:{}},
//     {name:'收藏夹', image:require('../../png/yinguo/collections.png'), isMain:false, isLast:false,onpress:{}},
//     {name:'添加一些常用功能', image:null, isMain:false, isLast:true,onpress:{}},
//
//     {name:'', isMain:true, isLast:false,onpress:{}},
//     {name:'设置', image:require('../../png/yinguo/setting.png'), isMain:false, isLast:false,onpress:{}},
//     {name:'快捷设置', image:require('../../png/yinguo/fastsetting.png'), isMain:false, isLast:false,onpress:{}},
//
// ];
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class More extends Component{

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state={
            dataSource:new ListView.DataSource({
                rowHasChanged: (row1, row2)=> row1 != row2,
                sectionHeaderHasChanged:(sec1, sec2)=> sec1 != sec2,
            }),
            shouldShowToolBar:true,
            refreshing: false,
        };
          this.renderRow = this.renderRow.bind(this);
          this.renderSection = this.renderSection.bind(this);
          this.handleTouchStart = this.handleTouchStart.bind(this);
          this.handleTouchEnd = this.handleTouchEnd.bind(this);
          this.showToolBarOrNot = this.showToolBarOrNot.bind(this);
          this.onRefresh = this.onRefresh.bind(this);
      }

    componentWillMount() {
        DATA = this.makeData();
        console.log(DATA);
    }

    componentDidMount() {
    }



    //产生数据
    makeData(){
        let dataObj = {};

        let section0 ="不显示这个section";
        dataObj[section0] = [];
        let data11 = {
            name:'个人主页', image:require('../../png/yinguo/android.png'), isMain:false, isLast:false, onpress:{}
        };
        dataObj[section0][0] = data11;
        let data12 = {
            name:'邀请朋友,获取奖金', image:require('../../png/yinguo/friend.png'), isMain:false,isLast:true, onpress:{}
        };
        dataObj[section0][1] =data12;

        let section1 = '公共主页';
        dataObj[section1] = [];
        let data1 = {
            name:'创建社群', image:require('../../png/yinguo/establishcommunity.png'), isMain:false, isLast:false,onpress:{}
        };
        dataObj[section1][0]=data1;
        let data2 = {
            name:'管理主页', image:require('../../png/yinguo/managemain.png'), isMain:false, isLast:true,onpress:{}
        };
        dataObj[section1][1]=data2;

        let section2 = '社群';
        dataObj[section2] = [];
        let data3 = {
            name:'创建主页', image:require('../../png/yinguo/establishmain.png'), isMain:false, isLast:false, onpress:{}
        };
        dataObj[section2][0]=data3;
        let data4 = {
            name:'管理社群', image:require('../../png/yinguo/managecommunity.png'), isMain:false, isLast:true,onpress:{}
        };
        dataObj[section2][1]=data4

        let section3 = '常用功能';
        dataObj[section3] = [];
        let data5 = {
            name:'活动', image:require('../../png/yinguo/activity.png'), isMain:false, isLast:false,onpress:{}
        };
        dataObj[section3][0]=data5;
        let data6 = {
            name:'发现好友', image:require('../../png/yinguo/findfriends.png'), isMain:false, isLast:false,onpress:{}
        };
        dataObj[section3][1]=data6;
        let data7 = {
            name:'收藏夹', image:require('../../png/yinguo/collections.png'), isMain:false, isLast:false,onpress:{}
        };
        dataObj[section3][2]=data7;
        let data8 = {
            name:'添加一些常用功能', image:null, isMain:false, isLast:true,onpress:{}
        };
        dataObj[section3][3]=data8;

        let section4 = '';
        dataObj[section4] = [];
        let data9 = {
            name:'设置', image:require('../../png/yinguo/setting.png'), isMain:false, isLast:false,onpress:{}
        };
        dataObj[section4][0]=data9;
        let data10 = {
            name:'快捷设置', image:require('../../png/yinguo/fastsetting.png'), isMain:false, isLast:false,onpress:{}
        };
        dataObj[section4][1]=data10;

        return dataObj;
    }


        renderRow(rowData,sectionId,rowId,highlightRow){
          var isLast = rowData.isLast;
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

      renderSection(sectionData,sectionId){
        if(sectionId != "不显示这个section") {
              return(
                  <View style={styles.ismain}>
                      <Text style={{fontSize: 15, color: 'black', left: 20, top: 30}}>{sectionId}</Text>
                  </View>
              );
          }else {
              return(
                  <View></View>
              );
        }
      }

      handleTouchStart(event){
          //The Y position of the touch, relative to the root element
          startY = event.nativeEvent.pageY;
          console.log("handleTouchStart" + startY);
      }

      handleTouchEnd(event){
          endY = event.nativeEvent.pageY;
          //下滑
          if (startY > endY){
              if ((startY-endY)>44){
                  this.setState({shouldShowToolBar:false});
                  //不显示状态栏
                  StatusBar.setHidden(true);
              }
          }
          //上滑
          else {
              if ((endY-startY)>44){
                  this.setState({shouldShowToolBar:true});
                  //显示状态栏
                  StatusBar.setHidden(false);
              }
          }
          console.log("handleTouchEnd" + endY);
      }

      showToolBarOrNot(){
          if (this.state.shouldShowToolBar){
              console.log("13");
              return(
                  <YinguoToolBar type={0}/>
              );
          }
      }

      onRefresh(){
          this.setState({refreshing:true});
          setTimeout(()=>{
              this.setState({refreshing:false})
              }, 2000);
      }

      render(){
          LayoutAnimation.easeInEaseOut();
          return(
              <View
                  style={{flex:1}}
                  onTouchStart={this.handleTouchStart}
                  onTouchEnd={this.handleTouchEnd}
              >
                  {this.showToolBarOrNot()}
                  <ListView
                      ref="ListView"
                    dataSource={this.state.dataSource.cloneWithRowsAndSections(DATA)}
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSection}
                    initialListSize={10}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={this.onRefresh}
                        />
                    }



                  />
              </View>
          );
      }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

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
        height:50,
        backgroundColor:'lightgrey',
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'gray',
        borderTopWidth:StyleSheet.hairlineWidth,
    },
    container: {
        flex: 1,
        backgroundColor: 'black'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        width: 300,
        justifyContent: 'flex-end'
    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
        margin: 10
    },
    fixedSection: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    fixedSectionText: {
        color: '#999',
        fontSize: 20
    },
    parallaxHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 100
    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 24,
        paddingVertical: 5
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 5
    },
    row: {
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 20
    }
});
