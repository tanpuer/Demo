/**
 * Created by cw on 16/7/28.
 */
import React ,{Component} from 'react';
import {
    Dimensions,
    Image,
    InteractionManager,
    Text,
    TouchableOpacity,
} from 'react-native';

import Main from '../pages/Main'

const maxHeight = Dimensions.get('window').height;
const maxWidth = Dimensions.get('window').width;

export default class Splash extends Component {
    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {count:5,};
        this.interval = setInterval(()=>{
            this.setState({count:this.state.count-1});
        },1000);
          this.immediateDidMount = this.immediateDidMount.bind(this);
      }

    componentDidMount() {
        const { navigator } = this.props;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() => {
                navigator.resetTo({
                    component: Main,
                    name: 'Main'
                });
            });
        }, 5000);
    }

    immediateDidMount(){
        const { navigator } = this.props;
        navigator.resetTo({
            component: Main,
            name: 'Main'
        });
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
        this.interval && clearInterval(this.interval);
    }

    render() {
        return (
            <Image
                style={{ width: maxWidth, height: maxHeight }}
                source={require('../png/tiger.jpg')}
            >
                <TouchableOpacity
                    style={{marginTop:40,marginLeft:maxWidth-80,
                        backgroundColor:'lavender',width:60,height:20,
                        alignItems:'center',justifyContent:'center'}}
                    onPress={this.immediateDidMount}
                >
                    <Text>
                        {this.state.count} 跳过
                    </Text>
                </TouchableOpacity>

            </Image>
        );
    }
}
