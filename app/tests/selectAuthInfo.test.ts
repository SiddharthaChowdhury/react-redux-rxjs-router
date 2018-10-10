import mockState from "./mockState";
import {selectAuthInfo} from "../features/auth/selectAuthInfo";

test ("Testing example selector 'selectAuthInfo'", () => {
    expect(selectAuthInfo(mockState)).toBe(false)    
});