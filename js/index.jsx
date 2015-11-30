import React from 'react';
import ReactDOM from 'react-dom';
import Router, { IndexRoute, Route, DefaultRoute, Link, RouteHandler } from 'react-router';

import App from './components/App.jsx';
import Login from './components/Login.jsx';
import Main from './components/Main.jsx';

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Login}/>
    <Route path='main' component={Main}/>
  </Route>
);

ReactDOM.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('react')
);