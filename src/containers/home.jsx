'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Todo from '../components/todo/todo.jsx';

class HomeContainer extends Component {
  render() {
    return(
      <div>
        <h1>Home Screen</h1>
        <p>This codebase is used to develop solutions to specific ui issues.</p>
        <br/>
        <br/>
        <Todo />
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
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
