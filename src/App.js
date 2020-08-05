import React from 'react';
import './App.scss';
import history from './services/history';

import { Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './assets/style.scss';

import Landing from './pages/landing';
import Category from './pages/category';
import CategoryDetails from './pages/category-details';

const App = () => (
    <Router history={history}>
        <Switch>
            <Route path='/' exact component={Landing} />
            <Route path='/category/:branch_id' component={Category} exact />
            <Route
                path='/category/:branch_id/category-item/:name'
                exact
                component={CategoryDetails}
            ></Route>
        </Switch>
    </Router>
);

export default App;
