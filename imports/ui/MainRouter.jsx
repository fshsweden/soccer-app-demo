
import React from 'react';
import { Route, Router, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import AppComponent         from './AppComponent.jsx';
import BookingsComponent    from './BookingsComponent.jsx';
import New                  from './New.jsx';
import Lost                 from './Lost.jsx';
import WeekTabComponent     from './WeekTabComponent.jsx';
import BookingsContainer    from './BookingsComponent.jsx';

export default class MainRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={AppComponent} />
        <Route path="/new" component={New} />
        <Route path="/bookings/:weeknum_or_date" component={BookingsContainer} />
        <Route path="*" component={Lost} />
      </Router>
    );
  }
}
