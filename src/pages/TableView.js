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
// import IOSUI from '../component/Iosui';
import YinGuo from '../yinguo/YinGuo';
import LoadingView from '../animation/LoadingAnimation';
import Personal from '../animation/Personal';
import Personal2 from '../animation/Personal2';
import Personal3 from '../animation/Personal3';
import Login from '../animation/LoginComponent';

const masterWork = [[1,"倒计时",require('../png/screenshots/timer.png'),Timer,"计时器"],
                    [2,"咻一咻",require('../png/screenshots/xiuyixiu.png'),XiuyiXiu,"咻一咻"],
                    [3,"粮票",require('../png/screenshots/mealticket.png',"粮票"),MealTicket],
                    [4,"等餐",require('../png/screenshots/wait.png'),Waiting,"等餐"],
                    [5,"手势",require('../png/screenshots/gesture.png'),Gesture,"手势"],
                    [6,"音乐",require('../png/screenshots/music_pan.png'),Music,"音乐"],
                    // [7,"因果",require('../png/yinguo/eengoo.png'),IOSUI,"IOS"],
                    [8,"因果Redux",require('../png/yinguo/eengoo.png'),YinGuo,"IOS"],
                    // [9,"Loading",require('../png/loading.png'),LoadingView,"Loading"],
                    [10,"Personal-ListView",require('../png/loading.png'),Personal,"Personal"],
                    [11,"Personal-ScrollView",require('../png/loading.png'),Personal2,"Personal"],
                    [12,"Personal-Sketch",require('../png/loading.png'),Personal3,"Personal"],
                    [13,"Personal-Login",require('../png/loading.png'),Login,"Login"],
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