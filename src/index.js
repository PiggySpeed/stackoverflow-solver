import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import './globalstyles/index.less';

import routes from './config/routes';

ReactDOM.render( routes, document.getElementById('content') );