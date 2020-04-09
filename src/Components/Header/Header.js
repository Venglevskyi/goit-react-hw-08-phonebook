import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

import { authSelectors } from '../../redux/authorization';
import styles from '../Navigation/navigation.module.css';

const Header = ({ isAuth }) => (
  <header className={styles.siteNavigation}>
    <Navigation />
    {isAuth ? <UserMenu /> : <AuthNav />}
  </header>
);

const mapStateToProps = state => ({
  isAuth: authSelectors.getToken(state),
});

Header.defaultProps = {
  isAuth: null,
};

Header.propTypes = {
  isAuth: PropTypes.string,
};

export default connect(mapStateToProps)(Header);
