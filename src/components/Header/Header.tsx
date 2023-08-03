import React, { useContext, useState } from 'react'
import { motion } from 'framer-motion';
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { ReactComponent as LogoText } from 'assets/icons/logo-text.svg'
import { ReactComponent as BurgerMenu } from 'assets/icons/burger-menu.svg'
import CustomNavLink from 'shared/CustomNavLink/CustomNavLink'
import ButtonLink from 'shared/Button/ButtonLink';
import Icons from 'shared/Icons'
import { ThemeContext, themes } from 'shared/Theme/ThemeContext';
import { ThemeContextType } from 'types/ThemeContextType';

import styles from './Header.module.scss'

const sidebar = {
  open: {
    y: 15,
    opacity: 1,
    display: 'flex'
  },
  closed: {
    y: -15,
    opacity: 0,
    display: 'none'
  }
};

const variants = {
  open: { rotate: -90 },
  closed: { rotate: 0 },
}

function Header() {
  const [isOpen, toggleOpen] = useState(false);
  const { theme } = useContext<ThemeContextType>(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Logo />
        <LogoText fill={theme === themes.dark ? 'white' : '#444444'} />
      </div>
      <nav className={styles.header_nav}>
        <CustomNavLink path='/' title='Marketplace' />
        <CustomNavLink path='/ranks' title='Rankings' />
        <CustomNavLink path='/connect' title='Connect a wallet' />
        <div className={styles.header_nav__button}>
          <ButtonLink
            to='/signup'
            size='Medium'
            title='Sign Up'
            isBordered={false}
            icon={<Icons.User fill='white' width={20} height={20} />}
          />
        </div>
      </nav>
      <motion.span
        className={styles.header_menu}
        onClick={() => toggleOpen(!isOpen)}
        animate={isOpen ? 'open' : 'closed'}
        variants={variants}
      >
        <BurgerMenu fill='white' />
      </motion.span>
      <motion.nav
        className={styles.header_sidebar}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebar}
      >
        <span onClick={() => toggleOpen(!isOpen)}>
          <ButtonLink
            to='/signup'
            size='Medium'
            title='Sign Up'
            isBordered={false}
            icon={<Icons.User fill='white' width={20} height={20} />}
          />
        </span>
        <span
          onClick={() => toggleOpen(!isOpen)}
          className={styles.header_sidebar__item}
        >
          <CustomNavLink path='/' title='Marketplace' />
        </span>
        <span
          onClick={() => toggleOpen(!isOpen)}
          className={styles.header_sidebar__item}
        >
          <CustomNavLink path='/ranks' title='Rankings' />
        </span>
        <span
          onClick={() => toggleOpen(!isOpen)}
          className={styles.header_sidebar__item}
        >
          <CustomNavLink path='/connect' title='Connect a wallet' />
        </span>
      </motion.nav>
    </header>
  )
}

export default Header