import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class NavLink extends PureComponent {
  render() {
    let { label, to, isCurrent } = this.props;
    return (
      <div className={isCurrent ? 'current' : ''}>
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
