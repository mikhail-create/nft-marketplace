import React from 'react';

import HomePage from './pages/HomePage';
import SignUpPage from './pages/SignUpPage/SignUpPage';
import ConnectPage from './pages/ConnectPage/ConnectPage';
import RanksPage from './pages/RanksPage/RanksPage';
import BrowsePage from './pages/BrowsePage/BrowsePage';
import NFTItemPage from './pages/NFTItemPage/NFTItemPage';

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
  {
    path: '/ranks',
    component: RanksPage
  },
  {
    path: '/browse',
    component: BrowsePage
  },
  {
    path: 'item',
    component: NFTItemPage
  },
  {
    path: 'item/:id',
    component: NFTItemPage
  }
];

export default routes;
