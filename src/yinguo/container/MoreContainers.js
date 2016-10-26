/**
 * Created by cw on 16/9/7.
 */
import React,{Component} from 'react';
import {connect} from 'react-redux';
import More from '../more/More';

class MoreContainers extends Component{
    render(){
        return(
            <More {...this.props}/>
        );
    }
}

export default connect((state)=>{
    const {More} = state;
    return{
        More
    }

})(MoreContainers);