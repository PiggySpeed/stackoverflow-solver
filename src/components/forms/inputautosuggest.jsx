import React, { Component, PropTypes }from 'react';
import { FormsWrapper } from '../'

const styles = {
  input: {
    border: '2px solid #C3C3C3',
    color: '#7f7f7f',
    fontSize: 24,
    padding: 8,
    width: 500
  },
  dropdownContainer: {
    border: '1px solid grey',
    display: 'flex',
    flexFlow: 'column'
  }
};

const MOCK_DATA = [
  { name: 'Bananas' },
  { name: 'Bears' },
  { name: 'Bear Boots' },
  { name: 'Bear Treats' },
  { name: 'Bear Beans' },
  { name: 'Trees' },
  { name: 'Treetops' },
  { name: 'Tree Leaves' },
  { name: 'Tree Seeds' },
  { name: 'Tree flags' },
  { name: 'Peas' },
  { name: 'Pears' },
  { name: 'Places' }
];

export default class InputAutoSuggest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }
  render() {
    return(
      <FormsWrapper header='AutoSuggest Input'>
        <input
          placeholder="Type 'bear'"
          style={styles.input}
        />
        <div style={styles.dropdownContainer}>
          <div style={styles.dropdownHeader}>
            <h1>This is the dropdown header</h1>
          </div>
          { MOCK_DATA.map(item => (
            <h1>{item.name}</h1>
          ))}
        </div>
      </FormsWrapper>
    );
  }
}
InputAutoSuggest.propTypes = {
  options: PropTypes.array
};

