import React from 'react'
import styles from './Header.module.scss'
import { ReactComponent as Logo } from 'assets/icons/logo.svg'
import { ReactComponent as LogoText } from 'assets/icons/logo-text.svg'
import { ReactComponent as User } from 'assets/icons/user.svg'
import { ReactComponent as BurgerMenu } from 'assets/icons/burger-menu.svg'
import CustomNavLink from 'shared/CustomNavLink/CustomNavLink'
import Button from 'shared/Button/Button'

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Logo />
        <LogoText fill="white" />
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
            icon={<User fill="white" />}
          />
        </div>
      </nav>
      <span className={styles.header_menu}>
        <BurgerMenu fill="white" />
      </span>
    </header>
  )
}

export default Header