import React, { Component } from 'react';

class ProductItem extends Component {
  state = {
    isActive: false
  }

  render() {
    let { isActive } = this.state;

    return (
      <>
        <div className="ProductList__item">
          <div className="ProductList__item__title"onClick={() => this.setState({isActive: !this.state.isActive})}>
            <strong>{this.props.title}</strong>
          </div>
          {isActive &&
            <div>{this.props.description}</div>
          }
        </div>
      </>
    )
  }
}

const ProductList = ({items}) =>
  <div className="ProductList">
    <h2 className="ProductList__title">Products</h2>
    <div>
      {items.length
        ? items.map((item, key) => {
            return (
              <ProductItem
                // unique key so it resets the item's state when List is rendered
                key={`${item.id}-${key}`}
                title={item.title}
                description={item.description}
              />
            )
          })
        : <div>No products found.</div>
      }
    </div>
  </div>

export default ProductList;



