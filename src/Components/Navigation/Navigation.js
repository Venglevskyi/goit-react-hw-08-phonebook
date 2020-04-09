import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authSelectors } from '../../redux/authorization';

import routes from '../../routes';
import styles from './navigation.module.css';

const Navigation = ({ isAuth }) => (
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
      {isAuth && (
        <li className={styles.menuList}>
          <NavLink
            exact
            to={routes.Contacts}
            className={styles.link}
            activeClassName={styles.activeLink}
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  </nav>
);

const mapStateToProps = state => ({
  isAuth: authSelectors.getToken(state),
});

Navigation.defaultProps = {
  isAuth: null,
};

Navigation.propTypes = {
  isAuth: PropTypes.string,
};

export default connect(mapStateToProps)(Navigation);
