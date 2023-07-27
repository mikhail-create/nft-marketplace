import React from 'react'
import styles from './CreatorSection.module.scss'
import { ReactComponent as Rocket } from 'assets/icons/rocket.svg'
import Avatar from 'assets/images/avatar-placeholder-big.webp'
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
            icon={<Rocket fill='white' />}
          />
        </div>
      </div>
      <div className={styles.creators_list}>
        <ArtistCard
          rank={1}
          image={Avatar}
          name='Keepitreal'
          balance='34.53'
        />
        <ArtistCard
          rank={2}
          image={Avatar}
          name='Keepitreal'
          balance='34.53'
        />
        <ArtistCard
          rank={3}
          image={Avatar}
          name='Keepitreal'
          balance='34.53'
        />
        <ArtistCard
          rank={4}
          image={Avatar}
          name='Keepitreal'
          balance='34.53'
        />
        <ArtistCard
          rank={5}
          image={Avatar}
          name='Keepitreal'
          balance='34.53'
        />
      </div>
      <div className={styles.creators__button}>
        <Button
          title='View Rankings'
          size='Medium'
          isBordered={true}
          icon={<Rocket fill='white' />}
        />
      </div>
    </div>
  )
}

export default CreatorSection