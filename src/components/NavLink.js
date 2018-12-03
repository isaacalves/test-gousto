import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavLink extends PureComponent {
  render() {
    let { label, to, isActive } = this.props;

    return (
      <div className={isActive ? 'current' : ''}>
        <Link to={`${to}`}>{label}</Link>
      </div>
    );
  }
}

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
};

export default NavLink;
