import {combineReducers} from "redux";
import reducerAuth from "../features/auth/reducerAuth";
import IState from "./IState";

export default combineReducers <IState>({
    authInfo: reducerAuth
})