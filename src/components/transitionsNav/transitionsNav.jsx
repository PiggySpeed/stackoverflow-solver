'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    backgroundColor: '#3B43A1'
  },
  navButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 50
  },
  navButtonActive: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 75,
    height: 50,
    backgroundColor: '#A4C1FF'
  },
  navText: {
    color: '#FFFFFF'
  }
};

const NavButton = ({ name, to }) => (
  <Link style={styles.navButton} activeStyle={styles.navButtonActive} to={to}>
    <h5 style={styles.navText}>{name}</h5>
  </Link>
);

export default class TransitionsNav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.container}>
        <NavButton name="Route 1" to="/transitionsA" />
        <NavButton name="Route 2" to="/transitionsB" />
        <NavButton name="Route 3" to="/transitionsC" />
        <NavButton name="Route 4" to="/transitionsD" />
        <NavButton name="Route 5" to="/transitionsE" />
      </div>
    )
  }
}
