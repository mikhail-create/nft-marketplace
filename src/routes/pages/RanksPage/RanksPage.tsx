import React, { Suspense, lazy, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import { useMediaQuery } from 'react-responsive';
import RankCardSkeletion from 'components/RankCard/RankCardSkeletion';

import styles from './RanksPage.module.scss'

const RankCardList = lazy(() => import('../../../components/RankCard/RankCardList'));

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 50
};

function RanksPage() {

  const [selectedDuration, setSelectedDuration] = useState('daily'); // Инициализируем начальное состояние

  const handleDurationClick = (duration: string) => {
    setSelectedDuration(duration); // Обновляем состояние при клике на элемент
  };

  useEffect(() => {
    document.title = 'Top Creators'
  }, [])

  const isSmallScreen = useMediaQuery({ maxWidth: 835 });

  return (
    <div className={styles.ranks}>
      <div className={styles.ranks_header}>
        <h1 className={styles.ranks_header__title}>
          Top Creators
        </h1>
        <p className={styles.ranks_header__subtitle}>
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>
      </div>
      <div className={styles.ranks_filter}>
        <span
          className={`${styles.ranks_filter__item} ${selectedDuration === 'daily' && styles.active}`}
          onClick={() => handleDurationClick('daily')}
        >
          {isSmallScreen ? '1d' : 'Today'}
        </span>
        <span
          className={`${styles.ranks_filter__item} ${selectedDuration === 'weekly' && styles.active}`}
          onClick={() => handleDurationClick('weekly')}
        >
          {isSmallScreen ? '7d' : 'This Week'}
        </span>
        <span
          className={`${styles.ranks_filter__item} ${selectedDuration === 'monthly' && styles.active}`}
          onClick={() => handleDurationClick('monthly')}
        >
          {isSmallScreen ? '30d' : 'This Month'}
        </span>
        <span
          className={`${styles.ranks_filter__item} ${selectedDuration === 'all' && styles.active}`}
          onClick={() => handleDurationClick('all')}
        >
          All Time
        </span>
      </div>
      <div className={styles.ranks_list}>
        <div className={styles.ranks_list__header}>
          <span className={styles.header__rank}>
            #
          </span>
          <span className={styles.header__artist}>
            Artist
          </span>
          <span className={styles.header__change}>
            Change
          </span>
          <span className={styles.header__sales}>
            NFTs Sold
          </span>
          <span className={styles.header__volume}>
            Volume
          </span>
        </div>
        <ul>
          <Suspense fallback={<RankCardSkeletion />}>
            <RankCardList sortDuration={selectedDuration} />
          </Suspense>
        </ul>
      </div>
    </div>
  )
}

export default RanksPage