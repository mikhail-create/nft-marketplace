import React from 'react'
import Images from 'shared/Images'

import styles from './RankCard.module.scss'

function RankCard() {
  return (
    <li className={styles.card}>
      <div className={styles.card__rank}>
        1
      </div>
      <div className={styles.card_artist}>
        <img srcSet={Images.AvatarPlaceholderBig} alt='Avatar' />
        <span className={styles.card_artist__name}>
          Jaydon Ekstrom
        </span>
      </div>
      <div className={styles.card__change}>
        +1.41%
      </div>
      <div className={styles.card__sales}>
        602
      </div>
      <div className={styles.card__volume}>
        12.4 ETH
      </div>
    </li>
  )
}

export default RankCard