import React, { useContext } from 'react'
import styles from './MainLayout.module.scss'
import { ThemeContext, themes } from 'shared/Theme/ThemeContext111';
import ThemeToggle from 'shared/Theme/ThemeToggle111';
import { ThemeContextType } from 'types/ThemeContextType';
import Button from 'shared/Button/Button';
import Header from 'components/Header/Header';
import { Route, Routes } from 'react-router-dom';
import routes from 'routes/routes';

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
      {/* <ThemeToggle
        onChange={handleToggle}
        value={theme === themes.dark}
      /> */}
    </div>
  )
}

export default MainLayout