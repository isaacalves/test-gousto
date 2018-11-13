import React from 'react';
import ProductItem from 'components/ProductItem';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const ProductList = ({ products, filterString }) => (
  <div className="ProductList">
    <h2 className="ProductList__title">Products</h2>
    <div>
      {products.length ? (
        products
          .filter(product =>
            product.title.toLowerCase().includes(filterString.toLowerCase())
          )
          .map((product, key) => {
            return (
              <ProductItem
                key={`${product.id}-${key}`}
                title={product.title}
                description={product.description}
              />
            );
          })
      ) : (
        <div>No products found.</div>
      )}
    </div>
  </div>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => {
  return {
    filterString: state.filterString
  };
};

export default connect(mapStateToProps)(ProductList);
