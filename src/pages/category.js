import React, { Component } from 'react';
import ApiManager from '../services/dataSource';
import Image from 'react-bootstrap/Image';
import { Link, withRouter } from 'react-router-dom';
class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            categoryName: '',
        };
    }

    componentWillMount() {}

    componentDidMount() {
        this.getBranchDetails(
            this.props.match.params.dealers_id,
            this.props.match.params.branch_id
        );
    }

    getBranchDetails(dealers_id, branch_id) {
        ApiManager.getInstance()
            .getBrachDetails({
                dealers_id: dealers_id,
                branch_id: branch_id,
            })
            .then((res) => {
                this.setState({
                    items: res.categories || [],
                    categoryName: res.name,
                });
            });
    }

    componentWillUnmount() {}

    shouldComponentUpdate(nextProps) {
        if (
            this.props.match.params.branch_id !==
            nextProps.match.params.branch_id
        ) {
            this.getBranchDetails(
                nextProps.match.params.dealers_id,
                nextProps.match.params.branch_id
            );
        }
        return true;
    }

    render() {
        const { items, categoryName } = this.state;
        return (
            <div className='category-page-container'>
                <div className='breadcrumbs'>
                    <span>Equipment Catalog</span>
                </div>
                <div className='category-list'>
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
                                <Link
                                    className='item-name'
                                    to={`/${this.props.match.params.dealers_id}/category/${this.props.match.params.branch_id}/category-item/${item.name}`}
                                >
                                    <span>{item?.name}</span>
                                    <span>
                                        <i className='fa fa-caret-right'></i>
                                    </span>
                                </Link>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

Category.propTypes = {};

export default withRouter(Category);
