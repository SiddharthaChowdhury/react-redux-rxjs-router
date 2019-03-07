import mockState from "../../../_mocks/mockState";
import {selectAuthInfo} from "../selectAuthInfo";

describe("Testing example selector 'selectAuthInfo'", () => {
    it ("Expect FALSE as default", () => {
        expect(selectAuthInfo(mockState)).toBe(false)    
    });
});