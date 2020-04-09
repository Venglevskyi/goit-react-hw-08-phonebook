import React from 'react';
import { NavLink } from 'react-router-dom';

import routes from '../../routes';
import styles from '../Navigation/navigation.module.css';

const AuthNav = () => (
  <div className={styles.container}>
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
        exact
        to={routes.Login}
        className={styles.link}
        activeClassName={styles.activeLink}
      >
        Login
      </NavLink>
    </li>
  </div>
);

export default AuthNav;
