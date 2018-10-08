import React, {Component} from 'react';
import {connect} from 'react-redux';

import isLoggedIn from "./actionSignup";

class _Signup extends Component {
    render (){
        const props = this.props;
        return (
            <div>
                <h4>Status: {props.status.toString()}</h4>
            </div>
        );
    }
}

const mapState = (state) => ({
    status: state.reducerSignup.isLoggedIn
})

const mapDispatch = (state) => ({

})

export default connect(mapState, mapDispatch)(_Signup);