import * as React from "react";
import {Redirect} from "react-router-dom";
import {Action, Dispatch} from "redux";
import {actionSetIsLoggedIn} from "../auth/actionAuth";
import {connect} from "react-redux";

interface ILogoutDispatch {
    onLogout: () => Action;
}

const _Logout = (props: ILogoutDispatch) => {
    props.onLogout();
    return <Redirect to={"/"}/>
};

const mapDispatch = (dispatch: Dispatch): ILogoutDispatch => ({
    onLogout: () => dispatch(actionSetIsLoggedIn(false))
});

export const Logout = connect(
    undefined,
    mapDispatch
)(_Logout);