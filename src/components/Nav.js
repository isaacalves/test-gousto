import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavItem extends Component {
  render() {
    let className = this.props.isActive ? 'current' : '';

    return (
      <li className={className}>
        <Link to={`/categories/${this.props.slug}`}>{this.props.title}</Link>
      </li>
    )
  }
}

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <h2 className="Nav__title">Categories</h2>
        <ul>
          {this.props.items &&
            this.props.items.map((item, key) => <NavItem
              key={key}
              slug={item.slug}
              title={item.title}
              isActive={this.props.currentItemSlug === item.slug}
            />)
          }
        </ul>
      </nav>
    )
  }
}

// NavItem.contextTypes = {
//   router: PropTypes.object
// };

export default Nav;