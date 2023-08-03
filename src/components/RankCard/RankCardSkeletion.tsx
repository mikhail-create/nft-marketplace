import React from 'react'

import styles from './RankCardSkeletion.module.scss'

function RankCardSkeletion() {
  return (
    <>
      {Array(8)
        .fill(0)
        .map((item, index) => {
          return (
            <li
              key={`${index}-rank-card-skeleton`}
              className={styles.card}
            >
              <div className={styles.card__rank} />
              <div className={styles.card_artist}>
                <div className={styles.card_artist__img} />
                <span className={styles.card_artist__name} />
              </div>
              <div className={styles.card__field} />
              <div className={styles.card__field} />
              <div className={styles.card__field} />
            </li>
          )
        })
      }
    </>
  )
}

export default RankCardSkeletion