'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import { TransitionsNav, SlideTransition } from '../components';

class TransitionsContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { children, location: { pathname }} = this.props;

    return(
      <div style={{display: 'flex', flex: 1}}>
        <TransitionsNav />

        <SlideTransition pathname={pathname}>
          {children}
        </SlideTransition>
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