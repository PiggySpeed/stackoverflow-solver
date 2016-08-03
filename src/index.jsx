import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import  { store, history } from './issue-1/store';

import Navigation from './issue-1/navigation.jsx';
import Home from './issue-1/home.jsx';
import About from './issue-1/about.jsx';
import Contact from './issue-1/contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={Navigation}>
            <IndexRoute component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/contact" component={Contact}/>
          </Route>
        </Router>
      </Provider>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));

//<Provider store={store}>
//  <Router history={hashHistory}>
//    <Route path='/' component={Navigation}>
//      <IndexRoute component={Home}/>
//      <Route path="/about" component={About}/>
//      <Route path="/contact" component={Contact}/>
//    </Route>
//  </Router>
//</Provider>