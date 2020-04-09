import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HomeView from './Views/HomeView/HomeView';
import RegisterView from './Views/RegisterView/RegisterView';
import LoginView from './Views/LoginView/LoginView';
import Phonebook from './Views/Phonebook/Phonebook';
import NotFoundView from './Views/NotFoundView/NotFoundView';
import Layout from './Components/Layout/Layout';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import PublicRoute from './Components/PublicRoute/PublicRoute';

import routes from './routes';
import { authOperations } from './redux/authorization';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Layout>
        <Switch>
          <PublicRoute
            exact
            path={routes.Home}
            restricted={false}
            component={HomeView}
          />
          <PublicRoute
            exact
            path={routes.Register}
            restricted={true}
            component={RegisterView}
          />
          <PublicRoute
            exact
            path={routes.Login}
            restricted={true}
            component={LoginView}
          />
          <PrivateRoute exact path={routes.Contacts} component={Phonebook} />
          <Route component={NotFoundView} />
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
