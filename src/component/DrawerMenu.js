/**
 * Created by cw on 16/7/30.
 */
import React,{Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default class Menu extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={this.props.source}
                />
                <Text style={styles.text}
                      onPress={this.props.onPress}
                >
                    {this.props.title}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        height:50,
        borderBottomWidth:StyleSheet.hairlineWidth,
        borderBottomColor:'gray',
        flexDirection:'row',
        alignItems:'center',
        marginTop:20,
    },
    image:{
        width:30,
        height:30,
        marginLeft:20,
    },
    text:{
        flex:1,
        marginLeft:40,
    }
});