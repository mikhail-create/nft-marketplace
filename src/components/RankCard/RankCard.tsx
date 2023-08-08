import React from 'react'
import Images from 'shared/Images'
import { RankCardProps } from 'types/RankCardProps.type'

import styles from './RankCard.module.scss'

function RankCard({ rank, username, change, NFTSolds, volume }: RankCardProps) {
  return (
    <li className={styles.card}>
      <div className={styles.card__rank}>
        {rank}
      </div>
      <div className={styles.card_artist}>
        <img srcSet={Images.AvatarPlaceholderBig} alt='Avatar' />
        <span className={styles.card_artist__name}>
          {username}
        </span>
      </div>
      <div className={styles.card__change}>
        {'+ ' + change + '%'}
      </div>
      <div className={styles.card__sales}>
        {NFTSolds}
      </div>
      <div className={styles.card__volume}>
        {volume + ' ETH'}
      </div>
    </li>
  )
}

export default RankCard