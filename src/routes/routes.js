import React from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import TODOList from '../components/pages/HomeScreen/homeScreen';
import About from '../components/pages/About/about';
import NotFound from '../components/pages/notFound/notFound';

export const routes = <Router>
    <Switch>
        <Route exact path="/" component={TODOList} />
        <Route path="/about" component={About} />
        <Route component={NotFound} />
    </Switch>
</Router>;