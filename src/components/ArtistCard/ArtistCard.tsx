import React from 'react'
import styles from './ArtistCard.module.scss'
import { ArtistCardPropsType } from 'types/ArtistCardPropsType'

function ArtistCard({ rank, image, name, balance }: ArtistCardPropsType) {
  return (
    <div className={styles.card}>
      <div className={styles.card__rank}>
        {rank}
      </div>
      <div className={styles.card__avatar}>
        <img srcSet={image} alt='User Avatar' />
      </div>
      <div className={styles.card_info}>
        <span className={styles.card_info__name}>
          {name}
        </span>
        <div>
          <span className={styles.card_info__price}>
            Total Sales:
          </span>
          <span className={styles.card_info__currency}>
            {balance + ' ETH'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ArtistCard