import React from 'react'
import ImagePlaceholder from 'assets/images/image-placeholder.webp'
import AvatarPlaceholder from 'assets/images/avatar-placeholder.webp'
import { Button } from 'shared/Button/Button'
import Icons from 'shared/Icons'

import styles from './HeroSection.module.scss'

function HeroSection() {
  return (
    <section className={styles.hero}>
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
            icon={<Icons.RocketLaunch fill='white' width={20} height={20} />}
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
        <img
          className={styles.hero_preview__img}
          srcSet={ImagePlaceholder}
          alt='NFT Placeholder'
        />
        <div className={styles.hero_preview__info}>
          <span className={styles.nft__name}>
            Space Walking
          </span>
          <span className={styles.nft_author}>
            <img
              srcSet={AvatarPlaceholder}
              alt='Avatar Placeholder'
              className={styles.nft_author__img}
            />
            Animakid
          </span>
        </div>
      </div>
    </section>
  )
}

export default HeroSection