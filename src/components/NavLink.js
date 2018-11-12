import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

const NavLink = ({children, to}) => 
  <Route path={to} children={({match}) => (
    <div className={match ? 'current' : ''}>
      <Link to={to}>
        {children}
      </Link>
    </div>
  )}/>  

export default NavLink;