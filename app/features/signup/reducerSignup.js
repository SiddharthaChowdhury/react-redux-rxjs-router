import {TypeActionHome} from "./actionSignup";

const initialState = {
    isLoggedIn: false,
    signupData: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case TypeActionHome.setLogin:
            return Object.assign(
                {},
                state,
                {isLoggedIn: action.status}
            )
        
        default: 
            return state;
                
    }
}