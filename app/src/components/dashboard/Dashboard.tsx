import * as React from 'react';
import {Link} from "react-router-dom";

export const Dashboard = () => {

    return (
        <div>
            <h1>Dashboards</h1>
            <Link to={"/logout"}>Logout</Link>
            <hr/>
            <ul>
                <li><b>Note: </b>Reload will reset the store and auth details will be lost</li>
                <li>Use JWT token and store it in "localstorage" for persistence</li>
                <li>Check and verify the token each time app starts</li>
            </ul>
        </div>
    )
};