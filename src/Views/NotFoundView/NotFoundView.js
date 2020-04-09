import React from 'react';
import { Link } from 'react-router-dom';

import routes from '../../routes';
import imageNotFound from '../../images/server-error.jpg';

const styles = {
  container: { textAlign: 'center' },
  image: { paddingTop: 100 },
};

const NotFoundView = () => (
  <div style={styles.container}>
    <img
      src={imageNotFound}
      alt="cat detective"
      width="320"
      style={styles.image}
    />
    <p>
      Такого адреса не существует. Вот <Link to={routes.Home}>ccылка</Link> на
      главную страницу.
    </p>
  </div>
);

export default NotFoundView;
