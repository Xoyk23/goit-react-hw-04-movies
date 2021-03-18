import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';

const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink exact to={routes.home}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={routes.movies}>Movies</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
