import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Main from '../../components/main';


window.onload = () => {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
      </Route>
    </Router>,
    document.getElementById('main')
  )
};