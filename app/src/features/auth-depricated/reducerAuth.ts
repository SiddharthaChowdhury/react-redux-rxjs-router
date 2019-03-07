import {TypeActionAuth, IActionAuth} from "./actionAuth";
import IAuthInfo from "./IAuthInfo";

const initialState: IAuthInfo = {
    status: false,
}

export default (state:IAuthInfo = initialState, action: IActionAuth) => {
    switch(action.type) {
        case TypeActionAuth.setLogin:
            return Object.assign(
                {},
                state,
                {status: action.status}
            )
        
        default: 
            return state;
                
    }
}