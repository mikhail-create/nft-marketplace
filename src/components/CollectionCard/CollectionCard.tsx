import React from 'react'
import Avatar from 'assets/images/avatar-placeholder.webp'
import { CollectionCardPropsType } from 'types/CollectionCardPropsType'

import styles from './CollectionCard.module.scss'

function CollectionCard({ images, amount, name, author }: CollectionCardPropsType) {

  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img srcSet={images[0]} alt='Primary' />
      </div>
      <div className={styles.card_list}>
        <div className={styles.card_list__item}>
          <img srcSet={images[1]} alt='Primary' />
        </div>
        <div className={styles.card_list__item}>
          <img srcSet={images[2]} alt='Primary' />
        </div>
        <div className={styles.card_list__item}>
          {amount + '+'}
        </div>
      </div>
      <div className={styles.card__name}>
        {name}
      </div>
      <div className={styles.card_author}>
        <img className={styles.card_author__img} srcSet={Avatar} alt='Avatar' />
        {author}
      </div>
    </div>
  )
}

export default CollectionCard