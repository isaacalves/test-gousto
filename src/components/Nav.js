import React from 'react';
import NavLink from './NavLink.js';
import PropTypes from 'prop-types';

const Nav = ({items}) =>
  <nav className="Nav">
    <h2 className="Nav__title">Categories</h2>
    <ul>
      {items &&
        items.map((item, key) => 
          <li key={key}>
            <NavLink 
              to={`/${item.slug}`}
              label={item.title}
            />
          </li>
        )
      }
    </ul>
  </nav>

Nav.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
}

export default Nav;