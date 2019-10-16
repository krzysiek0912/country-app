import React from 'react';
import {Switch,  Route } from 'react-router-dom'
import Navigation from './presentational/navigation.component';

export default (
    <Switch> 
        <Route path='/' component={Navigation}>
        </Route>      
    </Switch> 
);