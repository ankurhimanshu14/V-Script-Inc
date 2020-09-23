import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from "./auth";

export default function PrivateRoute({ component: Component, ...other }){
    const isAuthenticated = useAuth();

    return (
        <Route
            { ...other }
            render = {(props) => 
                isAuthenticated ? (
                <Component { ...props} />
            ) : (
                <Redirect to = '/users/login' />
            )}
        />
    );
}