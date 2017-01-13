import React, { Component, PropTypes } from 'react';
// import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar     from 'material-ui/AppBar';
import { List }   from 'material-ui/List'
import Divider from 'material-ui/Divider'

import { createContainer } from 'meteor/react-meteor-data';
import { Link } from 'react-router';
// database collection
import { Players }      from '../api/players';
import { BookingItems } from '../api/items';

import TeamList from './Team-list';
import TeamStats from './Team-stats';
import Player from './Player';


export class AppComponent extends React.Component {

  constructor(props) {
    super(props);

    // setting up the state
    this.state = { players: [] };
  }

  // component lifecycle callbacks
/*  componentWillMount() {
      this.setState({
        players: [
          {
            _id: 1,
            name: "Peter Andersson",
            ballManipulation: 3,
            kickingAbilities: 3,
            passingAbilities: 3,
            duelTackling: 1,
            fieldCoverage: 2,
            blockingAbilities: 1,
            gameStrategy: 3,
            playmakingRisks: 2
          },
          {
            _id: 2,
            name: "David Andersson",
            ballManipulation: 2,
            kickingAbilities: 2,
            passingAbilities: 3,
            duelTackling: 2,
            fieldCoverage: 3,
            blockingAbilities: 3,
            gameStrategy: 2,
            playmakingRisks: 2
          },
          {
            _id: 3,
            name: "Marcel Proteau",
            ballManipulation: 1,
            kickingAbilities: 1,
            passingAbilities: 1,
            duelTackling: 1,
            fieldCoverage: 2,
            blockingAbilities: 1,
            gameStrategy: 2,
            playmakingRisks: 2
          }

        ]
      });
  }
*/

/*
  EXPLAIN
*/
/*
  renderPlayers() {
    // Explain closure syntax here....
    return this.state.players.map( (player) => {
        return <TeamList key={player._id} player={player} />
      }
    );
  }
*/
renderPlayers() {
  // explain Props!
  // Explain closure syntax here....
  return this.props.players.map( (player) => {
      return <TeamList key={player._id} player={player} />
    }
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
            <div className="col s12 m7"><Player /></div>
            <div className="col s12 m5 ">
              <h2>Team List</h2><Link to="/new" className="wawes-effect waves-light btn">Add player</Link>
              <Divider />
              <List>
                {this.renderPlayers()}
              </List>
              <Divider />
            </div>
            <div className="col s12 m5 "><TeamStats /></div>
          </div>

        </div>
      </MuiThemeProvider>
    );
  }
}

// Magic again....
AppComponent.propTypes = {
  players: PropTypes.array.isRequired
}

// Magic Magic Magic...
export default createContainer( () => {
    console.log("createContainer() called....");
    Meteor.subscribe('players');
    return {
      players:  Players.find({}, {sort: {name: 1}}).fetch(),
    }
}, AppComponent);
