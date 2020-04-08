import React from 'react';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import { connect } from 'react-redux';

import { authSelectors } from '../../redux/authorization';
import styles from '../Navigation/navigation.module.css'

const Header = ({ isAuth }) => (
  <header className={styles.siteNavigation}>
    <Navigation />
    {isAuth && <UserMenu />}
  </header>
);

const mapStateToProps = state => ({
  isAuth: authSelectors.getToken(state),
});

export default connect(mapStateToProps)(Header);
