import React from 'react'
import styles from './CreatorSection.module.scss'
import { ReactComponent as Rocket } from 'assets/icons/rocket.svg'
import SectionLabel from 'components/SectionLabel/SectionLabel'
import Button from 'shared/Button/Button'
import ArtistCard from 'components/ArtistCard/ArtistCard'

function CreatorSection() {
  return (
    <div className={styles.creators}>
      <div className={styles.creators_header}>
        <SectionLabel title='Top creators' subtitle='Checkout Top Rated Creators on the NFT Marketplace' />
        <div className={styles.creators_header__button}>
          <Button
            title='View Rankings'
            size='Medium'
            isBordered={true}
            icon={<Rocket fill="white" />}
          />
        </div>
      </div>
      <div className={styles.creators_list}>
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
        <ArtistCard />
      </div>
      <div className={styles.creators__button}>
        <Button
          title='View Rankings'
          size='Medium'
          isBordered={true}
          icon={<Rocket fill="white" />}
        />
      </div>
    </div>
  )
}

export default CreatorSection