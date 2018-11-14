import React from 'react';
import ProductList from 'components/ProductList';
import Filter from 'components/Filter';
import PropTypes from 'prop-types';

const ProductsPage = ({ products, categories, matchedSlug }) => {
  let currentCategory = categories.find(cat => cat.slug === matchedSlug);
  let filteredProducts = !currentCategory
    ? []
    : products.filter(product =>
        product.categories.some(cat => cat.id === currentCategory.id)
      );

  return (
    <>
      {currentCategory && <Filter />}
      <ProductList products={filteredProducts} />
    </>
  );
};

ProductsPage.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired,
  matchedSlug: PropTypes.string.isRequired
};

export default ProductsPage;
