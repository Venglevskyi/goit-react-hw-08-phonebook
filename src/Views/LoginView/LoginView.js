import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { authOperations } from '../../redux/authorization';

import styles from '../RegisterView/registerViews.module.css';

class LoginView extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin({ ...this.state });
    this.setState({ email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className={styles.container}>
        <h2 className={styles.title}>
          Для входа в учетную запись, пожалуйста, введите свой електронный адрес и пароль
        </h2>

        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.formLabel}>
            Email
            <input
              className={styles.formInput}
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label className={styles.formLabel}>
            Password
            <input
              className={styles.formInput}
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button className={styles.formButton} type="submit">
            Login
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onLogin: authOperations.logIn,
};

LoginView.propTypes = {
  onLogin: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(LoginView);
