import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import '../assets/_header.scss';
import { Link } from 'react-router-dom';

export default function Header(props) {
    return (
        <header className='header-container'>
            <Navbar bg='dark' variant='dark'>
                <Navbar.Brand>
                    <Link to='/'>Rental Management System</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <NavDropdown
                            title='Select Location'
                            id='basic-nav-dropdown'
                        >
                            {props.locations.map((location, index) => {
                                return (
                                    <NavDropdown.Item key={location.name}>
                                        {location?.name}
                                        <div className='dropdown-sub-menu'>
                                            {location.branches.map((branch) => {
                                                return (
                                                    <div
                                                        key={branch.name}
                                                        onClick={() =>
                                                            props.handleSelection(
                                                                branch
                                                            )
                                                        }
                                                    >
                                                        {branch?.name}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </NavDropdown.Item>
                                );
                            })}
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
}
