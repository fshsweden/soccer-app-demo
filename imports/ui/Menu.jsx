// jshint esversion:6

import React, { Component, PropTypes } from "react";
// import {Table, TableHeader,TableRow,TableRowColumn,TableHeaderColumn, TableBody} from "material-ui/Table";
import { Table, Navbar, NavDropdown, Nav, NavItem, ButtonGroup, DropdownButton, MenuItem, Button } from 'react-bootstrap';

export class Menu extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div className="container">

                <Navbar inverse collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="#">Istids-schema Valbo HC</a>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav pullRight>
                            <NavItem eventKey={1} href="#">Link Right</NavItem>
                            <NavItem eventKey={2} href="#">Link Right</NavItem>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>

        );
    }
}
