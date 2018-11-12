import React from 'react';
import ProductItem from 'components/ProductItem';
import Filter from 'components/Filter';
import PropTypes from 'prop-types';

const ProductList = ({products, categories, matchedSlug, filterString, onFilterTextChange}) => {
  let currentCategory = categories.find(cat => cat.slug === matchedSlug);
  let filteredProducts = !currentCategory ? [] : products
    .filter(product => product.categories.some(cat => cat.id === currentCategory.id))
    .filter(product => product.title.toLowerCase().includes(filterString.toLowerCase()))

  return (
    <>
      {currentCategory &&
        <Filter
          onTextChange={onFilterTextChange}
        /> 
      }
      <div className="ProductList">
        <h2 className="ProductList__title">Products</h2>
        <div>
          {filteredProducts.length
            ? filteredProducts.map((product, key) => {
                return (
                  <ProductItem
                    key={`${product.id}-${key}`}
                    title={product.title}
                    description={product.description}
                  />
                )
              })
            : <div>No products found.</div>
          }
        </div>
      </div>
    </>
  )
}

ProductList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.shape({
    categories: PropTypes.array.isRequired,
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

export default ProductList;



