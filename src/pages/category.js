import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Layout from '../components/layout';
import ApiManager from '../services/dataSource';
import Image from 'react-bootstrap/Image';
import history from '../services/history';
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            categoryName: '',
        };
    }

    componentWillMount() {
        console.log('category');
    }

    componentDidMount() {
        ApiManager.getInstance()
            .getBrachDetails({ branch_id: this.props.match.params.branch_id })
            .then((res) => {
                this.setState({
                    items: res.categories || [],
                    categoryName: res.name,
                });
                console.log(this.state);
            });
    }

    componentWillUpdate() {
        console.log('object');
    }
    componentWillUnmount() {}

    gotoSubcategory(item) {
        history.push('/');
        history.push(
            `category/${this.props.match.params.branch_id}/category-item/${item.name}`
        );
    }

    render() {
        const { items, categoryName } = this.state;
        return (
            <Layout>
                <div className='category-page-container'>
                    {items.map((item, index) => {
                        return (
                            <div className='category-card' key={index}>
                                <div>
                                    <Image
                                        src={`${window.location.origin}/category/${item?.image}`}
                                        key={index}
                                        fluid
                                    />
                                </div>
                                <div
                                    className='item-name'
                                    onClick={(event) =>
                                        this.gotoSubcategory(item)
                                    }
                                >
                                    <span>{item?.name}</span>
                                    <span>
                                        <i className='fa fa-caret-right'></i>
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </Layout>
        );
    }
}

Category.propTypes = {};

export default Category;
