'use strict';
import React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

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
        <Route path="/transitions" component={Transitions} >
          <Route path="/transitionsA" component={TransitionsScreenA} />
          <Route path="/transitionsB" component={TransitionsScreenB} />
          <Route path="/transitionsC" component={TransitionsScreenC} />
          <Route path="/transitionsD" component={TransitionsScreenD} />
          <Route path="/transitionsE" component={TransitionsScreenE} />
        </Route>
      </Route>
    </Router>
  </Provider>
);

export default routes;