/**
 * Created by cw on 16/7/28.
 */
import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    Image,
    TouchableOpacity,
    ActivityIndicator,
    RefreshControl,
} from 'react-native';
import Article from '../pages/Article';

//知乎日报热门消息API接口
var REQUEST_URL = 'http://news-at.zhihu.com/api/3/news/hot';


export default class AndroidPager extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state={
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1,row2) => row1 !== row2,
            }),
            isLoaded: false,
            freshing:false,
        };
        this.renderMovies = this.renderMovies.bind(this);
          this.onRefresh = this.onRefresh.bind(this);
      }

    componentDidMount() {
        this.fetchData();
    }

    fetchData(){
        fetch(REQUEST_URL)
            .then((response)=> response.json())
            .then((resopnseData) => {
                this.setState({
                    dataSource:this.state.dataSource.cloneWithRows(resopnseData.recent),
                    isLoaded:true,
                });
            })
            .done();
    }

    renderMovies(rowData){
        return(
          <TouchableOpacity
              onPress={()=>{
                  this.props.navigator.push({
                      component:Article,
                      name:rowData.title,
                      passProps:{id:rowData.url},
                  });
              }}
          >
              <View style={styles.container}>
                  <Image
                      style={styles.movieImg}
                      source={{url:rowData.thumbnail}}
                      defaultSource={require('../png/hanbaobao.jpg')}
                  />
                  <View
                      style={styles.des}
                  >
                      <View style={styles.des}>
                          <Text style={styles.text}>{rowData.title}</Text>
                          <Text style={styles.text}>{rowData.news_id}</Text>
                      </View>
                  </View>
              </View>
          </TouchableOpacity>
        );
    }

    onRefresh(){
        this.setState({freshing:true});
        setTimeout(()=>{
            this.setState({freshing:false});
        },2000);
    }

    onLayout(){

    }

    render(){
          if (!this.state.isLoaded){
              return(
                <View style={styles.des}>
                    <ActivityIndicator color="darkgoldenrod"/>
                    <Text>加载中。。。</Text>
                </View>
              );
          }else {
              return(
                  <ListView
                      ref="Android_ListView"
                      style={styles.listView}
                      dataSource={this.state.dataSource}
                      renderRow={this.renderMovies}
                      refreshControl={
                          <RefreshControl
                              refreshing={this.state.freshing}
                              onRefresh={this.onRefresh}
                          />
                      }
                      scrollEnabled={this.props.scrollEnabled}
                  />
              );
          }
    }
}

const styles = StyleSheet.create({
   listView:{
       flex:1,
       marginTop:20,
   } ,
    container:{
        height:90,
        flexDirection:'row',
        alignItems:'center',
        marginLeft:10,
        marginRight:10,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'gray',
    },
    movieImg:{
        width:80,
        height:80,
    },
    des:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:16,
    },
});


