import * as React from "react";
import {shallow} from "enzyme";
import {LoginDOM} from "./Login";
import {spy} from "sinon";


describe("<LoginDOM /> Test", () => {

    const wrapper = shallow(<LoginDOM/>);

    it('Should have 2 input and 1 button', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.find('input').length).toEqual(2);
        expect(wrapper.find('button').length).toEqual(1);
    });

    it('Should test onclick on button: click simulate', () => {
        const onClickSpy = spy();
        wrapper.setProps({onLogin: onClickSpy});
        wrapper.find('button').first().simulate('click');
        expect(onClickSpy.calledOnce).toBe(true);
    });
});