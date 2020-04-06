import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import styles from './navigation.module.css';

const Navigation = () => (
  <header className={styles.siteNavigation}>
    <nav>
      <ul className={styles.menu}>
        <li className={styles.menuList}>
          <NavLink
            exact
            to={routes.Home}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Home
          </NavLink>
        </li>
        <li className={styles.menuList}>
          <NavLink
            exact
            to={routes.Register}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Register
          </NavLink>
        </li>
        <li className={styles.menuList}>
          <NavLink
            to={routes.Login}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Login
          </NavLink>
        </li>
        <li className={styles.menuList}>
          <NavLink
            to={routes.Contacts}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Navigation;
