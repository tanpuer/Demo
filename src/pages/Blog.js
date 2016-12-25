/**
 * Created by cw on 16/8/3.
 */
import React,{Component} from 'react';
import {Text, View, Dimensions, Image, StyleSheet, ListView, TouchableOpacity} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const icons = ['../png/all.png','../png/all.png','../png/all.png','../png/all.png'];
const list = ["All","Android","React Native","Java"];

//模拟自己的blog数据
const java =[["Sping MVC入门","2015-04-01","tanpuer",3],["Thinking in JAVA笔记","2015-05-01","tanpuer",3],
            ["AnySDK 框架思考","2015-05-01","tanpuer",3]];
const rn = [["React生命周期","2015-02-01","tanpuer",2],["React Native入门","2015-03-01","tanpuer",2],
            ["React Native通用组件使用","2015-03-01","tanpuer",2]];
const android = [["Activity生命周期","2015-01-01","tanpuer",1],["自定义View进阶1","2015-06-01","tanpuer",1],
    ["自定义View进阶2","2015-06-01","tanpuer",1],["自定义View进阶3","2015-06-01","tanpuer",1]];
var all = java.concat(rn).concat(android);

export default class Blog extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            allSelected:true,
            javaSelected:true,
            androidSelected:true,
            rnSelected:true,
            refresh:true,
            dataSource:new ListView.DataSource({
                rowHasChanged: (row1,row2) => row1 !== row2,
            }),
        };
        this.renderItems = this.renderItems.bind(this);
        this.renderImg = this.renderImg.bind(this);
        this.setAllStates = this.setAllStates.bind(this);
        this.checkStates = this.checkStates.bind(this);
        this.checkStates = this.checkStates.bind(this);
        this.renderIcon = this.renderIcon.bind(this);
          this.renderPaper = this.renderPaper.bind(this);
          this.renderheader = this.renderheader.bind(this);
          this.fetchData = this.fetchData.bind(this);
      }

      render(){
          return(
                <ListView
                    style={styles.listView}
                    dataSource={this.state.dataSource.cloneWithRows(this.fetchData())}
                    renderRow={this.renderPaper}
                    renderSectionHeader={this.renderheader}
                    enableEmptySections={true}
                />
          );
      }

      fetchData(){
          all =[];
          if(this.state.javaSelected){
              all = all.concat(java);
          }
          if(this.state.androidSelected){
              all =all.concat(android);
          }
          if(this.state.rnSelected){
              all =all.concat(rn);
          }
          return all.sort((a,b)=>{return Math.random()>0.5 ? -1: 1;});
      }

      renderheader(){
          var blogComponents = [];
          for(var i =0;i<4;i++){
              blogComponents.push(this.renderItems(i))
          }
          return(
              <Image
                  source={require('../png/blog_bg.jpg')}
                  style={styles.container}
              >
                  {blogComponents}
              </Image>
          )
      }

      //渲染博客listview的内容
      renderPaper(rowData){
            return(
              <TouchableOpacity>
                  <View style={styles.blogpapers}>

                      {this.renderIcon(rowData[3],45)}

                      <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
                          <Text style={styles.title}>{rowData[0]}</Text>
                          <View style={{flexDirection:'row',flex:1}}>
                              <Text style={{color:'gray',fontSize:10,flex:1,textAlign:'center',}}>{rowData[1]}</Text>
                              <Text style={{color:'gray',fontSize:8,flex:1, textAlign:'center',}}>作者:{rowData[2]}</Text>
                          </View>
                      </View>
                  </View>
              </TouchableOpacity>
            );
      }

      renderItems(i){
          return(
              <TouchableOpacity
                  key={i}
                  style={{flex:1,height:100,}}
                  onPress={()=>{this.onItemPress(i)}}
              >
                  <View
                      style={{flex:1, alignItems:'center',justifyContent:'center'}}
                  >
                      {this.renderIcon(i,60)}
                      <Text style={{fontSize:10}}>
                          {list[i]}
                      </Text>
                      {this.renderImg(i)}
                  </View>
              </TouchableOpacity>
          );
      }

      renderIcon(i,mWidth){
          switch (i){
              case 0:{
                  return(
                      <Image
                          source={require('../png/all.png')}
                          style={{width:mWidth,height:mWidth}}
                      />
                  );
              }
              case 1:{
                  return(
                      <Image
                          source={require('../png/android.png')}
                          style={{width:mWidth,height:mWidth}}
                      />
                  );
              }
              case 2:{
                  return(
                      <Image
                          source={require('../png/react.png')}
                          style={{width:mWidth,height:mWidth}}
                      />
                  );
              }
              case 3:{
                  return(
                      <Image
                          source={require('../png/java.png')}
                          style={{width:mWidth,height:mWidth}}
                      />
                  );
              }
              default:
                  break;
          }
      }

      // redux学习
      onItemPress(i){
          switch (i){
              case 0: {
                  this.setState({allSelected: !this.state.allSelected});
                  this.setAllStates();
                  break;
              }
              case 1:
                  if(!this.state.allSelected){
                      this.setState({androidSelected:!this.state.androidSelected});
                      this.checkStates(i);
                  }else {
                      if(this.state.androidSelected){
                          this.setState({androidSelected:!this.state.androidSelected});
                          this.setState({allSelected: !this.state.allSelected})
                      }
                  }
                  break;
              case 2:
                  if(!this.state.allSelected){
                      this.setState({rnSelected:!this.state.rnSelected});
                      this.checkStates(i);
                  }else {
                      if(this.state.rnSelected){
                          this.setState({rnSelected:!this.state.rnSelected});
                          this.setState({allSelected: !this.state.allSelected})
                      }
                  }
                  break;
              case 3:
                  if(!this.state.allSelected){
                      this.setState({javaSelected:!this.state.javaSelected});
                      this.checkStates(i);
                  }else {
                      if(this.state.javaSelected){
                          this.setState({javaSelected:!this.state.javaSelected});
                          this.setState({allSelected: !this.state.allSelected})
                      }
                  }
                  break;
              default:
                  break;
          }
      }

      //渲染勾号
      renderImg(i){
          var selected = [this.state.allSelected,this.state.androidSelected,this.state.rnSelected,this.state.javaSelected];
          if(selected[i]){
              return(
                  <Image
                      style={{width:15,height:15}}
                      source={require('../png/check.png')}
                  />
              );
          }else {
              return(
                  <Image
                      style={{width:15,height:15}}
                  />
              );
          }
      }

      setAllStates(){
          this.setState({androidSelected:!this.state.allSelected});
          this.setState({javaSelected:!this.state.allSelected});
          this.setState({rnSelected:!this.state.allSelected});
      }

      checkStates(i){
          var selected = [this.state.allSelected,this.state.androidSelected,this.state.rnSelected,this.state.javaSelected];
          var seletOne = selected[i];
          selected.splice(i,1);
          if(selected[1] == selected[2] && selected[1] ==!seletOne){
              this.setState({allSelected:!seletOne});
          }
      }
}

const styles = StyleSheet.create({
   container:{
       width:screenWidth,
       height:screenWidth*400/750,
       justifyContent:'center',
       flexDirection:'row',
       alignItems:'center',
   },
    blogpapers:{
        flex:1,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'black',
        alignItems:'center',
        margin:10,
        flexDirection:'row',
        justifyContent:'center',
    },
    title:{
        fontSize:20,
        marginBottom:10,
    },
    listView:{
        flex:1,
    } ,
});

//This is a suggestions of reactjs to improve the rendering performance.
// By providing a unique key for each dynamically created element,
// it is possibile to minimize possible DOM changes.