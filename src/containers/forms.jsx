'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { InputName, ViewRow, FormsNav } from '../components';

class FormsContainer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <ViewRow>
        <FormsNav />
        {this.props.children}
      </ViewRow>
    );
  }
}

const mapStateToProps = (state) => {
  return { }
};
const mapDispatchToProps = (dispatch) => {
  return { }
};
export default connect(mapStateToProps, mapDispatchToProps)(FormsContainer);
