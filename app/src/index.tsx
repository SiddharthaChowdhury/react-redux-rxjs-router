import * as React from 'react';
import * as ReactDOM from "react-dom";

import {Provider} from "react-redux";
import {Store} from "./config/store";

import Auth from "./features/auth-depricated";

// import "./index.scss";

ReactDOM.render(
    <Provider store={Store}>
        <Auth/>
    </Provider>,
    document.getElementById("root")
);