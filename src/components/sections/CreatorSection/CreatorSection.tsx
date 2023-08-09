import React, { Suspense } from 'react'
import SectionLabel from 'components/SectionLabel/SectionLabel'
import ArtistCardSkeleton from 'components/ArtistCard/ArtistCardSkeleton'
import ArtistCardList from 'components/ArtistCard/ArtistCardList'
import ButtonLink from 'shared/Button/ButtonLink'
import Icons from 'shared/Icons'

import styles from './CreatorSection.module.scss'

function CreatorSection() {
  return (
    <section className={styles.creators}>
      <div className={styles.creators_header}>
        <SectionLabel title='Top creators' subtitle='Checkout Top Rated Creators on the NFT Marketplace' />
        <div className={styles.creators_header__button}>
          <ButtonLink
            to='/ranks'
            title='View Rankings'
            size='Medium'
            isBordered={true}
            icon={<Icons.RocketLaunch width={20} height={20} stroke='#A259FF' />}
          />
        </div>
      </div>
      <div className={styles.creators_list}>
        <Suspense fallback={<ArtistCardSkeleton />}>
          <ArtistCardList />
        </Suspense>
      </div>
      <div className={styles.creators__button}>
        <ButtonLink
          to='/ranks'
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