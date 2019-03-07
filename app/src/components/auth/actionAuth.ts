import {Action} from "redux";

export const enum TypeActionAuth {
    RequestLogin = "AuthInfo > checkLogin",
    SetAuth = "AuthInfo > setLogin",
}

export interface IAuthLoginInfo {
    email: string;
    password: string;
}

export interface IActionAuth extends Action {
    status?: boolean;
    type: TypeActionAuth;
}

export interface IActionAuthLogin extends Action {
    loginInfo: IAuthLoginInfo;
    type: TypeActionAuth;
}

export const actionCheckIsLoggedIn = (loginInfo: IAuthLoginInfo): IActionAuthLogin => ({
    loginInfo,
    type: TypeActionAuth.RequestLogin
});

export const actionSetIsLoggedIn = (status: boolean): IActionAuth => ({
    status,
    type: TypeActionAuth.SetAuth
});