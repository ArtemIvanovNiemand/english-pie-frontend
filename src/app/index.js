import React from 'react';
import { HashRouter as Router } from 'react-router-dom';

import AppRoutes from './appRoutes';

const App = () => (
  <Router>
    <AppRoutes />
  </Router>
);

export default App;
