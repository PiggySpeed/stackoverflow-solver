'use strict';
import React, { Component }from 'react';
import { FormsWrapper } from '../'

const styles = {
  input: {
    border: '2px solid #C3C3C3',
    color: '#7f7f7f',
    fontSize: 24,
    padding: 8,
    width: 500
  }
};

export default class InputValidate extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <FormsWrapper header='Validated Input'>
        <input
          placeholder="Minimum eight characters!"
          style={styles.input}
        />
      </FormsWrapper>
    );
  }
}