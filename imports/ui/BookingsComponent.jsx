// jshint esversion:6

import React, { Component, PropTypes } from "react";
// import {Table, TableHeader,TableRow,TableRowColumn,TableHeaderColumn, TableBody} from "material-ui/Table";
import { Table, Navbar, NavDropdown, Nav, NavItem, ButtonGroup, DropdownButton, MenuItem, Button } from 'react-bootstrap';

import { createContainer }  from "meteor/react-meteor-data";
import { BookingItems }     from "../api/items";
import { Menu }  from "./Menu.jsx";

const options = {
    exportCSVText: 'my_export',
    insertText: 'my_insert',
    deleteText: 'my_delete',
    saveText: 'my_save',
    closeText: 'my_close'
};

const selectOptions = {
    // mode:               Const.ROW_SELECT_SINGLE,
    // customComponent:    PropTypes.func,
    bgColor: "cyan",
    // selected: PropTypes.array,
    // onSelect: PropTypes.func,
    // onSelectAll: PropTypes.func,
    // clickToSelect: {true},
    // hideSelectColumn: {false},
    // clickToSelectAndEditCell: {true},
    // clickToExpand: PropTypes.bool,
    // showOnlySelected: {false},
    //unselectable: PropTypes.array
};


export class BookingsComponent extends React.Component {

    constructor(props) {
        super(props);
        let week_num = 0;
    }

    getData2() {
        console.log("We have " + this.props.items.length + " items...");
        return this.props.items;
    }

  renderData() {

    console.log("renderData()");

    let old = "";
    let counter = 1000;
      let key = "";
      let lbl = "";

    return (

      // Return a new array

      this.getData2().map(
        (item) => {

            key = item.date_str+"/"+item.from;
            if (old != item.date_str) {
                lbl = item.date_str;
            }
            else {
                lbl = "";
            }
            old = item.date_str;

            return  <tr key={key} >
                      <td></td>
                      <td>{lbl}       </td>
                      <td>{item.from}-{item.to} </td>
                      <td>{item.itemtype}       </td>
                      <td>{item.booker}         </td>
                      <td>{item.note}           </td>
                      <td>{item.maintenance}    </td>
                       <td><a href="/edit">edit</a></td>
                    </tr>

        }
      )
    );
  }

  handleSelect(selectedKey) {
      alert('selected ' + selectedKey);
  }

  render() {

      const selectRow = {
          mode: 'radio'  // single select
      };

    console.log("render()");
    return (

            <div className="container">

                <Menu />

                <ButtonGroup>
                    <DropdownButton id="1" bsStyle="success" title="Alla lag">
                        <MenuItem key="1">A</MenuItem>
                        <MenuItem key="2">J20</MenuItem>
                        <MenuItem key="3">J18</MenuItem>
                        <MenuItem key="4">U16</MenuItem>
                        <MenuItem key="5">U15</MenuItem>
                        <MenuItem key="6">U14</MenuItem>
                        <MenuItem key="7">U13</MenuItem>
                        <MenuItem key="8">U12</MenuItem>
                        <MenuItem key="9">U11</MenuItem>
                        <MenuItem key="10">U10</MenuItem>
                        <MenuItem key="11">U9</MenuItem>
                    </DropdownButton>
                    <Button bsStyle="info">Middle</Button>
                    <Button bsStyle="info">Right</Button>
                </ButtonGroup>

                <Table striped bordered condensed hover responsive>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Activity</th>
                        <th>Team</th>
                        <th>Note</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.renderData()}
                    </tbody>
                </Table>

          </div>
    );
  }
}

// Magic again....
BookingsComponent.propTypes = {
    items: PropTypes.array.isRequired
}

// Magic Magic Magic...
export default BookingsContainer = createContainer( ({ params: { weeknum_or_date } }) => {
    console.log("createContainer() called....");
    Meteor.subscribe('items');
    console.log("Looking for " + weeknum_or_date);
    return {
        items:  BookingItems.find({week_str: weeknum_or_date}).fetch(),
    }
}, BookingsComponent);
