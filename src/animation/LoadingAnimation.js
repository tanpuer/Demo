/**
 * Created by cw on 16/9/23.
 */
import React,{Component} from 'react';
import {
    Image,
    StyleSheet,
    View,
    ListView,
    Text,
    Dimensions,
} from 'react-native';
import GiftedListView from 'react-native-gifted-listview';

const DATA = [{name:122},{name:111}];
const SCREEN_WIDTH = Dimensions.get('window').width;
export default class LoadingAnimation extends Component{


    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {dataSource:new ListView.DataSource({
            rowHasChanged: (row1,row2) => row1 !== row2,
        }),};
        this.renderRowView = this.renderRowView.bind(this);
          this.onFetch = this.onFetch.bind(this);
      }

    renderRowView(rowData){
        return(
            <View style={{width:SCREEN_WIDTH,height:40,justifyContent:'center',alignItems:'center', marginTop:100}}>
                <Text>
                    {rowData.name}
                </Text>
            </View>
        );
    }

    onFetch(page=1,callback,options){
        setTimeout(()=>{console.log("onfetch");callback([{name:333},{name:444}])},
            2000
        );
    }

    render(){
        return(
            <GiftedListView
                style={{height:100}}
                rowView={this.renderRowView}
                firstLoader={true} // display a loader for the first fetching
                pagination={true} // enable infinite scrolling using touch to load more
                refreshable={true} // enable pull-to-refresh for iOS and touch-to-refresh for Android
                withSections={false} // enable sections
                customStyles={{
                    paginationView: {
                        backgroundColor: '#eee',
                    },
                }}
                dataSource={this.state.dataSource.cloneWithRows(DATA)}
                onFetch={this.onFetch}
            />
        );
    }
}

const styles = StyleSheet.create({
   container:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
   },
});