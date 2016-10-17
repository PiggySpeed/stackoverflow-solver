'use strict';
import './navigation.less';
import React from 'react';
import { Link } from 'react-router';

export const NavigationButton = ({ name, to }) => (
  <Link className="navigation-button" to={to} >
    <h4 className="navigation-button-text">{name}</h4>
  </Link>
);
NavigationButton.propTypes = {
  name: React.PropTypes.string.isRequired,
  to: React.PropTypes.string.isRequired
};

const Navigation = ({ children }) => (
  <nav className="navigation-container">
    {children}
  </nav>
);
export default Navigation;