import React from 'react';
import Header from '../Header/Header';

import styles from './layout.module.css';

const Layout = ({ children }) => (
  <div className={styles.layout}>
    <Header />
    {children}
  </div>
);

export default Layout;
