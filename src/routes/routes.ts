import React from 'react';

import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ConnectPage from './pages/ConnectPage/ConnectPage';

interface Route {
  path: string;
  component: React.ComponentType<any>;
}

const routes: Route[] = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/signup',
    component: SignUpPage
  },
  {
    path: '/connect',
    component: ConnectPage
  },
];

export default routes;
