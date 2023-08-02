import React, { useContext } from 'react'
import { motion, useCycle } from 'framer-motion';
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { ReactComponent as LogoText } from 'assets/icons/logo-text.svg'
import { ReactComponent as BurgerMenu } from 'assets/icons/burger-menu.svg'
import CustomNavLink from 'shared/CustomNavLink/CustomNavLink'
import Button from 'shared/Button/Button'
import ButtonLink from 'shared/Button/ButtonLink';
import Icons from 'shared/Icons'
import { ThemeContext, themes } from 'shared/Theme/ThemeContext';
import { ThemeContextType } from 'types/ThemeContextType';

import styles from './Header.module.scss'

const sidebar = {
  open: {
    y: 15,
    opacity: 1,
  },
  closed: {
    y: -15,
    opacity: 0,
  }
};

const variants = {
  open: { rotate: -90 },
  closed: { rotate: 0 },
}

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const { theme } = useContext<ThemeContextType>(ThemeContext);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Logo />
        <LogoText fill={theme === themes.dark ? 'white' : '#444444'} />
      </div>
      <nav className={styles.header_nav}>
        <CustomNavLink path='/' title='Marketplace' />
        <CustomNavLink path='/' title='Rankings' />
        <CustomNavLink path='/' title='Connect a wallet' />
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
        onClick={() => toggleOpen()}
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
        <ButtonLink
          to='/signup'
          size='Medium'
          title='Sign Up'
          isBordered={false}
          icon={<Icons.User fill='white' width={20} height={20} />}
        />
        <CustomNavLink path='/' title='Marketplace' />
        <CustomNavLink path='/' title='Rankings' />
        <CustomNavLink path='/' title='Connect a wallet' />
      </motion.nav>
    </header>
  )
}

export default Header