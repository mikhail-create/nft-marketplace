import React, { useContext } from 'react'
import cls from './MainLayout.module.scss'
import { ThemeContext, themes } from 'shared/theme/ThemeContext';
import ThemeToggle from 'shared/theme/ThemeToggle';
import { ThemeContextType } from 'types/ThemeContextType';

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
    <div className={cls.layout}>
      <div>
        MAIN
      </div>
      <h1>H1</h1>
      <h2>H2</h2>
      <h3>H3</h3>
      <h4>H4</h4>
      <h5>H5</h5>
      <ThemeToggle
        onChange={handleToggle}
        value={theme === themes.dark}
      />
    </div>
  )
}

export default MainLayout