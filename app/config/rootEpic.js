import { combineEpics } from 'redux-observable';
import { epicChecklogin } from '../features/signup/epicSignup';

// List all the epics here
export default combineEpics(
    epicChecklogin,
);