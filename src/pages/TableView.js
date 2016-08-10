/**
 * Created by cw on 16/8/7.
 */
import React,{Component} from 'react';
import {ListView, StyleSheet, TouchableOpacity, View, Image, Text} from 'react-native';

import Timer from '../component/MyTimer';
import XiuyiXiu from '../animation/XiuyiXiu';
import MealTicket from '../CustomizedCom/MealTicket';
import Waiting from '../animation/WaitingForLunch';
import Music from '../animation/MusicPan';
import Gesture from '../animation/Responder';
import IOSUI from '../component/Iosui';

const masterWork = [[1,"倒计时",require('../png/screenshots/timer.png'),Timer,"计时器"],
                    [2,"咻一咻",require('../png/screenshots/xiuyixiu.png'),XiuyiXiu,"咻一咻"],
                    [3,"粮票",require('../png/screenshots/mealticket.png',"粮票"),MealTicket],
                    [4,"等餐",require('../png/screenshots/wait.png'),Waiting,"等餐"],
                    [5,"手势",require('../png/screenshots/gesture.png'),Gesture,"手势"],
                    [6,"音乐",require('../png/screenshots/music_pan.png'),Music,"音乐"],
                    [7,"导航",require('../png/screenshots/tabnavigtor.png'),IOSUI,"IOS"],

];

export default class TableView extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged:(row1,row2) => row1 !==row2,
            }),
        };
        this.renderRow = this.renderRow.bind(this);
      }

      renderRow(rowData){
          const {navigator} =this.props;
          return(
              <TouchableOpacity
                  onPress={()=>{
                      navigator.push({
                          component:rowData[3],
                          name:rowData[4],
                      })
                  }}
              >
                  <View style={styles.item}>
                      <Image
                          style={{width:50,height:50}}
                          source={rowData[2]}
                      >
                      </Image>
                      <Text>
                          {rowData[1]}
                      </Text>
                  </View>
              </TouchableOpacity>
          );
      }

      render(){
          return(
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(masterWork)}
                    renderRow={this.renderRow}
                    contentContainerStyle={styles.list}
                />

          );
      }
}

const styles = StyleSheet.create({
    list: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex:1,
        alignItems:'center',
    },

    item:{
       width:100,
        height:100,
        borderWidth:StyleSheet.hairlineWidth,
        borderColor:'gray',
        marginTop:10,
        borderRadius:10,
        backgroundColor:'aliceblue',
        alignItems:'center',
        justifyContent:'center',
    },
});