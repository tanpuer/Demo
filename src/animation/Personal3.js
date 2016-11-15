import React,{Component} from 'react';
import {Image, View, Text, ScrollView, Dimensions} from 'react-native';
import ListContainer from '../f8/common/ListContainer';
import ScheduleListView from '../f8/tabs/schedule/ScheduleListView';

const WIDTH = Dimensions.get('window').width;
export default class Personal3 extends Component{


    render(){
        return(
            <ListContainer
                //title={"Schedule"}
                selectedSectionColor="red"
                backgroundImage={require('../png/tiger.jpg')}
                backgroundColor="white"
                >

                <ScheduleListView
                    key="1"
                    title="简介"
                    day={1}
                    data = {[1,2,3,4,5,6,1,1,1,1,1,1,1,1,1,1,1,1,1]}
                />
                <ScheduleListView
                    key="2"
                    title="帖子"
                    day={2}
                    data = {[1,2,3,4,5,6,7,1,1,1,2,1,1,1,2,2,2,2,2,2,2,2]}
                />
                <ScheduleListView
                    key="3"
                    title="相册"
                    day={3}
                    data = {[1,2,3,4,5,6,7,8,3,3,3,3,3,3,3,3,3,3,3,3,3,3,]}
                />
                <ScrollView
                    key="4"
                    title="视频"
                    day={4}
                    data = {[1,2,3,4,5,6,7,8,9]}
                >
                    <Text style={{marginTop:500}}>
                        11111111
                    </Text>
                </ScrollView>
            </ListContainer>
        );
    }
}


// parallaxContent={
// <View style={{width:WIDTH,height:500}}>
//     <Image
//         source={require('../png/drawer.jpg')}
//         style={{
//             width: WIDTH,
//             height: 300,
//         }}
//     />
//     <Text>
//         谁看过我的个人主页
//     </Text>
// </View>
// }