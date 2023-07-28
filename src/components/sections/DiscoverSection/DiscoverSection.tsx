import React from 'react'
import SectionLabel from 'components/SectionLabel/SectionLabel'
import NFTCard from 'components/NFTCard/NFTCard'
import Button from 'shared/Button/Button'
import Icons from 'shared/Icons'

import styles from './DiscoverSection.module.scss'

function DiscoverSection() {
  return (
    <div className={styles.discover}>
      <div className={styles.discover_header}>
        <SectionLabel title='Discover More NFTs' subtitle='Explore new trending NFTs' />
        <div className={styles.discover_header__button}>
          <Button
            title='See All'
            size='Medium'
            isBordered={true}
            icon={<Icons.Eye width={20} height={20} stroke='#A259FF' />}
          />
        </div>
      </div>
      <div className={styles.discover_list}>
        <span>
          <NFTCard />
        </span>
        <span>
          <NFTCard />
        </span>
        <span>
          <NFTCard />
        </span>
      </div>
      <div className={styles.discover__button}>
        <Button
          title='See All'
          size='Medium'
          isBordered={true}
          icon={<Icons.Eye width={20} height={20} stroke='white' />}
        />
      </div>
    </div>
  )
}

export default DiscoverSection