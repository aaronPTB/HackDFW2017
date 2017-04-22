import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';

import Main from '../../components/main';
import Login from '../../components/pages/login/index';
import Home from '../../components/pages/home/index';

window.onload = () => {
  ReactDOM.render(
    <Router history={browserHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="login" component={Login}/>
      </Route>
    </Router>,
    document.getElementById('main')
  )
};