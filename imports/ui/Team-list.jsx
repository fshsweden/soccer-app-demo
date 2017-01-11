import React from 'react';
// import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import { ListItem } from 'material-ui/List';

// Todo: rename TeamList to PlayerListItem

export default class TeamList extends React.Component {
  render() {
    return (
      <ListItem
        primaryText={this.props.player.name}
        leftAvatar={<Avatar src="player.jpg" />}
      />
    );
  }
}
