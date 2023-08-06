import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion';
import { ThemeContextType } from 'types/ThemeContextType';

import { ThemeContext, themes } from './ThemeContext';

import styles from './ThemeToggle.module.scss'

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 50
};

function ThemeToggle() {
  // Получаем текущую тему и функцию переключения из контекста
  const { theme, setTheme } = useContext<ThemeContextType>(ThemeContext);
  const [isDark, setIsDark] = useState(true)

  const toggleSwitch = () => {
    if (theme === themes.light) {
      setTheme(themes.dark);
      setIsDark(!isDark)
    } else if (theme === themes.dark) {
      setTheme(themes.light);
      setIsDark(!isDark)
    }
  };

  return (
    <div className={styles.switch} data-isdark={isDark} onClick={toggleSwitch}>
      <motion.div className={styles.handle} layout transition={spring}>
        <label>
          {theme}
        </label>
      </motion.div>
    </div>
  )
}

export default ThemeToggle