import React from 'react'
import RankCard from 'components/RankCard/RankCard'

import styles from './RanksPage.module.scss'

function RanksPage() {
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
        <span className={`${styles.ranks_filter__item} ${styles.active}`}>
          Today
        </span>
        <span className={styles.ranks_filter__item}>
          This Week
        </span>
        <span className={styles.ranks_filter__item}>
          This Month
        </span>
        <span className={styles.ranks_filter__item}>
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
          <RankCard />
          <RankCard />
          <RankCard />
          <RankCard />
          <RankCard />
        </ul>
      </div>
    </div>
  )
}

export default RanksPage