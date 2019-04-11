import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from 'src/pages/login';
import Home from 'src/pages/home';

import { loginUrl } from 'src/const/routeUrls';

const AppRoutes = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path={loginUrl} component={Login} />
  </Switch>
);

export default AppRoutes;
