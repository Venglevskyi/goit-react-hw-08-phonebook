import React from 'react';
// import { Link } from 'react-router-dom';

import getContactsImage from '../../images/get-contacts.jpg';
import styles from './home-views.module.css';

const HomeViews = () => (
  <div className={styles.container}>
    <h1 className={styles.title}>Welcome to Phonebook Application</h1>
    <img src={getContactsImage} alt="img" width="500" className={styles.image} />
  </div>
);

export default HomeViews;
