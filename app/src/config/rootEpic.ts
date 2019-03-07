import {combineEpics} from 'redux-observable';
import {Action} from "redux";
import IState from "./IState";
import {epicCheckLogin} from "../components/auth/epicAuth";

// List all the epics here
export default combineEpics<Action<any>, Action<any>, IState>(
    epicCheckLogin,
);
