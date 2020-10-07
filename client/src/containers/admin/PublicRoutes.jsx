import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoutes = ({component: Component, restricted, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            document.cookie && restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoutes;