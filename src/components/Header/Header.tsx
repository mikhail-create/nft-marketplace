import React from 'react'
import { motion, useCycle } from 'framer-motion';
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { ReactComponent as LogoText } from 'assets/icons/logo-text.svg'
import { ReactComponent as BurgerMenu } from 'assets/icons/burger-menu.svg'
import CustomNavLink from 'shared/CustomNavLink/CustomNavLink'
import Button from 'shared/Button/Button'
import Icons from 'shared/Icons'

import styles from './Header.module.scss'

const sidebar = {
  open: {
    clipPath: 'circle(400px at 50% 0)',
    transition: {
      type: 'spring',
      stiffness: 50,
      restDelta: 2
    }
  },
  closed: {
    clipPath: 'circle(0px at 50% 0)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40
    }
  }
};

function Header() {
  const [isOpen, toggleOpen] = useCycle(false, true);

  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Logo />
        <LogoText fill='white' />
      </div>
      <nav className={styles.header_nav}>
        <CustomNavLink path='/' title='Marketplace' />
        <CustomNavLink path='/' title='Rankings' />
        <CustomNavLink path='/' title='Connect a wallet' />
        <div className={styles.header_nav__button}>
          <Button
            size='Medium'
            title='Sign Up'
            isBordered={false}
            icon={<Icons.User fill='white' width={20} height={20} />}
          />
        </div>
      </nav>
      <span className={styles.header_menu} onClick={() => toggleOpen()}>
        <BurgerMenu fill='white' />
      </span>
      <motion.nav
        className={styles.header_sidebar}
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={sidebar}
      >
        <CustomNavLink path='/' title='Marketplace' />
        <CustomNavLink path='/' title='Rankings' />
        <CustomNavLink path='/' title='Connect a wallet' />
      </motion.nav>
    </header>
  )
}

export default Header