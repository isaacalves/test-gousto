import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink.js';

const Nav = ({items, currentItemSlug}) =>
  <nav className="Nav">
    <h2 className="Nav__title">Categories</h2>
    <ul>
      {items &&
        items.map((item, key) => 
          <li key={key}>
            <NavLink 
              to={`/${item.slug}`}
              label={item.title}
              isCurrent={item.slug === currentItemSlug}
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
  currentItemSlug: PropTypes.string.isRequired
}

export default Nav;