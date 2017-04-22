import React from 'react';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router'

import Main from '../../components/main';


var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Main}>
    </Route>
  </Router>
)

export default routes;
