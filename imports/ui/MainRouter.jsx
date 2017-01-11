
import React from 'react';
import { Route, Router, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'

import App from       './App.jsx';
import Example from   './Example.jsx';
import New from       './New.jsx';
import Lost from      './Lost.jsx';

export default class MainRouter extends React.Component {
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App} />
        <Route path="/new" component={New} />
        <Route path="/example" component={Example} />
        <Route path="*" component={Lost} />
      </Router>
    );
  }
}
