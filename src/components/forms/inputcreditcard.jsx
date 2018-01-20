import React, { Component, PropTypes } from 'react';
import { FormsWrapper } from '../';

const styles = {
  container: {
    border: '2px solid #C3C3C3',
    color: '#7f7f7f',
    fontSize: 24,
    padding: 8,
    width: 500
  }
};

export default class InputCreditCard extends Component {
  render () {
    const { chars, separators, style } = this.props;
    const numCols = chars + separators.length;

    return (
      <FormsWrapper header="Credit Card Input">
        <input
          cols={numCols}
          type="text"
          style={{...styles.container, ...style}}
        />
      </FormsWrapper>
    )
  }
}
InputCreditCard.propTypes = {
  chars: PropTypes.number.isRequired,
  separators: PropTypes.array.isRequired,
  style: PropTypes.object
};
