import React, { useState, useEffect } from 'react';
import ApiManager from './services/dataSource';
import './App.scss';
import history from './services/history';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.css';
import './assets/style.scss';

import Landing from './pages/landing';
import Category from './pages/category';
import CategoryDetails from './pages/category-details';
import Layout from './components/layout';

function App() {
    const [locations, setLocation] = useState([]);

    useEffect(() => {
        ApiManager.getInstance()
            .getLocations()
            .then((res) => {
                setLocation(res.data.locations);
            });
    }, []);
    return (
        <Router history={history}>
            <Layout locations={locations}>
                <Switch>
                    <Route path='/' exact component={Landing} />
                    <Route
                        path='/:dealers_id/category/:branch_id'
                        component={Category}
                        exact
                    />
                    <Route
                        path='/:dealers_id/category/:branch_id/category-item/:name'
                        exact
                        component={CategoryDetails}
                    ></Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
