import * as React from 'react';
import {Link} from "react-router-dom";

export const Landing = () => {
    return (
        <div>
            <h1>Landing Page</h1>
            <ul>
                <li><Link to={"/dashboard"}>Dashboard </Link> (protected path)</li>
                <li><Link to={"/login"}>Login</Link> (unprotected path)</li>
            </ul>
        </div>
    )
};