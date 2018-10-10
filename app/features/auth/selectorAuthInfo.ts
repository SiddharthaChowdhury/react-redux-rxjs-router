import IState from "../../config/IState";

export const selectorAuthInfo = (state: IState): boolean => {
    return state.authInfo.status;
}