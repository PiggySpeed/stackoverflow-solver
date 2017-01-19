'use strict';
import React from 'react';
import {
  FormsWrapper,
  InputRegular,
  InputButton,
  InputValidate,
  ViewCol
} from '../';

const FormsAutoScroll = () => (
  <ViewCol style={{backgroundColor: 'lightgrey'}}>
    <InputRegular />
    <InputButton />
    <InputValidate />
  </ViewCol>
);
export default FormsAutoScroll;