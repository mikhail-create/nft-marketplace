import React, { useContext } from 'react'
import styles from './MainLayout.module.scss'
import { ThemeContext, themes } from 'shared/Theme/ThemeContext';
import ThemeToggle from 'shared/Theme/ThemeToggle';
import { ThemeContextType } from 'types/ThemeContextType';
import Button from 'shared/Button/Button';
import Header from 'components/Header/Header';

function MainLayout() {
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
      {/* <ThemeToggle
        onChange={handleToggle}
        value={theme === themes.dark}
      /> */}
    </div>
  )
}

export default MainLayout