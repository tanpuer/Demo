/**
 * Created by cw on 16/7/28.
 */
import React ,{Component} from 'react';
import {Dimensions, Text, View, TouchableOpacity, Image, StyleSheet} from 'react-native';

const maxWidth =Dimensions.get('window').width;

class MyToolBar extends Component{
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {};
      }

      render(){
            return(
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.containerStyle}
                        onPress={this.props.onPress}
                    >
                        <Image
                            style={styles.style}
                           source={this.props.source}
                        />
                    </TouchableOpacity>

                    <Text
                        style={styles.text}
                    >
                        {this.props.title}
                    </Text>
                </View>
            );
      }
}

const styles =StyleSheet.create({
    container:{
        height:40,
        backgroundColor:'darkgoldenrod',
        flexDirection:'row',

    },
    containerStyle:{
        marginTop:5,
        marginLeft:10,
        width:60,
        height:30,
        paddingTop:10,
        paddingBottom:5,
    },
    style:{
        width:25,
        height:25,
    },
    text:{
        marginLeft:maxWidth/2-80,
        color:'black',
        fontSize:16,
        fontWeight:'bold',
        marginTop:20,
    },

});

export default MyToolBar;