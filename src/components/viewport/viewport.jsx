'use strict';
import React, { PropTypes } from 'react';

export const ViewCol = ({children, style, ...props }) => (
  <div {...props} style={{display: 'flex', flexFlow: 'column', flex: 1, ...style}}>
    {children}
  </div>
);
ViewCol.propTypes = {
  children:     PropTypes.node
};

export const ViewRow = ({ children, style, ...props}) => (
  <div {...props} style={{display: 'flex', flex: 1, ...style}}>
    {children}
  </div>
);
ViewRow.propTypes = {
  children:     PropTypes.node
};


