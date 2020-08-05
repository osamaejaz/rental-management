import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import ApiManager from '../services/dataSource';
import history from '../services/history';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
        };
    }

    componentDidMount() {
        ApiManager.getInstance()
            .getLocations()
            .then((res) => {
                this.setState({
                    locations: res.data.locations,
                });
            });
    }

    componentWillUnmount() {}

    render() {
        return (
            <Layout locations={this.state.locations}>
                <div className='landing-page'>
                    <span>Welcome to</span>
                    <span>Rental Management System</span>
                    <span>Please Select Location</span>
                </div>
            </Layout>
        );
    }
}

Landing.propTypes = {};

export default Landing;
