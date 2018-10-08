import {TypeActionHome} from "./actionSignup";

const initialState = {
    isLoggedIn: false,
    signupData: {}
}

export default (state = initialState, action) => {
    switch(action.type) {
        case TypeActionHome.checkLogin:
            return Object.assign(
                {},
                state,
                {isLoggedIn: action.isLoggedIn}
            )
        
        default: 
            return state;
                
    }
}