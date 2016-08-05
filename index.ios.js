import React,{Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';
import Main from './src/pages/Main';
import Splash from './src/pages/Splash';

class Demo extends Component{
    render(){
        return (
            <Navigator
                initialRoute={{ name: 'defaultName', component: Splash }}

                //可选,配置页面切换动画和手势
                configureScene={(route,routeStack) => {
                    return Navigator.SceneConfigs.FloatFromRight;
                }}

                //必选,渲染每一个路由指定的页面
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    //传值要加{...route.passProps},不然页面跳转传值失败
                    return <Component {...route.passProps} route={route} navigator={navigator} />
                }}/>
        );
    }
}

AppRegistry.registerComponent('Demo',() => Demo);

//react-native run-ios --simulator="iPhone 5s"
