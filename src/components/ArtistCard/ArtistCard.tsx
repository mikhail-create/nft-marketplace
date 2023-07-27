import React from 'react'
import Avatar from 'assets/images/avatar-placeholder-big.webp'
import styles from './ArtistCard.module.scss'

function ArtistCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card__rank}>
        1
      </div>
      <div className={styles.card__avatar}>
        <img srcSet={Avatar} alt='User Avatar' />
      </div>
      <div className={styles.card_info}>
        <span className={styles.card_info__name}>
          Keepitreal
        </span>
        <div>
          <span className={styles.card_info__price}>
            Total Sales:
          </span>
          <span className={styles.card_info__currency}>
            34.53 ETH
          </span>
        </div>  
      </div>
    </div>
  )
}

export default ArtistCard