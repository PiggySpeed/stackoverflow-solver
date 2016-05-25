import * as React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import { connect } from 'react-redux';

const HomeContainer = ({ }) => {
  return (
    <div>
      home
    </div>
  )
};

const mapStateToProps = (state) => {
  return {

  }
};
const mapDispatchToProps = (dispatch) => {
  return {

  }
};

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
export default Home;