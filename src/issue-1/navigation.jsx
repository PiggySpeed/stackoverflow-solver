import * as React from 'react';
import { Router, Route, hashHistory, IndexRoute, Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import Home from './home.jsx';
import {onRadioChange} from './actions.js';

class NavLink extends React.Component{
  render(){
    return <Link {...this.props} activeStyle={{color:"#ff8a00"}} />
  }
}

class NavigationContainer extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className="navigation-container">
        <div className="navbar">
          <h4>NAVIGATION</h4>
          <IndexLink to="/" activeClassName="active">Home</IndexLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <button onClick={console.log(this.props.store)}>Print Store</button>
        </div>
        <div className="content-container">
          {this.props.children || <Home/>}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    store: state
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onChange: () => {
      dispatch(onRadioChange())
    },
    onClick: () => {
      dispatch(onGetStore())
    }
  }
};

const Navigation = connect(mapStateToProps, mapDispatchToProps)(NavigationContainer);
export default Navigation;