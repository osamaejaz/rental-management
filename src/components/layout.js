import React, { Component } from 'react';
import Header from './header';
import { withRouter } from 'react-router-dom';
import history from '../services/history';
import '../assets/layout.scss';

class Layout extends Component {
    onItemSelection = (data) => {
        // const { history } = this.props;
        history.push(`category/${data.branch_id}`);
    };

    render() {
        const { locations = [], children } = this.props;
        return (
            <div>
                <div className='layout-container'>
                    <Header
                        locations={locations}
                        handleSelection={(data) => this.onItemSelection(data)}
                    ></Header>

                    <div className='main-content'>
                        <main>{children}</main>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(Layout);
