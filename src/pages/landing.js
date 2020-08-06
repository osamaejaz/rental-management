import React, { Component } from 'react';

class Landing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            locations: [],
        };
    }

    componentDidMount() {}

    componentWillUnmount() {}

    render() {
        return (
            <div className='landing-page'>
                <span>Welcome to</span>
                <span>Rental Management System</span>
                <span>Please Select Location</span>
            </div>
        );
    }
}

Landing.propTypes = {};

export default Landing;
