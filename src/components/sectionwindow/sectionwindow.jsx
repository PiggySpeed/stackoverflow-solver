'use strict';
import './sectionwindow.less';
import React from 'react';

const SectionWindow = ({ children }) => (
  <article className="section-window-container">
    {children}
  </article>
);
export default SectionWindow;