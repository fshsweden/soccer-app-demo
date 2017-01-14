// jshint esversion:6
import React from "react";
import { Route, Router, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import BookingsComponent    from "./BookingsComponent.jsx";
import Lost                 from "./Lost.jsx";
import WeekTabComponent     from "./WeekTabComponent.jsx";
import BookingsContainer    from "./BookingsComponent.jsx";
import Entry                from "./Entry.jsx";

export default class MainRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/entry" component={Entry} />
        <Route path="/date/:date" component={BookingsContainer} />
        <Route path="/week/:weeknum" component={BookingsContainer} />
        <Route path="*" component={Lost} />
      </Router>
    );
  }
}
