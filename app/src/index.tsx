import * as React from 'react';
import * as ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {Store} from "./config/store";

import "./index.scss";
import {Auth} from "./components/auth/Auth";

ReactDOM.render(
    <Provider store={Store}>
        <Auth/>
    </Provider>,
    document.getElementById("root")
);