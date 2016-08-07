/**
 * Created by cw on 16/7/28.
 */
import React ,{Component} from 'react';
import {View, Text, Dimensions, Platform, DrawerLayoutAndroid, Image, InteractionManager} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import ScrollTabView ,{DefaultTabBar}from 'react-native-scrollable-tab-view';
import Android from '../pages/AndroidPager';
import RN from '../pages/RNPager';
import Ad from '../pages/AdPager';
import HomeToolBar from '../component/HomeToolBar';
import Menu from '../component/DrawerMenu';
import Favorite from '../menu/Favorite';
import Suggestion from '../menu/Suggestion';
import About from '../menu/About';
import Blog from '../pages/Blog';
import TableView from '../pages/TableView';

const drawerWidth = Dimensions.get('window').width / 5 * 4;

class Main extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
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

    render(){
        const {navigator} = this.props;
        return(
            <DrawerLayout
                ref="drawer"
                drawerWidth={Dimensions.get('window').width / 5 * 4}
                drawerPosition={Platform.OS === 'android' ? DrawerLayoutAndroid.positions.Left : 'left'}
                renderNavigationView={this.renderNavigationView}
            >
                <View style={{flex:1}}>
                    <HomeToolBar
                        onPress={this.openDrawer}
                        title="安卓"
                        source={require('../png/menu.png')}
                    />
                    <ScrollTabView
                        renderTabBar = {()=>
                            <DefaultTabBar
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
                        <Android tabLabel = "知乎热门" navigator={this.props.navigator}/>
                        <RN tabLabel = "Android学习"/>
                        <Blog tabLabel = "我的博客"/>
                        <TableView tabLabel="RN小项目"/>

                    </ScrollTabView>
                </View>
            </DrawerLayout>
        );
    }
}

export default Main;