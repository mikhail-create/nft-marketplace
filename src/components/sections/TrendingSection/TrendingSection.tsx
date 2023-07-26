import React from 'react'
import styles from './TrendingSection.module.scss'
import SectionLabel from 'components/SectionLabel/SectionLabel'
import CollectionCard from 'components/CollectionCard/CollectionCard'
import IMG0 from 'assets/images/collection/animals-collection-0.webp'
import IMG1 from 'assets/images/collection/animals-collection-1.webp'
import IMG2 from 'assets/images/collection/animals-collection-2.webp'

function TrendingSection() {
  return (
    <div className={styles.trending}>
      <SectionLabel title='Trending Collection' subtitle='Checkout our weekly updated trending collection.' />
      <div className={styles.trending_list}>
        <div className={styles.trending_list__item}>
          <CollectionCard
            images={[IMG0, IMG1, IMG2]}
            amount={1025}
            name='DSGN Animals'
            author='MrFox'
          />
        </div>
        <div className={styles.trending_list__item}>
          <CollectionCard
            images={[IMG0, IMG1, IMG2]}
            amount={1025}
            name='Magic Mushrooms'
            author='Shroomie'
          />
        </div>
        <div className={styles.trending_list__item}>
          <CollectionCard
            images={[IMG0, IMG1, IMG2]}
            amount={1025}
            name='Disco Machines'
            author='BeKind2Robots'
          />
        </div>
      </div>
    </div>
  )
}

export default TrendingSection