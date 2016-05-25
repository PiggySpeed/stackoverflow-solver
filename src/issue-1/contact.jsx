import * as React from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import { connect } from 'react-redux';

const ContactContainer = ({ }) => {
  return (
    <div>
      contact
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

const Contact = connect(mapStateToProps, mapDispatchToProps)(ContactContainer);
export default Contact;