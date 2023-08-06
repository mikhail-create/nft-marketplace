import React from 'react'
import CollectionCard from 'components/CollectionCard/CollectionCard'
import IMG0 from 'assets/images/collection/animals-collection-0.webp'
import IMG1 from 'assets/images/collection/animals-collection-1.webp'
import IMG2 from 'assets/images/collection/animals-collection-2.webp'

import styles from './CollectionContainer.module.scss'

function CollectionContainer() {
  return (
    <div className={styles.container}>
      <CollectionCard
        images={[IMG0, IMG1, IMG2]}
        amount={1025}
        name='DSGN Animals'
        author='MrFox'
        isDarker
      />
      <CollectionCard
        images={[IMG0, IMG1, IMG2]}
        amount={1025}
        name='DSGN Animals'
        author='MrFox'
        isDarker
      />
      <CollectionCard
        images={[IMG0, IMG1, IMG2]}
        amount={1025}
        name='DSGN Animals'
        author='MrFox'
        isDarker
      />
      <CollectionCard
        images={[IMG0, IMG1, IMG2]}
        amount={1025}
        name='DSGN Animals'
        author='MrFox'
        isDarker
      />
      <CollectionCard
        images={[IMG0, IMG1, IMG2]}
        amount={1025}
        name='DSGN Animals'
        author='MrFox'
        isDarker
      />
      <CollectionCard
        images={[IMG0, IMG1, IMG2]}
        amount={1025}
        name='DSGN Animals'
        author='MrFox'
        isDarker
      />
    </div>
  )
}

export default CollectionContainer