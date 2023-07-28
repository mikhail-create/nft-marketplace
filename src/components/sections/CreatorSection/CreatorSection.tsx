import React from 'react'
import Avatar from 'assets/images/avatar-placeholder-big.webp'
import SectionLabel from 'components/SectionLabel/SectionLabel'
import ArtistCard from 'components/ArtistCard/ArtistCard'
import Button from 'shared/Button/Button'
import Icons from 'shared/Icons'

import styles from './CreatorSection.module.scss'

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
            icon={<Icons.RocketLaunch width={20} height={20} stroke='#A259FF' />}
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
          icon={<Icons.RocketLaunch width={20} height={20} stroke='#A259FF' />}
        />
      </div>
    </div>
  )
}

export default CreatorSection