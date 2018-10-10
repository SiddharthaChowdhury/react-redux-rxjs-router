import * as React from 'react';
import {connect} from "react-redux";
import {Action, Dispatch} from  "redux";
import {actionCheckIsLoggedIn} from "./actionAuth";

import IState from "../../config/IState";

interface ISignupState {
    status: boolean
}

interface ISignupDispatch {
    onLoadCheckLogin: () => Action<any>
}

interface ISignupProps extends ISignupState, ISignupDispatch {};

class _Auth extends React.PureComponent<ISignupProps> {
    public render (){
        const props = this.props;
        return (
            <div>
                <h4>Is logged in? : {props.status.toString()}</h4>
                <button onClick={props.onLoadCheckLogin}>Login please</button>
            </div>
        );
    }
}

const mapState = (state: IState) => ({
    status: state.authInfo.status
})

const mapDispatch = (dispatch: Dispatch) => ({
    onLoadCheckLogin: () => dispatch(actionCheckIsLoggedIn())
})

export default connect(mapState, mapDispatch)(_Auth);