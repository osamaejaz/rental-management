import React, { Component } from 'react';
import ApiManager from '../services/dataSource';
import Image from 'react-bootstrap/Image';
import { Link } from 'react-router-dom';

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
                dealers_id: this.props.match.params.dealers_id,
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
        const {
            itemDetails: { subcategories = [] },
            itemDetails,
        } = this.state;
        return (
            <div className='category-page-container'>
                <div className='breadcrumbs'>
                    <span>Equipment Catalog</span>&nbsp; / &nbsp;
                    <span>
                        <Link
                            to={`/${this.props.match.params.dealers_id}/category/${this.props.match.params.branch_id}`}
                            style={{ color: '#333' }}
                        >
                            {itemDetails?.name}
                        </Link>
                    </span>
                </div>
                <div className='category-list'>
                    {subcategories.map((item, index) => {
                        return (
                            <div className='category-card' key={index}>
                                <div>
                                    <Image
                                        src={`${window.location.origin}/category/subcategory/${item?.image}`}
                                        key={index}
                                        fluid
                                    />
                                </div>
                                <div className='item-name'>
                                    <span>{item?.name}</span>
                                    <span>
                                        <i className='fa fa-caret-right'></i>
                                    </span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

CategoryDetails.propTypes = {};

export default CategoryDetails;
