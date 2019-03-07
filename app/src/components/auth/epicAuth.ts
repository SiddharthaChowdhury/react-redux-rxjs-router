import {Epic, ofType} from "redux-observable";
import {Action} from "redux";
import {actionSetIsLoggedIn, IActionAuthLogin, TypeActionAuth} from "./actionAuth";
import IState from "../../config/IState";

import {switchMap} from 'rxjs/operators';
import {from, Observable} from "rxjs";

export const epicCheckLogin: Epic<Action, Action, IState> = (action$, state$): Observable<any> =>
    action$.pipe(
        ofType(TypeActionAuth.RequestLogin),
        switchMap(
            (action: IActionAuthLogin) => {
                const state: IState = state$.value;
                console.log("EPIC: Current state before login: ", state);

                const {loginInfo: {email, password}} = action;
                console.log(`EPIC: Email: "${email}" and Password "${password}" yet to be handled`);

                const actions: Action[] = [
                    actionSetIsLoggedIn(true),
                ];

                return from(actions);
            }
        )
    );
