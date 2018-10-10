import * as React from 'react';
import * as ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {Store} from "../config/store";

import Auth from "../features/auth";

import "./styles/index.min.css";

ReactDOM.render(
    <Provider store={Store}>
        <Auth/>
    </Provider>,
    document.getElementById("root")
)