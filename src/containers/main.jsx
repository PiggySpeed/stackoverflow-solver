'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Navigation, { NavigationButton } from '../components/navigation/navigation.jsx';
import ContentWindow from '../components/contentwindow/contentwindow.jsx';

class MainContainer extends Component {
  render() {
    return(
      <div className="full-size">
        <Navigation>
          <NavigationButton name="Home" to="/" />
          <NavigationButton name="#1: Lists" to="/lists" />
          <NavigationButton name="#2: Transitions" to="/transitions" />
          <NavigationButton name="#3: Forms" to="/forms" />
        </Navigation>
        <ContentWindow>
          {this.props.children}
        </ContentWindow>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);