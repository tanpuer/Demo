/**
 * Created by cw on 16/8/12.
 */
import React,{Component} from 'react';
import {ListView, View, Text} from 'react-native';

var fruits= ["Apple","Banana","Lemon","BlueBerry","Orange"];

var jsonObject = [];

export default class Mianshi extends Component{
    // 构造
      constructor(props) {
          super(props);
          // 初始状态
          this.state = {
              dataSource: new ListView.DataSource({
                  rowHasChanged: (row1, row2) => row1 !== row2,
              }),
          };
          this.renderRow =this.renderRow.bind(this);
          jsonObject.fill({id: 1, name: "Apple", nums: 20});
          console.log(jsonObject.toString());
          for(var i=0;i<50;i++){
              var randomMum = Math.
              jsonObject.push({id:i,name:fruits[randomMum],nums:Math.random(100)});
          }
      }

    componentDidMount() {
        //jsonObject.json().nums根据这个排序
        var array = [];
        for(var i =0;i<50;i++){
            for(var j =0; j<i; j++){

            }
        }
    }

      renderRow(rowData){
            return(
              <View>
                  <Text>{rowData.id}</Text>
                  <Text>{rowData.name}</Text>
                  <Text>{rowData.nums}</Text>
              </View>
            );
      }



      render(){
          return(
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(jsonObject)}
                    renderRow={this.renderRow}
                    initialListSize={10}
                >
                </ListView>
          );
      }
}