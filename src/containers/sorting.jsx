'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SectionWindow from '../components/sectionwindow/sectionwindow.jsx';







const SortingContainer = ({ }) => {
  return (
    <div className="full-size-column">
      <SectionWindow >


      </SectionWindow>
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

const Sorting = connect(mapStateToProps, mapDispatchToProps)(SortingContainer);
export default Sorting;
