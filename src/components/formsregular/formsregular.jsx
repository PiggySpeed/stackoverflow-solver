import React from 'react';
import {
  FormsWrapper,
  InputRegular,
  InputButton,
  InputValidate,
  InputCreditCard,
  ViewCol
} from '../';

const FormsRegular = () => (
  <ViewCol style={{backgroundColor: 'lightgrey'}}>
    <InputRegular />
    <InputButton />
    <InputValidate />
    <InputCreditCard cols={9} separators={[2, 5]} />
  </ViewCol>
);
export default FormsRegular;