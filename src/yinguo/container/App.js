/**
 * Created by cw on 16/9/6.
 */
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as AvatarActions from '../action/Avatar';
import IOSUI from '../../component/Iosui';

function mapStateToProps(state) {
    return {
        avatar:state.avatar,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(AvatarActions,dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(IOSUI);

