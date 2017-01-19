'use strict';
import React, { Component } from 'react';
import { Link } from 'react-router';

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'column',
    flex: 'none',
    height: '100%',
    width: 75,
    backgroundColor: '#3B43A1'
  },
  navButton: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  navButtonActive: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
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

export default class FormsNav extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={styles.container}>
        <NavButton name="Regular" to="/regular" />
        <NavButton name="Scroll" to="/scroll" />
      </div>
    )
  }
}
