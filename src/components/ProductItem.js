import React, { Component } from 'react';

export default class extends Component {
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
