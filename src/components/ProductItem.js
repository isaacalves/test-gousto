import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class ProductItem extends PureComponent {
  state = {
    isActive: false
  }

  render() {
    let { isActive } = this.state;
    return (
      <>
        <div className="ProductList__item">
          <div className="ProductList__item__title" onClick={() => this.setState({isActive: !this.state.isActive})}>
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

ProductItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export default ProductItem;