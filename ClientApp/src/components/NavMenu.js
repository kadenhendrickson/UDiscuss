import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';
import './css/Design.css'
import './css/LightTheme.css';
import UtahU from './Images/UtahU.png';

export class NavMenu extends Component {

    static displayName = NavMenu.name;

    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);

        this.toggle = this.toggle.bind(this);


        this.state = {
            collapsed: true,

            // added for dropdown 
            dropdownOpen: false

        };
    }

    /**
     * Added for UDiscuss dropdown menu
     * 
     * */
    toggle() {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }

    render() {
        return (
            <header>
                <Navbar className="underline-nav secondary-color navbar-expand-sm navbar-toggleable-sm ng-white box-shadow mb-3" light>
                    <Container>
                        <NavbarBrand tag={Link} to="/"><img style={{ 'margin-bottom': '5px', 'margin-right': '3px', width: "20px", height: '20px' }} src={UtahU} />Discuss</NavbarBrand>
                        <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!this.state.collapsed} navbar>
                            <ul className="navbar-nav flex-grow">

                                {/*         FOR REFERENCE -- this is what it had before!
                                 *         
                                 *         
                                <NavItem>
                                    <NavLink tag={Link} className="text-color" to="/">Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-color" to="/counter">Counter</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-color" to="/fetch-data">Fetch data</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-color" to="/settings">Settings</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink tag={Link} className="text-color" to="/help">Help</NavLink>
                                </NavItem>*/}

                                    <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        {/* TODO - fix this to work with all colors for light mode and dark mode -- className wasn't working for it... */}
                                        <DropdownToggle style={{ color: 'black', 'background-color': '#CECECE', border: 'none' }} caret>
                                            Hello, Jane Doe
                                        </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem tag='a' href='/'>Discussions</DropdownItem>
                                            <DropdownItem tag='a' href='/settings'>Settings</DropdownItem>
                                            <DropdownItem tag='a' href='/help'>Help</DropdownItem>
                                            <DropdownItem tag='a' href='/'>Logout</DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>

                            </ul>
                        </Collapse>
                    </Container>
                </Navbar>
            </header>
        );
    }
}
