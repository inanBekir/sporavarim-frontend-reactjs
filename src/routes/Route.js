import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function RouteWrapper({
    component: Component,
    isPrivate,
    ...rest
}){
    let signed = false;
    const userToken = localStorage.getItem('token');
    if (userToken !== null) {
        signed = true
        if (!isPrivate && signed) {
            return <Redirect to="/home" />
        }
    }else{
        if (isPrivate && !signed) {
            return <Redirect to="/" />
        }
    }

    return <Route {...rest} component={Component} />;
}

RouteWrapper.PropsTypes = {
    isPrivate: PropTypes.bool,
    component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired
}

RouteWrapper.defaultProps = {
    isPrivate: false
}