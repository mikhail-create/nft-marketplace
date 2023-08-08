import React, { Suspense } from 'react'
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import routes from 'routes/routes';

import styles from './MainLayout.module.scss'

function MainLayout() {

  return (
    <div className={styles.layout}>
      <Header />
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          {routes.map(route => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.component />} // Вызов компонента
            />
          ))}
        </Routes>
      </Suspense>
      <Footer />
    </div>
  )
}

export default MainLayout