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

export default class InputRegular extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <FormsWrapper header='Regular Input'>
        <input
          placeholder="Give me all of your SECRETS!!!"
          style={styles.input}
        />
      </FormsWrapper>
    );
  }
}