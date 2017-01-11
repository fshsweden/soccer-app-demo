import React from 'react';
// import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import {Card, CardMedia, CardTitle, CardActions, CardHeader, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import { blue200, blue900 } from 'material-ui/styles/colors';


const styles = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin: 12
  },
}

export default class Player extends React.Component {
  render() {
    return (
      <Card>

        <CardMedia overlay={<CardTitle title="Peter Andersson" subtitle="Offense:12 - Defense: 8" />}>

          <img src="player.jpg" />

        </CardMedia>

        <CardText>


          <div style={styles.wrapper}>

            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Ball manipulation
            </Chip>

            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Ball manipulation
            </Chip>

            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Ball manipulation
            </Chip>

            <Chip
              backgroundColor={blue200}
              style={styles.chip}
            >
              <Avatar size={32} color={blue200} backgroundColor={blue900}>
                2
              </Avatar>
              Ball manipulation
            </Chip>
          </div>
        </CardText>

        </Card>
    );
  }
}
