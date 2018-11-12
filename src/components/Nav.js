import React from 'react';
import NavLink from './NavLink.js';

const Nav = props =>
  <nav className="Nav">
    <h2 className="Nav__title">Categories</h2>
    <ul>
      {props.items &&
        props.items.map((item, key) => 
          <li key={key}>
            <NavLink to={`/${item.slug}`}>{item.title}</NavLink>
          </li>
        )
      }
    </ul>
  </nav>

export default Nav;