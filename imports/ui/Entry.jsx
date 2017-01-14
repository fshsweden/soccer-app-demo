// jshint esversion:6

import React, { Component, PropTypes } from "react";
import { Form, FormGroup, FormControl, Col, ControlLabel, Checkbox, Table, Navbar, NavDropdown, Nav, NavItem, ButtonGroup, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import { Menu }  from "./Menu.jsx";

export default class Entry extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return (

            <div>

            <Menu />

            <div className="container">


                <Form horizontal>
                    <FormGroup controlId="formDate">
                        {/*<Col componentClass={ControlLabel} sm={2}>
                            Email
                        </Col>*/}
                        <Col xs={10} md={4}>
                            <FormControl type="text" placeholder="Date" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formTime">
                        {/*<Col componentClass={ControlLabel} sm={2}>
                            Password
                        </Col>*/}
                        <Col xs={10} md={4}>
                            <FormControl type="text" placeholder="Time" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formTeam">
                        {/*<Col componentClass={ControlLabel} sm={2}>
                         Password
                         </Col>*/}
                        <Col xs={10} md={4}>
                            <FormControl type="text" placeholder="Team" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formActivity">
                        {/*<Col componentClass={ControlLabel} sm={2}>
                         Password
                         </Col>*/}
                        <Col xs={10} md={4}>
                            <FormControl type="text" placeholder="Activity" />
                        </Col>
                    </FormGroup>

                    <FormGroup controlId="formMaintenance">
                        {/*<Col componentClass={ControlLabel} sm={2}>
                         Password
                         </Col>*/}
                        <Col xs={10} md={4}>
                            <FormControl type="text" placeholder="Maintenance" />
                        </Col>
                    </FormGroup>


                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Checkbox>Remember me</Checkbox>
                        </Col>
                    </FormGroup>

                    <FormGroup>
                        <Col smOffset={2} sm={10}>
                            <Button type="submit">
                                Sign in
                            </Button>
                        </Col>
                    </FormGroup>
                </Form>

            </div>
            </div>
        );
    }
}

