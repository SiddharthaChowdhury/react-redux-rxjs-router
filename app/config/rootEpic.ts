import { combineEpics } from 'redux-observable';
import { epicCheckLogin } from '../features/auth/epicAuth';

// List all the epics here
export default combineEpics(
    epicCheckLogin,
);