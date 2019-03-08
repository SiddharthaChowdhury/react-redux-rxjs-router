import * as React from "react";
import {Redirect, Route} from "react-router";

// @ts-ignore
export const RouteProtected = ({component: Component, isAuthenticated, ...rest}) => {
    return (
        <Route
            {...rest}
            render={(props) => isAuthenticated === true
                ? <Component {...props} />
                : <Redirect to={{pathname: '/login', state: {from: props.location}}}/>}
        />
    )
};