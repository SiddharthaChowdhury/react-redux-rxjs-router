import * as React from "react";
import {useState} from "react";
import {Action, Dispatch} from "redux";
import {actionCheckIsLoggedIn, IAuthLoginInfo} from "../auth/actionAuth";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

interface ILoginDispatch {
    onLogin: (loginInfo: IAuthLoginInfo) => Action<any>
}

export const LoginDOM = (props: any) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div>
            <h1>Login</h1>
            <div>
                <input onChange={(e) => setEmail(e.target.value)} type="text" name="email"/>
            </div>
            <br/>
            <div>
                <input onChange={(e) => setPassword(e.target.value)} type="password" name="password"/>
            </div>
            <br/>
            <button onClick={() => props.onLogin({email, password})}>
                Login
            </button>
            <ul>
                <li><Link to={"/dashboard"}>Dashboard</Link> (Protected)</li>
                <li><Link to={"/"}>Landing</Link> (Public)</li>
            </ul>
        </div>
    )
};

const mapDispatch = (dispatch: Dispatch): ILoginDispatch => ({
    onLogin: (loginInfo: IAuthLoginInfo) => dispatch(actionCheckIsLoggedIn(loginInfo))
});

export const Login = connect(undefined, mapDispatch)(LoginDOM);