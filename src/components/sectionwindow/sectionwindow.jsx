'use strict';
import './sectionwindow.less';
import React from 'react';

const SectionWindow = ({ children, style, onClick }) => (
  <article style={style} onClick={onClick} className="section-window-container">
    {children}
  </article>
);
export default SectionWindow;