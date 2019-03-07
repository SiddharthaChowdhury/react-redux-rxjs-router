import IState from "../../config/IState";

export const selectAuthInfo = (state: IState): boolean => {
    return state.authInfo.status;
}