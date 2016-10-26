/**
 * Created by cw on 16/8/10.
 */
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import About from '../menu/About';
import Home from '../menu/Home';
import More from '../yinguo/more/More';
import MoreContainers from '../yinguo/container/MoreContainers';

const tabBarItems = [
    { title: '动态', icon: () => <Image style={{ width: 30, height: 30 }} source={require('../png/icon/home.png')}/>,select_icon: () => <Image style={{ width: 30, height: 30 }} source={require('../png/icon/home_selected.png')}/>, component: Home },
    { title: '好友', icon: () => <Image style={{ width: 30, height: 30 }} source={require('../png/icon/friend.png')}/>,select_icon: () => <Image style={{ width: 30, height: 30 }} source={require('../png/icon/friend_selected.png')}/>, component: About },
    { title: '更多', icon: () => <Image style={{ width: 30, height: 30 }} source={require('../png/icon/more.png')}/>,select_icon: () => <Image style={{ width: 30, height: 30 }} source={require('../png/icon/more_selected.png')}/>, component: MoreContainers },
];

export default class Iosui extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          this.state = {
              selectedTab: tabBarItems[2].title,
          };
      }

      renderBadge(){
          return(
              <View style={{width:20,height:20,borderRadius:10,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
                  <Text style={{}}>
                      2
                  </Text>
              </View>
          );
      }

    render() {
        return (
            <TabNavigator tabBarStyle={{ height: 55,backgroundColor:'whitesmoke'}}
                          allowFontScaling={false}
            >
                {
                    tabBarItems.map((controller, i) => {
                        let Component = controller.component;
                        return (
                            <TabNavigator.Item
                                key= {i}
                                selected={this.state.selectedTab === controller.title}
                                title={controller.title}
                                selectedTitleStyle={{color:'red',fontSize:10,fontWeight:'bold'}}
                                renderIcon={controller.icon}
                                renderSelectedIcon={controller.select_icon}
                                renderBadge={()=> this.renderBadge()}
                                onPress={() => this.setState({ selectedTab: controller.title }) }>
                                <Component navigator = {this.props.navigator} {...this.props}/>
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator >

        );
    }
    //exnavigator可以作为替代
}