import { Meteor } from 'meteor/meteor';
import {Players } from '../imports/api/players';

Meteor.startup(() => {
  // code to run on server at startup

  // This is the "unsecure way"
  Meteor.publish('players', function() {
    return Players.find({});
  })
});
