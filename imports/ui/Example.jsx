import React from 'react';
import {Table, TableHeader,TableRow,TableRowColumn,TableHeaderColumn, TableBody} from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar     from 'material-ui/AppBar';

export default class Example extends React.Component {

  getData() {
    return [
      {
        _id: 1,
        day: "MÅN 9/1",
        time: "08.00-09.00",
        activity: "ISVÅRD",
        team: "",
        comment: "",
        responsible: "Kommun"
      },
      {
        _id: 2,
        day: "",
        time: "10.00-11.00",
        activity: "Träning",
        team: "U11/U12",
        comment: "",
        responsible: "Kommun"
      },
      {
        _id: 3,
        day: "",
        time: "12.00-13.00",
        activity: "Träning",
        team: "A",
        comment: "",
        responsible: "Kommun"
      },
      {
        _id: 4,
        day: "",
        time: "13.00-14.00",
        activity: "Träning",
        team: "U16",
        comment: "",
        responsible: "Kommun"
      },
      {
        _id: 5,
        day: "",
        time: "15.00-15.50",
        activity: "Träning",
        team: "U14",
        comment: "",
        responsible: "Kommun"
      }
    ];
  }

  renderData() {
    return (
      this.getData().map(
        (item) => (
            <TableRow>
              <TableRowColumn>{item.day}</TableRowColumn>
              <TableRowColumn>{item.time}</TableRowColumn>
              <TableRowColumn>{item.activity}</TableRowColumn>
              <TableRowColumn>{item.team}</TableRowColumn>
              <TableRowColumn>{item.comment}</TableRowColumn>
              <TableRowColumn>{item.responsible}</TableRowColumn>
            </TableRow>
        )
      )
    );
  }

  render() {
    return (

      <MuiThemeProvider>
        <div className="container">
          <AppBar
            title="Soccer Application"
            iconClassNameRight="muidocs-icon-navigation-expand-more"/>

          <div className="row">
            <Table>

              <TableHeader displaySelectAll={false}>

                <TableRow>
                  <TableHeaderColumn>Dag</TableHeaderColumn>
                  <TableHeaderColumn>Tid</TableHeaderColumn>
                  <TableHeaderColumn>Match/Träning</TableHeaderColumn>
                  <TableHeaderColumn>Notering</TableHeaderColumn>
                  <TableHeaderColumn>Ismaskin</TableHeaderColumn>
                </TableRow>

              </TableHeader>

              <TableBody displayRowCheckbox={false}>

                { this.renderData() }

              </TableBody>

            </Table>

          </div>

        </div>
      </MuiThemeProvider>


    );
  }
}
