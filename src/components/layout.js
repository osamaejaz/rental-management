import React, { Component } from 'react';
import Header from './header';
import '../assets/layout.scss';

class Layout extends Component {
    render() {
        const { locations = [], children } = this.props;
        return (
            <>
                <div>
                    <div className='layout-container'>
                        <Header locations={locations}></Header>

                        <div className='main-content'>
                            <main>{children}</main>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Layout;
