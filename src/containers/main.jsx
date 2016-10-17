'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Navigation, { NavigationButton } from '../components/navigation/navigation.jsx';
import ContentWindow from '../components/contentwindow/contentwindow.jsx';

class MainContainer extends Component {
  static propTypes = {

  };
  render() {
    return(
      <div className="full-size">
        <Navigation>
          <NavigationButton name="Home" to="/" />
          <NavigationButton name="#1: Sorting" to="/sort" />
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
const Main = connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export default Main;