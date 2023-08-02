import React, { useContext } from 'react'
import { useMediaQuery } from 'react-responsive';
import Icons from 'shared/Icons'
import { Button } from 'shared/Button/Button'
import { ThemeContext, themes } from 'shared/Theme/ThemeContext';
import { ThemeContextType } from 'types/ThemeContextType';

import styles from './Footer.module.scss'

function Footer() {
  const isSmallScreen = useMediaQuery({ maxWidth: 835 });
  const { theme } = useContext<ThemeContextType>(ThemeContext);

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__wrapper}>
        <div className={styles.footer_column}>
          <span className={styles.footer_column__title}>
            <Icons.Logo />
            <Icons.LogoText fill={theme === themes.dark ? 'white' : '#444444'} />
          </span>
          <span className={styles.footer_column__item}>
            NFT marketplace UI created with Anima for Figma.
          </span>
          <span className={styles.footer_column__item}>
            Join our community
          </span>
          <div className={styles.footer_column__media}>
            <Icons.DiscordLogo width={32} height={32} fill='#858584' />
            <Icons.YoutubeLogo width={32} height={32} fill='#858584' />
            <Icons.TwitterLogo width={32} height={32} fill='#858584' />
            <Icons.InstagramLogo width={32} height={32} fill='#858584' />
          </div>
        </div>
        <div className={styles.footer_column}>
          <span className={styles.footer_column__title}>
            Explore
          </span>
          <span className={styles.footer_column__item}>
            Marketplace
          </span>
          <span className={styles.footer_column__item}>
            Rankings
          </span>
          <span className={styles.footer_column__item}>
            Connect a wallet
          </span>
        </div>
        <div className={styles.footer_column}>
          <span className={styles.footer_column__title}>
            Join our weekly digest
          </span>
          <span className={styles.footer_column__item}>
            Get exclusive promotions & updates straight to your inbox.
          </span>
          <div className={styles.form}>
            <input placeholder='Enter your email here' />
            <Button
              title='Subscribe'
              size={isSmallScreen ? 'Small' : 'Medium'}
              isBordered={false}
              icon={<Icons.EnvelopeSimple fill='white' width={20} height={20} />}
            />
          </div>
        </div>
      </div>
      <div className={styles.footer__divider} />
      <span className={styles.footer__info}>
        Ⓒ NFT Market. Use this template freely.
      </span>
    </footer >
  )
}

export default Footer