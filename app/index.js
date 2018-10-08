import React from "react";
import ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {Store} from "./config/store";

import Signup from "./features/signup";

ReactDOM.render(
    <Provider store={Store}>
        <Signup/>
    </Provider>,
    document.getElementById("root")
)