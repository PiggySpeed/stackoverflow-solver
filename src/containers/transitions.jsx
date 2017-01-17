'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Navigation, { NavigationButton } from '../components/navigation/navigation.jsx';
import ContentWindow from '../components/contentwindow/contentwindow.jsx';
import {TransitionsNav} from '../components';

class TransitionsContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <div className="full-size">
        <TransitionsNav />
        {this.props.children}
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
const Transitions = connect(mapStateToProps, mapDispatchToProps)(TransitionsContainer);
export default Transitions;