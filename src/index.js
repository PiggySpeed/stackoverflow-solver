import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';

import routes from 'config/routes';

ReactDOM.render(routes, document.getElementById('app'));