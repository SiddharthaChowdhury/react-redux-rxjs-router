import {combineEpics} from 'redux-observable';
import {epicCheckLogin} from '../features/auth-depricated/epicAuth';
import {Action} from "redux";
import IState from "./IState";

// List all the epics here
export default combineEpics<Action<any>, Action<any>, IState>(
    epicCheckLogin,
);
