import React from 'react';

import HomePage from './pages/HomePage';

interface Route {
  path: string;
  component: React.ComponentType<any>;
}

const routes: Route[] = [
  {
    path: '/',
    component: HomePage
  },
];

export default routes;
