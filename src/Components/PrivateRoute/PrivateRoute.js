import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { authSelectors } from '../../redux/authorization';

import routes from '../../routes';

const PrivateRoute = ({ component: Component, isAuth, ...routeProps }) => (
  <Route
    {...routeProps}
    render={props =>
      isAuth ? <Component {...props} /> : <Redirect to={routes.Login} />
    }
  />
);

const mapStateToProps = state => ({
  isAuth: authSelectors.getToken(state),
});

export default connect(mapStateToProps)(PrivateRoute);
