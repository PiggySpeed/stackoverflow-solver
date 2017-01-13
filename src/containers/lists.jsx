'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SectionWindow from '../components/sectionwindow/sectionwindow.jsx';
import ListEntry from '../components/listentry/listentry.jsx';

// Section to demonstrate the dangers of using array index as key in an editable list

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: [{id: '34', val:'pig'}, {id: '27', val:'bear'}, {id:'62', val:'penguin'}, {id:'92', val:'fox'}, {id: '83', val:'seal'}, {id:'22', val:'cat'}]
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleChange(id, val) {
    const newValues = this.state.values.map( item => {
      item.id === id
        ? item.val = val
        : null;
      return item
    });
    console.log(newValues);
    this.setState({values: newValues})
  }
  handleDelete(id) {
    const newValues = this.state.values.filter( item => item.id !== id );
    this.setState({values: newValues})
  }
  render() {
    const tree = 'tree';

    return (
      <SectionWindow>
        <div style={{display:'flex', flexFlow:'column'}}>
          {this.state.values.map((item, id) =>
            <ListEntry
              key={id}
              entryID={item.id}
              value={item.val}
              onBlur={this.handleChange}
              onDelete={this.handleDelete}
            />
          )}
        </div>
      </SectionWindow>
    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
  }
};

const Lists = connect(mapStateToProps, mapDispatchToProps)(ListContainer);
export default Lists;
