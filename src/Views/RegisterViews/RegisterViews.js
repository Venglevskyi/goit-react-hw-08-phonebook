import React, { Component } from 'react';
import { connect } from 'react-redux';
import authActions from '../../redux/authorization/authActions';
import authOperations from '../../redux/authorization/authOperations';

import styles from './registerViews.module.css';

class RegisterViews extends Component {
  state = {
    name: '',
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const {name, email, password} = this.state;

    this.props.onRegister({name, email, password});
    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { name, email, password } = this.state;

    return (
      <div>
        <h2 className={styles.title}>
          Пожалуйста, заполните эту форму, чтобы создать учетную запись
        </h2>

        <form onSubmit={this.handleSubmit} className={styles.form}>
          <label className={styles.formLabel}>
            Name
            <input
              className={styles.formInput}
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
            />
          </label>

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
            Register
          </button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = {
  onRegister: authOperations.register,
};

export default connect(null, mapDispatchToProps)(RegisterViews);
