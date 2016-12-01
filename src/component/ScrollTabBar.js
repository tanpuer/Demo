import React,{Component} from 'react';
import {View, Text, Dimensions, TouchableOpacity , StyleSheet, TouchableHighlight} from 'react-native';

const WIDTH = Dimensions.get('window').width;

export default class ScrollTabBar extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

      render(){
          return (
              <TouchableHighlight onPress={()=>{alert("111")}} style={{flex:1}}>
                  <View style={{width:WIDTH,height:49,position:'absolute',flexDirection:'row'}}>
                      {this.props.tabs.map((row,index)=>(
                          <View key={index} style={this.props.selectedTab == index? styles.container: styles.defaultContainer}>
                              <Text style={this.props.selectedTab == index? styles.selectedText: styles.defaultText}>{row}</Text>
                          </View>
                      ))}
                  </View>
              </TouchableHighlight>
          );
      }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'wheat',
       borderBottomWidth:4,
       borderBottomColor:'darkgoldenrod',
       paddingTop:10,
   },
   defaultContainer:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:'wheat',
       paddingTop:10,
   },

    selectedText:{
        fontSize:16,
        color:'darkgoldenrod'
    },
    defaultText:{
        fontSize:16,
        color:'gray',
    }
});