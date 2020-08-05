import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import Landing from '../pages/landing';
import Category from '../pages/category';
import CategoryDetails from '../pages/category-details';
import Route from './routes';
import Layout from '../components/layout';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Landing} layout={Layout} />
            <Route
                path='/category/:branch_id'
                component={Category}
                exact
                layout={Layout}
            />
            <Route
                path='/category/:branch_id/category-item/:name'
                exact
                component={CategoryDetails}
                layout={Layout}
            ></Route>
        </Switch>
    );
}
