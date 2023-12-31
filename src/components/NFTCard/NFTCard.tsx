import React from 'react'
import { useNavigate } from 'react-router-dom';
import Images from 'shared/Images'

import styles from './NFTCard.module.scss'

interface props {
  isDarker?: boolean
}

function NFTCard({ isDarker }: props) {
  const navigate = useNavigate();

  const handleNavigate = () => navigate('/item', { replace: true });

  return (
    <div
      className={`${styles.card} ${isDarker && styles.darker}`}
      onClick={handleNavigate}
    >
      <div className={styles.card__img}>
        <img srcSet={Images.NFT0} alt='NFT' />
      </div>
      <div className={styles.card__body}>
        <div className={styles.card_title}>
          <span className={styles.card_title__name}>
            Distant Galaxy
          </span>
          <span className={styles.card_title__author}>
            <img
              srcSet={Images.AvatarPlaceholder}
              className={styles.author__img}
              alt='Avatar'
            />
            MoonDancer
          </span>
        </div>
        <div className={styles.card_stats}>
          <div className={styles.card_stats__info}>
            <span>
              Price
            </span>
            <span>
              Highest Bid
            </span>
          </div>
          <div className={styles.card_stats__price}>
            <span>
              1.63 ETH
            </span>
            <span>
              0.33 wETH
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTCard