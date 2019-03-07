import {combineReducers} from "redux";
import IState from "./IState";
import reducerAuth from "../components/auth/reducerAuth";

export default combineReducers <IState>({
    authInfo: reducerAuth
})