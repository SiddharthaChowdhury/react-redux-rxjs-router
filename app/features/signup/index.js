import React, {Component} from 'react';
import {connect} from 'react-redux';

import {actionCheckIsLoggedIn} from "./actionSignup";

class _Signup extends Component {
    render (){
        const props = this.props;
        console.log(props)
        return (
            <div>
                <h4>Status: {props.status.toString()}</h4>
                <button onClick={props.onLoadCheckLogin}>Login please</button>
            </div>
        );
    }
}

const mapState = (state) => ({
    status: state.reducerSignup.isLoggedIn
})

const mapDispatch = (dispatch) => ({
    onLoadCheckLogin: () => dispatch(actionCheckIsLoggedIn())
})

export default connect(mapState, mapDispatch)(_Signup);