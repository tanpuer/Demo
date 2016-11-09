/**
 * Created by cw on 2016/11/9.
 */
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    PixelRatio,
    StyleSheet,
    Text,
    View,
    RecyclerViewBackedScrollView,
    TouchableOpacity,
    LayoutAnimation,
    ScrollView,
    ListView,
} from 'react-native';

export default class Personal3 extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            dataSource:new ListView.DataSource({
                rowHasChanged: (row1, row2)=> row1 != row2,
                sectionHeaderHasChanged:(sec1, sec2)=> sec1 != sec2,
            }),
        };
          this.renderRow = this.renderRow.bind(this);
          this.renderSection = this.renderSection.bind(this);
      }

    renderRow(rowData,sectionId,rowId,highlightRow){
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

      render(){
          return(
              <ListView
                  dataSource={this.state.dataSource.cloneWithRowsAndSections(DATA)}
                  renderRow={this.renderRow}
                  renderSectionHeader={this.renderSection}
              />
          );
      }
}
