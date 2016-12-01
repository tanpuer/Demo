/**
 * Created by cw on 16/7/28.
 */
import React ,{Component} from 'react';
import {View, Text, Dimensions, Platform, DrawerLayoutAndroid, Image, InteractionManager, ScrollView, Animated,
    TouchableOpacity} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import ScrollTabView ,{DefaultTabBar,ScrollableTabBar}from 'react-native-scrollable-tab-view';
import Android from '../pages/AndroidPager';
import Ad from '../pages/AdPager';
import HomeToolBar from '../component/HomeToolBar';
import Menu from '../component/DrawerMenu';
import Favorite from '../menu/Favorite';
import Suggestion from '../menu/Suggestion';
import About from '../menu/About';
import Blog from '../pages/Blog';
import TableView from '../pages/TableView';
import Personal3 from '../animation/Personal3';
import More from '../yinguo/more/More';
import ListContainer from '../f8/common/ListContainer';
import ScrollTabBar from '../component/ScrollTabBar';

const WIDTH = Dimensions.get('window').width;
const drawerWidth = Dimensions.get('window').width / 5 * 4;

class Main extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            listViewCanScroll: false, // scrollTabView的子listView是否能滑
        };
        this.renderNavigationView = this.renderNavigationView.bind(this);
        this.openDrawer = this.openDrawer.bind(this);
        this.onClick = this.onClick.bind(this);
      }

    renderNavigationView(){
        return(
          <View style={{backgroundColor:'wheat',flex:1}}>
              <Image
                  style={{width:drawerWidth,height:drawerWidth-100}}
                  source={require('../png/drawer.jpg')}
              />
              <Menu source={require('../png/menu.png')} title="redux练习2" onPress={()=> {this.onClick(1)}}/>
              <Menu source={require('../png/share.png')} title="redux练习1" onPress={()=> {this.onClick(2)}}/>
              <Menu source={require('../png/settings.png')} title="建议" onPress={()=> {this.onClick(3)}}/>
              <Menu source={require('../png/info.png')} title="关于" onPress={()=> {this.onClick(4)}}/>
          </View>
        );
    }

    /*
    *打开DrawerLayout
    */
    openDrawer(){
        this.refs.drawer.openDrawer();
    }

    onClick(index){
        const {navigator} = this.props;
        this.refs.drawer.closeDrawer();
        switch (index){
            case 1:{
                InteractionManager.runAfterInteractions(() => {
                    if(navigator){
                        navigator.push({
                            component:Ad,
                            name:"主页",
                        });
                    }
                });
                break;
            }
            case 2:{
                InteractionManager.runAfterInteractions(() => {
                    if(navigator){
                        navigator.push({
                            component:Favorite,
                            name:"redux练习",
                        });
                    }
                });
                break;
            }
            case 3:{
                InteractionManager.runAfterInteractions(() => {
                    if(navigator){
                        navigator.push({
                            component:Suggestion,
                            name:"建议",
                        });
                    }
                });
                break;
            }
            case 4:{
                if(navigator){
                    navigator.push({
                        component:About,
                        name:"关于",
                    });
                }
                break;
            }
            default:
                break;
        }
    }

    onScroll(event){
        var y = event.nativeEvent.contentOffset.y;
        if (y > 240 && this.state.listViewCanScroll == false) {
            this.setState({
                listViewCanScroll: true,
            });
        }
        if (y < 240 && this.state.listViewCanScroll == true){
            this.setState({
                listViewCanScroll: false,
            });
        }
    }

    //listView 响应滑动的时候  listViewCanScroll= true ,scrollView的contentContainerStyle和listView的style都有flex:1, listView的EnableScroll ＝{true}
    //scrollView 响应滑动的时候  listViewCanScroll= false ,scrollView的contentContainerStyle和listView的style都不用写, listView的EnableScroll ＝{false}


    render(){
        // var scrollViewStyle;
        // var listViewStyle;
        // if (this.state.listViewCanScroll == true){
        //     scrollViewStyle = {flex:1};
        //     listViewStyle = {flex:1};
        // }

        const {navigator} = this.props;
        console.log("111111",this.state.listViewCanScroll);
        var arr = ["111","222","333","444"];
        return(
            <DrawerLayout
                ref="drawer"
                drawerWidth={Dimensions.get('window').width / 5 * 4}
                drawerPosition={Platform.OS === 'android' ? DrawerLayoutAndroid.positions.Left : 'left'}
                renderNavigationView={this.renderNavigationView}
                scrollEnabled={!this.state.listViewCanScroll}
            >
                {/*{this.state.listViewCanScroll == true ? <View style={{height:40,position:'absolute',top:0,overflow:'visible'}}><Text>1111</Text></View> : <View></View>}*/}


                {this.state.listViewCanScroll == true ?
                    <View style={{zIndex:1}}>
                        <ScrollTabBar tabs={["知乎热门","我的博客","RN","RN2"]} selectedTab={0}/>
                    </View>
                    :
                    <View></View>
                }



                <ScrollView
                    ref="scrollView"
                    onScroll ={(event)=>{this.onScroll(event)}}
                    scrollEventThrottle = {1}
                    scrollEnabled={true}
                    >
                    <HomeToolBar
                        onPress={this.openDrawer}
                        title="安卓"
                        source={require('../png/menu.png')}
                    />
                    <View style={{height:200}}>
                        <Image source={require('../png/tiger.jpg')} style={{height:200,width:WIDTH}}/>
                    </View>




                    <View
                        style={{flex:1}}
                    >

                        <ScrollTabView
                            renderTabBar = {()=>
                                <ScrollableTabBar
                                    underlineHeight={4}
                                    textStyle={{fontSize:16,marginTop:10}}
                                />
                            }
                            tabBarUnderlineColor = 'darkgoldenrod'
                            tabBarBackgroundColor = 'wheat'
                            tabBarActiveTextColor = 'darkgoldenrod'
                            tabBarInactiveTextColor = 'gray'
                            navigator = {navigator}
                        >
                            <Android tabLabel = "知乎热门" navigator={this.props.navigator} scrollEnabled={false}/>

                            <Blog tabLabel = "我的博客"/>
                            <TableView tabLabel="RN" navigator={this.props.navigator}/>
                            <More tabLabel="RN2"/>
                        </ScrollTabView>
                    </View>
                </ScrollView>
            </DrawerLayout>
        );
    }
}

export default Main;