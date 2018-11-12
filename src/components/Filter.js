import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({onTextChange}) =>
  <div className="Filter">
    <h2 className="Filter__title">Filter</h2>
    <input type="text" onChange={e => onTextChange(e.target.value)} />
  </div>

Filter.propTypes = {
  onTextChange: PropTypes.func.isRequired
}

export default Filter;