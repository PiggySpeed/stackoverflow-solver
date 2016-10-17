'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class HomeContainer extends Component {
  static propTypes = {

  };
  render() {
    return(
      <div>

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
const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
export default Home;