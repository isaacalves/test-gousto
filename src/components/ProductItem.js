import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {Collapse} from 'react-collapse';

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
          <Collapse isOpened={isActive}>
            <div className="ProductList__item__description">{this.props.description}</div>
          </Collapse>
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