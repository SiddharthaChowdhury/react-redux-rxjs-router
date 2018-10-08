import {ofType} from "redux-observable";
import {actionSetIsLoggedIn, TypeActionHome} from "./actionSignup";

import {switchMap} from 'rxjs/operators';
import {from} from "rxjs";

export const epicChecklogin = ( action$, state$ ) => 
    action$.pipe(
        ofType(TypeActionHome.checkLogin),
        switchMap(
            () => {
                const actions = [
                    actionSetIsLoggedIn(true),
                ];

                return from(actions);
            }
        )
    );