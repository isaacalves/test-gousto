import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <h2 className="Nav__title">Categories</h2>
        <ul>
          {this.props.items &&
            this.props.items.map((item, key) => {
              return (
                <li
                  key={key}
                  // className={item.id === this.props.currentItem && 'current'}
                >
                  <Link to={`/categories/${item.id}`}>{item.title}</Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    )
  }
}

export default Nav;