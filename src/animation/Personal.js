/*
 * This example demonstrates how to use ParallaxScrollView within a ScrollView component.
 */
import React, { Component } from 'react';
import {
    Dimensions,
    Image,
    ListView,
    PixelRatio,
    StyleSheet,
    Text,
    View,
    RecyclerViewBackedScrollView,
    TouchableOpacity,
    LayoutAnimation,
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ScrollTabView ,{DefaultTabBar}from 'react-native-scrollable-tab-view';
import Blog from '../pages/Blog';
import TableView from '../pages/TableView';
import Android from '../pages/AndroidPager';

var DATA1 = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,];
var DATA2 = [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,];
var DATA3 = [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,];
var DATA4 = [4,4,4,4,4,4,4,4,4,4,4,4,4,4,4];
var DATA5 = [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5];
var DATA6 = [6,6,6,6,6,6,6,6,6,6,6,6,6,6,6];
var DATA = DATA1;
class Talks extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }),
            selected:1,
        };
        this.renderHeader = this.renderHeader.bind(this);
    }

    renderHeader(){
        return(
            <View style={{height:30}}>
                <Text>111111</Text>
            </View>
        );
    }

    onPress(item){
        switch (item){
            case 1:{
                this.setState({
                    selected:item,
                });
                DATA = DATA1;
                break;
            }
            case 2:{
                this.setState({
                    selected:item,
                });
                DATA = DATA2;
                break;
            }
            case 3:{
                this.setState({
                    selected:item,
                });
                DATA = DATA3;
                break;
            }
            case 4:{
                this.setState({
                    selected:item,
                });
                DATA = DATA4;
                break;
            }
            case 5:{
                this.setState({
                    selected:item,
                });
                DATA = DATA5;
                break;
            }
            case 6:{
                this.setState({
                    selected:item,
                });
                DATA = DATA6;
                break;
            }
        }
    }

    renderStickyHeader(){

    }

    render() {
        const { onScroll = () => {} } = this.props;
        return (
            <ListView
                ref="ListView"
                style={styles.container}
                dataSource={ this.state.dataSource.cloneWithRows(DATA) }
                renderRow={(rowData) => (
                    <View key={rowData} style={ styles.row }>
                        <Text style={ styles.rowText }>
                            { rowData }
                        </Text>
                    </View>
                )}

                renderScrollComponent={props => (
                    <ParallaxScrollView
                        onScroll={onScroll}

                        headerBackgroundColor="#FFFFFF"
                        stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
                        parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
                        backgroundSpeed={10}
                        backgroundColor="white"

                        renderBackground={() => (
                            <View key="background">
                                <Image
                                    style={{width: window.width,height: PARALLAX_HEADER_HEIGHT-40}}
                                    source={require('../png/drawer.jpg')}
                                />
                                <Text>
                                    个人资料完成度 80%
                                </Text>
                                <Text>
                                    这是个人主页
                                </Text>
                            </View>
                        )}

                        renderStickyHeader={() => (

                            <View key="sticky-header" style={styles.stickySection}>
                                <TouchableOpacity style={{flex:1,marginLeft:3,justifyContent:'center',alignItems:"center",borderBottomWidth:3,borderBottomColor:this.state.selected ==1?'red':'white'}}
                                                  onPress={()=>this.onPress(1)}>
                                    <Text style={{color:this.state.selected==1?'red':'black'}}>首页</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1,marginLeft:3,justifyContent:'center',alignItems:"center",borderBottomWidth:3,borderBottomColor:this.state.selected ==2?'red':'white'}}
                                                  onPress={()=>this.onPress(2)}>
                                    <Text style={{color:this.state.selected==2?'red':'black'}}>简介</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1,marginLeft:3,justifyContent:'center',alignItems:"center",borderBottomWidth:3,borderBottomColor:this.state.selected ==3?'red':'white'}}
                                                  onPress={()=>this.onPress(3)}>
                                    <Text style={{color:this.state.selected==3?'red':'black'}}>照片</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1,marginLeft:3,justifyContent:'center',alignItems:"center",borderBottomWidth:3,borderBottomColor:this.state.selected ==4?'red':'white'}}
                                                  onPress={()=>this.onPress(4)}>
                                    <Text style={{color:this.state.selected==4?'red':'black'}}>视频</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1,marginLeft:3,justifyContent:'center',alignItems:"center",borderBottomWidth:3,borderBottomColor:this.state.selected ==5?'red':'white'}}
                                                  onPress={()=>this.onPress(5)}>
                                    <Text style={{color:this.state.selected==5?'red':'black'}}>帖子</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={{flex:1,marginLeft:3,justifyContent:'center',alignItems:"center",borderBottomWidth:3,borderBottomColor:this.state.selected ==6?'red':'white'}}
                                                  onPress={()=>this.onPress(6)}>
                                    <Text style={{color:this.state.selected==6?'red':'black'}}>相册</Text>
                                </TouchableOpacity>
                            </View>
                        )}

                        /**
                        renderFixedHeader={() => (
                            <View key="fixed-header" style={styles.fixedSection}>
                                <Text style={styles.fixedSectionText}
                                      onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
                                    Scroll to top
                                </Text>
                            </View>
                        )}
                        **/
                    />
                )}
            />
        );
    }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 300;
const STICKY_HEADER_HEIGHT = 50;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT-20,
        width: window.width,
        justifyContent: 'center',
        flexDirection:"row",
        marginTop:20,
        borderBottomWidth:1,
        borderBottomColor:'gray'
    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
        margin: 10
    },
    fixedSection: {
        position: 'absolute',
        bottom: 10,
        right: 10
    },
    fixedSectionText: {
        color: '#999',
        fontSize: 20
    },
    parallaxHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 100
    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 24,
        paddingVertical: 5
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 5
    },
    row: {
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 20
    }
});

export default Talks;