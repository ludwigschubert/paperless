import React from 'react';
import ReactDOM from 'react-dom';
import Router, { IndexRoute, Route, DefaultRoute, Link, RouteHandler } from 'react-router';
import Parse from 'parse';

import App from './components/App.jsx';
import Main from './components/Main.jsx';

Parse.initialize("pQQfaP06YQuGXsbXDRrPMOLFxBvOSpCIU0EmdwYe", "7Tw261ee33ItnfnURajtVOGLO6lB3rbvR997h1DK");

const routes = (
  <Route path='/' component={App}>
    <IndexRoute component={Main}/>
  </Route>
);

ReactDOM.render(
  <Router>
    {routes}
  </Router>,
  document.getElementById('react')
);