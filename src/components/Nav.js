import React from 'react';
import PropTypes from 'prop-types';
import NavLink from './NavLink.js';
import { connect } from 'react-redux';

const Nav = ({ items, currentItem }) => {
  return (
    <nav className="Nav">
      <h2 className="Nav__title">Categories</h2>
      <ul>
        {items &&
          items.map((item, key) => (
            <li key={key}>
              <NavLink
                to={`/${item.slug}`}
                label={item.title}
                isActive={item.slug === currentItem.replace('/', '')}
              />
            </li>
          ))}
      </ul>
    </nav>
  );
};

Nav.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      slug: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

const mapStateToProps = state => ({
  currentItem: state.router.location.pathname
});

export default connect(mapStateToProps)(Nav);
