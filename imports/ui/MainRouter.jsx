
import React from 'react';
import { Route, Router, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import BookingsComponent    from './BookingsComponent.jsx';
import Lost                 from './Lost.jsx';
import WeekTabComponent     from './WeekTabComponent.jsx';
import BookingsContainer    from './BookingsComponent.jsx';

export default class MainRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/:weeknum_or_date" component={BookingsContainer} />
        <Route path="*" component={Lost} />
      </Router>
    );
  }
}
