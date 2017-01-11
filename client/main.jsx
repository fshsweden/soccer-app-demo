import React from 'react';
import {Meteor} from 'meteor/meteor';
import {render} from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';

import MainRouter from '../imports/ui/MainRouter.jsx';

injectTapEventPlugin();

Meteor.startup( () => {
  render(
    (
      <MainRouter/>
    ), document.getElementById('render-target')
  );
});
