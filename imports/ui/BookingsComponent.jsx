// jshint esversion:6

import React, { Component, PropTypes } from "react";
// import {Table, TableHeader,TableRow,TableRowColumn,TableHeaderColumn, TableBody} from "material-ui/Table";
import { ButtonGroup, DropdownButton, MenuItem, Button } from 'react-bootstrap';
import {Const, BootstrapTable, TableHeaderColumn} from "react-bootstrap-table";

import { createContainer }  from "meteor/react-meteor-data";
import { BookingItems }     from "../api/items";

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
                      <td>{"YYYY-MM-DD"}        </td>
                      <td>{item.from}-{item.to} </td>
                      <td>{item.itemtype}       </td>
                      <td>{item.booker}         </td>
                      <td>{item.note}           </td>
                      <td>{item.maintenance}    </td>
                    </tr>

        }
      )
    );
  }

  render() {

      const selectRow = {
          mode: 'radio'  // single select
      };

    console.log("render()");
    return (

            <div className="container">

                <ButtonGroup>
                    <DropdownButton id="1" bsStyle="success" title="Dropdown">
                        <MenuItem key="1">Dropdown link</MenuItem>
                        <MenuItem key="2">Dropdown link</MenuItem>
                    </DropdownButton>
                    <Button bsStyle="info">Middle</Button>
                    <Button bsStyle="info">Right</Button>
                </ButtonGroup>

              <BootstrapTable data={this.props.items} selectRow={selectOptions}>
                  <TableHeaderColumn isKey dataField='_id'>ID</TableHeaderColumn>
                  <TableHeaderColumn dataField='date_str'>Date</TableHeaderColumn>
                  <TableHeaderColumn dataField='from'>From</TableHeaderColumn>
                  <TableHeaderColumn dataField='to'>To</TableHeaderColumn>
                  <TableHeaderColumn dataField='booker'>Team</TableHeaderColumn>
                  <TableHeaderColumn dataField='note' width="250">Note</TableHeaderColumn>
                  <TableHeaderColumn dataField='maintenance'>Maintenance</TableHeaderColumn>
              </BootstrapTable>


              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                  </tr>
                </tbody>
              </table>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Event</th>
                </tr>
              </thead>
              <tbody>
                {this.renderData()}
              </tbody>

            </table>

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
