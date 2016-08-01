/**
 * Created by cw on 16/7/30.
 */

import React ,{Component} from 'react';
import {
    View,
    Text,
    WebView,
} from 'react-native';
import MyToolBar from '../component/HomeToolBar';

export default class Article extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            linking:this.props.id,
            url:null,
        };
      }

    componentDidMount() {
        this.fetchData();
    }

    fetchData(){
        fetch(this.state.linking)
            .then((response)=>response.json())
            .then((responseData)=>{
                this.setState({
                   url:responseData.share_url,
                });
            })
            .done();
    }

    render() {
        const {navigator} = this.props;
        if (this.state.url !== null) {
            return(
                <View style={{flex:1}}>
                    <MyToolBar
                        title="Article"
                        onPress={()=>{navigator.pop()}}
                        source={require('../png/icon_left.png')}
                    />
                    <WebView
                        source={{url:this.state.url}}
                        style={{flex:1}}
                    >
                    </WebView>
                </View>
            );
        }else {
            return(
              <Text>123</Text>
            );
        }

    }
}