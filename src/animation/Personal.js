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
} from 'react-native';

import ParallaxScrollView from 'react-native-parallax-scroll-view';
import ScrollTabView ,{DefaultTabBar}from 'react-native-scrollable-tab-view';

class Talks extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows([
                'Simplicity Matters',
                'Hammock Driven Development',
                'Value of Values',
                'Are We There Yet?',
                'The Language of the System',
                'Design, Composition, and Performance',
                'Clojure core.async',
                'The Functional Database',
                'Deconstructing the Database',
                'Hammock Driven Development',
                'Value of Values'
            ])
        };
    }

    render() {
        const { onScroll = () => {} } = this.props;
        return (
            <ListView
                ref="ListView"
                style={styles.container}
                dataSource={ this.state.dataSource }
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
                                    谁看过我的个人主页
                                </Text>
                            </View>
                        )}

                        renderStickyHeader={() => (
                            <View key="sticky-header" style={styles.stickySection}>
                                <Text style={styles.stickySectionText}>Rich Hickey Talks</Text>
                            </View>
                        )}

                        renderFixedHeader={() => (
                            <View key="fixed-header" style={styles.fixedSection}>
                                <Text style={styles.fixedSectionText}
                                      onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
                                    Scroll to top
                                </Text>
                            </View>
                        )}/>
                )}
            />
        );
    }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 300;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        width: 300,
        justifyContent: 'flex-end'
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