import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import HomeViews from './Views/HomeViews/HomeViews';
import RegisterViews from './Views/RegisterViews/RegisterViews';
import LoginViews from './Views/LoginViews/LoginViews';
import Layout from './Components/Layout/Layout';
// import NotFound from './pages/Notfound';

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
          <Route exact path={routes.Home} component={HomeViews}></Route>
          <Route exact path={routes.Register} component={RegisterViews}></Route>
          <Route path={routes.Login} component={LoginViews}></Route>
          {/* <Route exact path={routes.Register} component={RegisterViews}></Route>
      <Route path={routes.Login} component={LoginViews}></Route>
      <Route component={NotFound} /> */}
        </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
