/**
 * 2016.7.28
 */

import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import MyTimer from '../component/MyTimer';

class Ads extends Component {
    // 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
    }

    render() {
        return (
            <View style={[styles.container,styles.column]}>
                <View style={[styles.view1,styles.row,{marginBottom:10}]}>

                    <View style={[styles.view11,styles.borderright]}>
                        <Text style={[styles.text,{fontSize:16, color:'green',marginTop:5}]}>我们约会吧</Text>
                        <Text style={[styles.text,{fontSize:12, color:'black',marginTop:10}]}>恋爱家人好朋友</Text>
                        <Image
                            style={{width:80,height:90,left:10}}
                            source={require('../png/hanbaobao.jpg')}
                        />
                    </View>
                    <View style={[styles.view12,styles.column]}>
                        <View style={[{flex:1},styles.borderbottom,styles.row]}>
                            <View style={[styles.column,{flex:1}]}>
                                <Text style={{fontSize:20,marginTop:10,textAlign:'center',fontWeight:'bold', color:'red'}}>低价超值</Text>
                                <Text style={{fontSize:16,marginTop:10,textAlign:'center'}}>十元惠生活</Text>
                            </View>
                            <View style={{flex:1}}>
                                <Image
                                    style={{width:60,height:70,left:10}}
                                    source={require('../png/hanbaobao.jpg')}
                                />
                            </View>
                        </View>
                        <View style={{flex:1}}>
                            <View style={{flex:2}}>
                                <Text style={{fontSize:20,marginTop:2,textAlign:'center',fontWeight:'bold', color:'pink'}}>聚餐宴请</Text>
                                <Text style={{fontSize:12,marginTop:5,textAlign:'center'}}>距离结束</Text>
                            </View>
                            <View style={{flex:1,alignItems:'center'}}>
                                <MyTimer/>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={[styles.view2,styles.column]}>
                    <View style={styles.view2}>
                        <Text style={[styles.text]}>2.1</Text>

                    </View>
                    <View style={[styles.view2,styles.row]}>
                        <View style={styles.view2}>
                            <Text style={[styles.text]}>2.2.1</Text>
                        </View>
                        <View style={styles.view2}>
                            <Text style={[styles.text]}>2.2.2</Text>
                        </View>
                    </View>
                    <View style={[styles.view2,styles.row]}>
                        <View style={styles.view2}>
                            <Text style={[styles.text]}>2.3.1</Text>
                        </View>
                        <View style={styles.view2}>
                            <Text style={[styles.text]}>2.3.2</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.view3,styles.row,{marginTop:10}]}>
                    <View style={styles.view3}>
                        <Text style={[styles.text]}>3.1</Text>
                    </View>
                    <View style={styles.view3}>
                        <View style={[styles.view3]}>
                            <Text style={[styles.text]}>3.2</Text>
                        </View>
                        <View style={styles.view3}>
                            <Text style={[styles.text]}>3.3</Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:20,
        backgroundColor:'gray',
    },
    view1:{
        flex:2,
        backgroundColor:'white',
    },
    view2:{
        flex:3,
        backgroundColor:'white',
    },
    view3:{
        flex:2,
        backgroundColor:'white',
    },
    row:{
        flexDirection:'row',
    },
    column:{
        flexDirection:'column',
    },
    text:{
        alignSelf:'center',
    },
    view11:{
        flex:1,
    },
    view12:{
        flex:2,
    },
    borderleft:{
        borderLeftWidth:1,
        borderLeftColor:'gray',
    },
    borderright:{
        borderRightWidth:1,
        borderRightColor:'gray',
    },
    bordertop:{
        borderTopWidth:1,
        borderTopColor:'gray',
    },
    borderbottom:{
        borderBottomWidth:1,
        borderBottomColor:'gray',
    },

});

export default Ads;
