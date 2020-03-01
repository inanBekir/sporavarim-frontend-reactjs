import React from 'react';
import {Switch} from 'react-router-dom';
import Route from "./Route";

import {Login} from '../auth/login'
import {index} from '../dashboard/index';

export default function Routes(){
    return(
        <Switch>
                <Route path="/" exact component={Login}/>
                
                <Route path="/home" component={index} isPrivate/>
                <Route component={Login} />
        </Switch>
    );
}