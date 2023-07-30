import React, { Suspense, lazy } from 'react'
import Avatar from 'assets/images/avatar-placeholder-big.webp'
import SectionLabel from 'components/SectionLabel/SectionLabel'
import ArtistCardSkeleton from 'components/ArtistCard/ArtistCardSkeleton'
import Button from 'shared/Button/Button'
import Icons from 'shared/Icons'

import styles from './CreatorSection.module.scss'

const ArtistCard = lazy(() => import('../../../components/ArtistCard/ArtistCard'));

const artists = [
  {
    id: 1,
    rank: 1,
    name: 'Grace',
    balance: '56.78',
  },
  {
    id: 2,
    rank: 2,
    name: 'John',
    balance: '102.50',
  },
  {
    id: 3,
    rank: 3,
    name: 'Emma',
    balance: '35.20',
  },
  {
    id: 4,
    rank: 4,
    name: 'Michael',
    balance: '71.90',
  },
  {
    id: 5,
    rank: 5,
    name: 'Sophia',
    balance: '89.10',
  },
  {
    id: 6,
    rank: 6,
    name: 'Liam',
    balance: '42.30',
  },
  {
    id: 7,
    rank: 7,
    name: 'Olivia',
    balance: '66.40',
  },
  {
    id: 8,
    rank: 8,
    name: 'Noah',
    balance: '28.70',
  },
  {
    id: 9,
    rank: 9,
    name: 'Ava',
    balance: '95.80',
  },
  {
    id: 10,
    rank: 10,
    name: 'William',
    balance: '53.20',
  },
  {
    id: 11,
    rank: 11,
    name: 'Isabella',
    balance: '77.10',
  },
  {
    id: 12,
    rank: 12,
    name: 'James',
    balance: '88.50',
  },
];

function CreatorSection() {
  return (
    <section className={styles.creators}>
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
        {artists.map((artist) => (
          <Suspense key={artist.id} fallback={<ArtistCardSkeleton />}>
            <ArtistCard
              rank={artist.rank}
              image={Avatar}
              name={artist.name}
              balance={artist.balance}
            />
          </Suspense>
        ))}
      </div>
      <div className={styles.creators__button}>
        <Button
          title='View Rankings'
          size='Medium'
          isBordered={true}
          icon={<Icons.RocketLaunch width={20} height={20} stroke='#A259FF' />}
        />
      </div>
    </section>
  )
}

export default CreatorSection