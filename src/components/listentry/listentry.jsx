'use strict';
import React, { Component, PropTypes } from 'react';

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
      <div style={{display:'flex'}}>

        <input
          id={this.props.entryID}
          defaultValue={this.props.value}
          rows={1}
          onBlur={this.handleBlur}
        />

        <button type='button' onClick={this.handleDeleteClick}>X</button>

      </div>
    );
  }
}
ListEntry.propTypes = {
  entryID: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired
};
