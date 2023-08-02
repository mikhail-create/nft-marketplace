import React from 'react';

import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';

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
];

export default routes;
