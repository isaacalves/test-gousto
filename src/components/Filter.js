import React from 'react';

const Filter = props =>
  <div className="Filter">
    <h2 className="Filter__title">Filter</h2>
    <input type="text" onKeyUp={e => props.onTextChange(e.target.value)} />
  </div>
  
export default Filter;