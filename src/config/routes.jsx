'use strict';
import React, {Component} from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import store from './configureStore';
import Main from '../containers/main.jsx';
import Home from '../containers/home.jsx';
import Lists from '../containers/lists.jsx';
import Transitions from '../containers/transitions.jsx';
import {
  TransitionsScreenA,
  TransitionsScreenB,
  TransitionsScreenC,
  TransitionsScreenD,
  TransitionsScreenE
} from '../components';

const routes = (
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="/lists" component={Lists}/>
        <Route path="/transitions" component={Transitions}>
          <Route path="/transitionsA" component={TransitionsScreenA} index={0} />
          <Route path="/transitionsB" component={TransitionsScreenB} index={1} />
          <Route path="/transitionsC" component={TransitionsScreenC} index={2} />
          <Route path="/transitionsD" component={TransitionsScreenD} index={3} />
          <Route path="/transitionsE" component={TransitionsScreenE} index={4} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default routes;


