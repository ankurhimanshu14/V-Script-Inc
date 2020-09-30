import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({component: Component, ...rest}) => {
    return (
        <Route {...rest} render={props => (
            document.cookie ?
                <Component {...props} />
            : <Redirect to="/" />
        )} />
    );
};

export default PrivateRoutes;