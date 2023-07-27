import React from 'react'

export const themes = {
  dark: 'dark',
  light: 'light',
}

interface ThemeContextType {
  theme: any;
  setTheme: any;
}

export const ThemeContext = React.createContext<ThemeContextType>({ theme: 'Light', setTheme: () => { }, })
