/**
 * Created by cw on 16/7/28.
 */
import {bindActionCreators} from 'redux';

// connect 组件主要为 React 组件提供 store 中的部分 state 数据 及 dispatch 方法，
// 这样 React 组件就可以通过 dispatch 来更新全局 state。在 React 组件中，如果你希望让组件通过调用函数来更新 state，
// 可以通过使用 const actions = bindActionCreators(FilmActions, dispatch); 将 actions 和 dispatch 揉在一起，
// 成为具备操作 store.state 的 actions。最终将 actions 和 state（state.films）以 props 形式传入子组件中
import {connect} from 'react-redux';
import Counter from '../component/counter';
import * as CounterActions from '../actions/counter';

function mapStateToProps(state) {
    return {
        counter:state.counter
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions,dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);


