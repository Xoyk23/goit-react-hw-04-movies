import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../../routes';
import styles from './Navigation.module.css';

const NavBar = () => {
  return (
    <nav>
      <ul className={styles.nav}>
        <li className={styles.item}>
          <NavLink
            className={styles.link}
            activeClassName={styles.active}
            exact
            to={routes.home}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.item}>
          <NavLink
            className={styles.link}
            activeClassName={styles.active}
            to={routes.movies}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
