import React from 'react';
import { Route, Switch } from 'react-router-dom';

// import HomePage from './pages/HomePage';
// import MovieDetailsPage from './pages/MovieDetailsPage'
// import MoviesPage from './pages/MoviesPage';
import HomeViews from './Views/HomeViews/HomeViews';
import RegisterViews from './Views/RegisterViews/RegisterViews';
import Layout from './Components/Layout/Layout';
// import NotFound from './pages/Notfound';

import routes from './routes';

const App = () => (
  <Layout>
    <Switch>
      <Route exact path={routes.Home} component={HomeViews}></Route>
      <Route exact path={routes.Register} component={RegisterViews}></Route>
      {/* <Route exact path={routes.Register} component={RegisterViews}></Route> */}
      {/* <Route exact path={routes.Register} component={RegisterViews}></Route>
      <Route path={routes.Login} component={LoginViews}></Route>
      <Route component={NotFound} /> */}
    </Switch>
  </Layout>
);

export default App;
