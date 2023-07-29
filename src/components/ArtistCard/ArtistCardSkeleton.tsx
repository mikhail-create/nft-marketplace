import React from 'react'

import styles from './ArtistCardSkeleton.module.scss'

function ArtistCardSkeleton() {
  return (
    <div className={styles.card}>
      <div className={styles.card__avatar}>
      </div>
      <div className={styles.card_info}>
        <span className={styles.card_info__name}>
        </span>
        <div>
          <span className={styles.card_info__price}>
          </span>
          <span className={styles.card_info__currency}>
          </span>
        </div>
      </div>
    </div>
  )
}

export default ArtistCardSkeleton