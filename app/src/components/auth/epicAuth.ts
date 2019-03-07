import {Epic, ofType} from "redux-observable";
import {Action} from "redux";
import {actionSetIsLoggedIn, TypeActionAuth} from "./actionAuth";
import IState from "../../config/IState";

import {switchMap} from 'rxjs/operators';
import {from, Observable} from "rxjs";

export const epicCheckLogin: Epic<Action, Action, IState> = (action$, state$): Observable<any> =>
    action$.pipe(
        ofType(TypeActionAuth.checkLogin),
        switchMap(
            () => {
                const actions: Action[] = [
                    actionSetIsLoggedIn(true),
                ];

                return from(actions);
            }
        )
    );
