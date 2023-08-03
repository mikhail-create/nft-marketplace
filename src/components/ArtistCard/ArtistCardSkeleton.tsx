import React from 'react'

import styles from './ArtistCardSkeleton.module.scss'

function ArtistCardSkeleton() {
  return (
    <>
      {Array(8)
        .fill(0)
        .map((item, index) => {
          return (
            <div
              key={`${index}-artist-card-skeleton`}
              className={styles.card}
            >
              <div className={styles.card__avatar} />
              <div className={styles.card_info}>
                <span className={styles.card_info__name} />
                <div>
                  <span className={styles.card_info__price} />
                  <span className={styles.card_info__currency} />
                </div>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default ArtistCardSkeleton