import React, { Component } from 'react';

// todo: it doesn't seem to make sense to have a stateful component inside a dumb component, refactor this
class ProductItem extends Component {
  // todo: if user changes category they remain active 
  state = {
    isActive: false
  }

  render() {
    let { isActive } = this.state;

    return (
      <>
        <div className="ProductList__item">
          <h3 className="ProductList__item__title"onClick={() => this.setState({isActive: !this.state.isActive})}>{this.props.title}</h3>
          {isActive &&
            <div>{this.props.description}</div>
          }
        </div>
      </>
    )
  }
}

const ProductList = (props) => {
  // todo: do this filtering in the parent
  let filteredItems = props.products
  ? props.products
    .filter(product => product.categories.some(cat => cat.id === props.match.params.id))
    .filter(item => item.title.toLowerCase().includes(props.filterString.toLowerCase()))
  : undefined;

  console.log('filteredItems: ', filteredItems);

  return (
    <div className="ProductList">
      <h2 className="ProductList__title">Products</h2>
      <div>
        {filteredItems &&
          filteredItems.map((item, key) => {
            return (
              <ProductItem
                key={key}
                title={item.title}
                description={item.description}
              />
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductList;



