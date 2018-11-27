import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Spring, animated } from 'react-spring';

// Why <Spring force ... ?
// Because we are rendering the spring with the same props on add/remove text
// (height: 'auto'), so it has no reason to update its animations. This is an
// edge case unfortunately. More on that here: https://github.com/drcmda/react-spring/blob/master/API-OVERVIEW.md#animating-auto

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
      <Spring
        native
        force
        from={{ height: 0 }}
        to={{ height: isActive ? 'auto' : 0 }}
      >
        {props => (
          <animated.div className="item" style={props}>
            <div className="ProductList__item__description">{description}</div>
          </animated.div>
        )}
      </Spring>
    </div>
  );
};

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
};

export default ProductItem;
