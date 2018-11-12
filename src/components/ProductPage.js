import React from 'react';
import ProductList from 'components/ProductList';
import Filter from 'components/Filter';
import PropTypes from 'prop-types';


const ProductPage = ({products, categories, matchedSlug, filterString, onFilterTextChange}) => {
  let currentCategory = categories.find(cat => cat.slug === matchedSlug);
  let filteredProducts = !currentCategory ? [] : products
    .filter(product => product.categories.some(cat => cat.id === currentCategory.id))
    .filter(product => product.title.toLowerCase().includes(filterString.toLowerCase()))

  return (
    <>
      {currentCategory &&
        <Filter onTextChange={onFilterTextChange} /> 
      }
      <ProductList products={filteredProducts} />
    </>
  )
}

ProductPage.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    description: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  categories: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  matchedSlug: PropTypes.string.isRequired,
  filterString: PropTypes.string.isRequired,
  onFilterTextChange: PropTypes.func.isRequired
}

export default ProductPage;



