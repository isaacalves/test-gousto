import React, { Component } from 'react';

// class Filter extends Component {
//   render() {
//     return (
//       <div className="Filter">
//         <h2 className="Filter__title">Filter</h2>
//         <input type="text" onKeyUp={e => props.onTextChange(e.target.value)} />
//       </div>
//     )
//   }
// }

const Filter = (props) =>
  <div className="Filter">
    <h2 className="Filter__title">Filter</h2>
    <input type="text" onKeyUp={e => props.onTextChange(e.target.value)} />
  </div>
  
export default Filter;