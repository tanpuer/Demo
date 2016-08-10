/**
 * Created by cw on 16/8/10.
 */
import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';

import About from '../menu/About';
import Home from '../menu/Home';

const tabBarItems = [
    { title: '最新', icon: () => <Image style={{ width: 30, height: 30 }} source={require('../png/icon/home.png')}/>, component: Home },
    { title: '分类', icon: () => <Image style={{ width: 30, height: 30 }} source={require('../png/icon/me.png')}/>, component: About },
];

export default class Iosui extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
          this.state = {
              selectedTab: tabBarItems[0].title,
          };
      }
    render() {
        return (
            <TabNavigator tabBarStyle={{ height: 60 }}>
                {
                    tabBarItems.map((controller, i) => {
                        let Component = controller.component;
                        return (
                            <TabNavigator.Item
                                key= {i}
                                selected={this.state.selectedTab === controller.title}
                                title={controller.title}
                                renderIcon={controller.icon}
                                onPress={() => this.setState({ selectedTab: controller.title }) }>
                                <Component navigator = {this.props.navigator} {...this.props}/>
                            </TabNavigator.Item>
                        )
                    })
                }
            </TabNavigator >

        );
    }
}