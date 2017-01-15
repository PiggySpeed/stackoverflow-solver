'use strict';
import React, { Component, PropTypes }from 'react';

const styles = {
  container: {
    display:'flex',
    width: '100%',
    justifyContent: 'space-between'
  }
};

export default class ListEntry extends Component {
  constructor(props) {
    super(props);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  handleBlur(e) {
    this.props.onBlur(this.props.entryID, e.target.value);
  }
  handleDeleteClick() {
    this.props.onDelete(this.props.entryID);
  }
  render() {
    return(
      <div style={styles.container}>

        <h5
          style={{width: '100%', backgroundColor: this.props.selected ? '#C3C3C3' : 'transparent'}}
          onClick={this.props.onClick}
        >
          {this.props.value}
        </h5>

        <button type='button' onClick={this.handleDeleteClick}>X</button>

      </div>
    );
  }
}
ListEntry.propTypes = {
  onClick: PropTypes.func.isRequired,
  entryID: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  selected: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired
};
