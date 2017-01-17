'use strict';
import React, { Component } from 'react';

const styles = {
  container: {
    display: 'flex',
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
      <div style={styles.container}>
        <h1>ROUTE 1</h1>
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
      <div style={styles.container}>
        <h1>ROUTE 2</h1>
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
      <div style={styles.container}>
        <h1>ROUTE 3</h1>
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
      <div style={styles.container}>
        <h1>ROUTE 4</h1>
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
      <div style={styles.container}>
        <h1>ROUTE 5</h1>
      </div>
    )
  }
}
