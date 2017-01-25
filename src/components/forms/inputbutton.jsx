'use strict';
import React, { Component }from 'react';
import Radium from 'radium';
import {
  FormsWrapper,
  ViewRow
} from '../'

const styles = {
  container: {
    flex: 'none',
    width: 500,
    overflow: 'hidden'
  },
  input: {
    width: '100%',
    color: '#7f7f7f',
    fontSize: 24,
    padding: 8,
    border: '2px solid #C3C3C3',
    borderLeft: 'none',
    borderRadius: '0 8px 8px 0'
  },
  button: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    cursor: 'pointer',
    color: '#C3C3C3',
    backgroundColor: '#FFFFFF',
    border: '2px solid #C3C3C3',
    borderRadius: '8px 0 0 8px',
    transition: '0.25s',
    padding: 8,
    ':hover': {
      borderColor: '#A4C1FF',
      backgroundColor: '#A4C1FF',
      color: '#FFFFFF'
    }
  }
};

@Radium
export default class InputButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(
      <FormsWrapper header='Input with Button'>
        <ViewRow style={styles.container}>
        <a key="button" style={styles.button}>
          <i key="icon" className="material-icons">add</i>
        </a>
        <input
          placeholder="What is your favorite animal?"
          style={styles.input}
        />
        </ViewRow>
      </FormsWrapper>
    );
  }
}