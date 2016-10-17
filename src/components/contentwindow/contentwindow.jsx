'use strict';
import './contentwindow.less';
import React from 'react';

const ContentWindow = ({ children }) => (
  <div className="content-window-container">
    {children}
  </div>
);

export default ContentWindow;