import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Collapse } from 'react-collapse';

const ProductItem = ({ title, description }) => {
  const [isActive, toggleActive] = useState(false);
  return (
    <div className="ProductList__item">
      <div
        className="ProductList__item__title"
        onClick={() => toggleActive(isActive => !isActive)}
      >
        <strong>{title}</strong>
      </div>
      <Collapse isOpened={isActive}>
        <div className="ProductList__item__description">{description}</div>
      </Collapse>
    </div>
  );
};

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProductItem;
