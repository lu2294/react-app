import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from '../pages';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
        </Switch>
    </HashRouter>
);


export default BasicRoute;