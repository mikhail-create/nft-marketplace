import React from 'react'
import { ReactComponent as Rocket } from 'assets/icons/rocket.svg'
import ImagePlaceholder from 'assets/images/image-placeholder.webp'
import AvatarPlaceholder from 'assets/images/avatar-placeholder.webp'
import styles from './HeroSection.module.scss'
import Button from 'shared/Button/Button'

function HeroSection() {
  return (
    <div className={styles.hero}>
      <div className={styles.hero_info}>
        <h1 className={styles.hero_info__title}>
          Discover digital art & Collect NFTs
        </h1>
        <p className={styles.hero_info__description}>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
        </p>
        <span className={styles.hero_info__button}>
          <Button
            title='Get Started'
            size='Medium'
            isBordered={false}
            icon={<Rocket fill='white' />}
          />
        </span>
        <div className={styles.hero_info__stats}>
          <span>
            240k+
          </span>
          <span>
            100k+
          </span>
          <span>
            240k+
          </span>
          <span>
            Total Sale
          </span>
          <span>
            Auctions
          </span>
          <span>
            Artists
          </span>
        </div>
      </div>
      <div className={styles.hero_preview}>
        <div className={styles.hero_preview__image}>
          <img srcSet={ImagePlaceholder} alt='Image Placeholder' />
        </div>
        <div className={styles.hero_preview__info}>
          <span>
            Space Walking
          </span>
          <span>
            <img srcSet={AvatarPlaceholder} alt='Avatar Placeholder' />
            Animakid
          </span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection