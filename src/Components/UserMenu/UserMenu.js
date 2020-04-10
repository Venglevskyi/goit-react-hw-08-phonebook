import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { authOperations, authSelectors } from '../../redux/authorization';
import userImage from '../../images/137-1370051_avatar-generic-avatar-hd-png-download.png';
import styles from './userMenu.module.css';

const UserMenu = ({ userEmail, token, onLogout }) => (
  <div className={styles.container}>
    <img className={styles.avatar} src={userImage} alt="" width="32" />
    <span>{userEmail}</span>
    <button
      className={styles.button}
      type="button"
      onClick={() => onLogout(token)}
    >
      Выйти
    </button>
  </div>
);

const mapStateToProps = state => ({
  token: authSelectors.getToken(state),
  userEmail: authSelectors.getuserEmail(state),
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

UserMenu.defaultProps = {
  userEmail: null,
};

UserMenu.propTypes = {
  token: PropTypes.string.isRequired,
  userEmail: PropTypes.string,
  onLogout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
