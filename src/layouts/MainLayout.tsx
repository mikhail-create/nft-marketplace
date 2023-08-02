import React, { useContext } from 'react'
import Header from 'components/Header/Header';
import Footer from 'components/Footer/Footer';
import { ThemeContext, themes } from 'shared/Theme/ThemeContext';
import ThemeToggle from 'shared/Theme/ThemeToggle';
import { ThemeContextType } from 'types/ThemeContextType';
import { Route, Routes } from 'react-router-dom';
import routes from 'routes/routes';

import styles from './MainLayout.module.scss'

function MainLayout(child: any) {
  // Получаем текущую тему и функцию переключения из контекста
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);

  const handleToggle = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
    } else if (theme === themes.dark) {
      setTheme(themes.light);
    }
  };

  return (
    <div className={styles.layout}>
      <ThemeToggle
        onChange={handleToggle}
        value={theme === themes.dark}
      />
      <Header />
      <Routes>
        {routes.map(route => (
          <Route
            key={route.path}
            path={route.path}
            element={<route.component />} // Вызов компонента
          />
        ))}
      </Routes>
      <Footer />
    </div>
  )
}

export default MainLayout