/**
 * Created by cw on 2017/3/22.
 */
import React,{Component} from 'react';
import {
    View,
    Image
} from 'react-native';
import Swipable from '../component/Swipable';

export default class SwipableTest extends Component{

    render(){
        return(
            <View style={{alignItems:'center'}}>
                <Swipable>
                    <Image
                        source={require('../png/react.png')}
                        style={{width:100, height:100}}
                    />
                </Swipable>

                <Swipable>
                    <Image
                        source={require('../png/java.png')}
                        style={{width:100, height:100}}
                    />
                </Swipable>
            </View>
        )
    }
}