import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({label, to}) => {
  return (
    <Route path={to} children={({match}) => (
      <div className={match ? 'current' : ''}>
        <Link to={to}>{label}</Link>
      </div>
    )}/>  
  )
}

NavLink.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired
}

export default NavLink;