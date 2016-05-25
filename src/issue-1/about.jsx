import * as React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import { connect } from 'react-redux';

const AboutContainer = ({ }) => {
  return (
    <div>
      about
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

const About = connect(mapStateToProps, mapDispatchToProps)(AboutContainer);
export default About;
