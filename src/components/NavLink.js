import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const NavLink = ({ label, to, pathname }) => (
  <div className={to === pathname ? 'current' : ''}>
    <Link to={`${to}`}>{label}</Link>
  </div>
);

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  pathname: PropTypes.string
};

const mapStateToProps = state => ({
  pathname: state.router.location.pathname
});

export default connect(mapStateToProps)(NavLink);
