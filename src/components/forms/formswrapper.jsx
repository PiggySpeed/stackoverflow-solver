'use strict';
import React from 'react';
import { ViewCol } from '../';

const FormsWrapper = ({header, children}) => (
  <ViewCol style={{flex: 'none', padding: 16, height: 150}}>
    <h1>{header}</h1>
    {children}
  </ViewCol>
);
export default FormsWrapper;