import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';


export default (
    <Switch>
        <Route path='/' exact component={ Home } />
        <Route path='/resume' exact component={ Resume } />
    </Switch>
)