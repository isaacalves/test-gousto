import React, { Component } from 'react';
import ProductItem from 'components/ProductItem';
import Filter from 'components/Filter';

const ProductList = ({products, categories, match, filterString, onFilterTextChange}) => {
  let currentCategory = categories.find(cat => cat.slug === match.params.slug);
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

export default ProductList;



