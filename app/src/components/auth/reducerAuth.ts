import {IActionAuth, TypeActionAuth} from "./actionAuth";
import IAuthInfo from "./IAuthInfo";

const initialState: IAuthInfo = {
    status: false,
};

export default (state: IAuthInfo = initialState, action: IActionAuth) => {
    switch (action.type) {
        case TypeActionAuth.SetAuth:
            return Object.assign(
                {},
                state,
                {status: action.status}
            );

        default:
            return state;

    }
}