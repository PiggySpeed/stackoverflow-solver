'use strict';
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import SectionWindow from '../components/sectionwindow/sectionwindow.jsx';
import ListEntry from '../components/listentry/listentry.jsx';

// Section to demonstrate the dangers of using array index as key in an editable list

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 600,
    height: 400
  },
  listContainer: {
    display:'flex',
    flexFlow:'column',
    width: 200,
    height: '100%',
  },
  list: {
    border: '1px solid black',
    display:'flex',
    height: '100%',
    flexFlow:'column',
    overflowY: 'auto',
    margin: 4
  },
  input: {
    margin: 4,
    border: '1px solid grey'
  }
};

const genID = () => {
  let count = 1000;

  return () => {
    return '' + count++
  }
};
const genID1 = genID();

const clamp = (val, min, max) => {
  return (val > max) ? max : (val < min) ? min : val;
};

class ListContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      input: '',
      currentSelection: '',
      values: [{id: '34', val:'pig'}, {id: '27', val:'bear'}, {id:'62', val:'penguin'}, {id:'92', val:'fox'}, {id: '83', val:'seal'}, {id:'22', val:'cat'}]
    };
    this.attachEventHandler = this.attachEventHandler.bind(this);
    this.removeEventHandler = this.removeEventHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    //this.handleUpdate = this.handleUpdate.bind(this);
    this.handleAddNew = this.handleAddNew.bind(this);
    //this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  attachEventHandler(e) {
    e.stopPropagation();
    window.removeEventListener('keydown', this.handleKeyDown);
    window.addEventListener('keydown', this.handleKeyDown);
  }
  removeEventHandler() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    switch(e.key){
      case 'Enter':
        const current = this.state.values[this.state.selectedIndex];
        this.setState({ currentSelection: current.val });
        break;
      case 'ArrowUp':
        this.setState({ selectedIndex: clamp(this.state.selectedIndex-1, 0, this.state.values.length-1 )});
        break;
      case 'ArrowDown':
        this.setState({ selectedIndex: clamp(this.state.selectedIndex+1, 0, this.state.values.length-1 )});
        break;
    }
  }
  handleClick(id) {
    this.setState({ selectedIndex: id })
  }
  handleBlur(e) {
    this.setState({ input: e.target.value })
  }
  handleAddNew() {
    const values = this.state.values;
    values.push({id: genID1(), val: this.state.input});

    this.setState({values});
  }
  //handleChange(id, val) {
  //  const newValues = this.state.values.map( item => {
  //    item.id === id
  //      ? item.val = val
  //      : null;
  //    return item
  //  });
  //  console.log(newValues);
  //  this.setState({values: newValues})
  //}
  handleDelete(id) {
    const newValues = this.state.values.filter( item => item.id !== id );
    this.setState({values: newValues})
  }
  render() {
    return (
      <SectionWindow style={styles.container} onClick={this.removeEventHandler}>

        <div style={{display:'flex', flexFlow: 'column', alignItems: 'center'}}>
          <h4 style={{marginRight: 56}}>My Favorite Animal:</h4>
          <h5 style={{marginRight: 56, color: '#597ADE'}}>{this.state.currentSelection}</h5>
        </div>

        <div style={styles.listContainer}>

          <div style={styles.list} onClick={this.attachEventHandler}>
          { this.state.values.map((item, id) =>
            <ListEntry
              key={id}
              entryID={item.id}
              value={item.val}
              onClick={() => this.handleClick(id)}
              selected={this.state.selectedIndex === id}
              //onBlur={this.handleChange}
              onDelete={this.handleDelete}
            />
          )}
          </div>

          <input
            style={styles.input}
            onBlur={this.handleBlur}
          />

          <div style={{boxSizing: 'border-box', display: 'flex'}}>
            <button className='raised-button' onClick={this.handleAddNew}>Add New</button>
          </div>
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
