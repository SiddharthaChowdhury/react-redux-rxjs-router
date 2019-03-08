import * as React from "react";
import {Redirect, Route, Switch} from "react-router";
import {BrowserRouter as Router} from "react-router-dom";
import {Login} from "../login/Login";
import {Dashboard} from "../dashboard/Dashboard";
import {RouteProtected} from "./RouteProtected";
import {Landing} from "../landing/Landing";
import IState from "../../config/IState";
import {selectAuthInfo} from "./selectAuthInfo";
import {connect} from "react-redux";
import {Logout} from "../logout/Logout";

export interface IAuthState {
    isAuthenticated: boolean;
}

export class _Auth extends React.PureComponent<IAuthState> {
    public render() {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={() => {
                        if (this.props.isAuthenticated) {
                            return <Redirect to={'/dashboard'}/>
                        }
                        return <Landing/>
                    }}/>
                    <Route path='/login' render={() => {
                        if (this.props.isAuthenticated) {
                            return <Redirect to={'/'}/>
                        }
                        return <Login/>
                    }}/>
                    <Route path={"/logout"} render={() => <Logout/>}/>

                    <RouteProtected isAuthenticated={this.props.isAuthenticated} path='/dashboard'
                                    component={Dashboard}/>
                </Switch>
            </Router>
        )
    }
}

const mapState = (state: IState): IAuthState => ({
    isAuthenticated: selectAuthInfo(state),
});

export const Auth = connect(
    mapState,
    undefined
)(_Auth);