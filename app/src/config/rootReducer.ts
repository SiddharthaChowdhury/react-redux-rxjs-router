import {combineReducers} from "redux";
import reducerAuth from "../features/auth-depricated/reducerAuth";
import IState from "./IState";

export default combineReducers <IState>({
    authInfo: reducerAuth
})