import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../assets/_header.scss';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className='header-container'>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand>
                    <Link to='/' style={{ color: '#ffffff' }}>
                        Rental Management System
                    </Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav>
                        <NavDropdown
                            title='Select Location'
                            id='basic-nav-dropdown'
                        >
                            {props.locations.map((location, index) => {
                                return (
                                    <div
                                        key={location.name}
                                        className='dropdown-list-item'
                                    >
                                        {location?.name}
                                        <div className='dropdown-sub-menu'>
                                            {location.branches.map(
                                                (branch, index) => {
                                                    return (
                                                        <Link
                                                            key={index}
                                                            to={`/${location?.dealers_id}/category/${branch?.branch_id}`}
                                                        >
                                                            {branch?.name}
                                                        </Link>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                );
                            })}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
