import React, { Component } from 'react';

const List = (props) => {
  // todo: do this filtering in the parent
  let filteredItems = props.products
  ? props.products.filter(product => product.categories.some(cat => cat.id === props.match.params.id))
  : undefined;

  return (
    <div className="List">
      <h2 className="List__title">Products</h2>
      <ul>
        {filteredItems &&
          filteredItems.map((item, key) => {
            return (
              <li key={key}>{item.title}</li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default List;



