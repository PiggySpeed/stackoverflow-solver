'use strict';
import React, { Component } from 'react';

const styles = {
  container: {
    display: 'flex',
    flex: 1,
    height: '100%',
    //width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  }
};

export class TransitionsScreenA extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{...styles.container, backgroundColor: '#E91E63'}}>
        <h1 style={{color: '#FFFFFF'}}>ROUTE 1</h1>
      </div>
    )
  }
}

export class TransitionsScreenB extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{...styles.container, backgroundColor: '#FF9800'}}>
        <h1 style={{color: '#FFFFFF'}}>ROUTE 2</h1>
      </div>
    )
  }
}

export class TransitionsScreenC extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{...styles.container, backgroundColor: '#009688'}}>
        <h1 style={{color: '#FFFFFF'}}>ROUTE 3</h1>
      </div>
    )
  }
}

export class TransitionsScreenD extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{...styles.container, backgroundColor: '#9E9E9E'}}>
        <h1 style={{color: '#FFFFFF'}}>ROUTE 4</h1>
      </div>
    )
  }
}

export class TransitionsScreenE extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div style={{...styles.container, backgroundColor: '#00BCD4'}}>
        <h1 style={{color: '#FFFFFF'}}>ROUTE 5</h1>
      </div>
    )
  }
}
