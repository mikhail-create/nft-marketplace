import React from 'react'
import { ArtistCardProps } from 'types/ArtistCardProps.type'

import styles from './ArtistCard.module.scss'

function ArtistCard({ rank, avatar, username, volume }: ArtistCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.card__rank}>
        {rank}
      </div>
      <div className={styles.card__avatar}>
        <img srcSet={avatar} alt={`${username} Avatar`} />
      </div>
      <div className={styles.card_info}>
        <span className={styles.card_info__name}>
          {username}
        </span>
        <div>
          <span className={styles.card_info__price}>
            Total Sales:
          </span>
          <span className={styles.card_info__currency}>
            {volume + ' ETH'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default ArtistCard