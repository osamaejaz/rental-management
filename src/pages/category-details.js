import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ApiManager from '../services/dataSource';

class CategoryDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemDetails: '',
        };
    }

    componentDidMount() {
        console.log(decodeURI(this.props.match.params.name));
        ApiManager.getInstance()
            .getSubcategories({
                branch_id: this.props.match.params.branch_id,
                category_name: this.props.match.params.name,
            })
            .then((res) => {
                this.setState({
                    itemDetails: res,
                });
                console.log(this.state);
            });
    }

    componentWillUnmount() {}

    render() {
        const { itemDetails } = this.state;
        return (
            <div>
                <p>{itemDetails?.name}</p>
            </div>
        );
    }
}

CategoryDetails.propTypes = {};

export default CategoryDetails;
