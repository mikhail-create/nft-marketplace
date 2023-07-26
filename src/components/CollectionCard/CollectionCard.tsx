import React from 'react'
import styles from './CollectionCard.module.scss'
import Avatar from 'assets/images/avatar-placeholder.webp'
import { CollectionCardType } from 'types/CollectionCardType'

function CollectionCard({ images, amount, name, author }: CollectionCardType) {

  return (
    <div className={styles.card}>
      <img className={styles.card__img} srcSet={images[0]} alt='Primary Image' />
      <div className={styles.card_list}>
        <img className={styles.card_list__item} srcSet={images[1]} alt='Primary Image' />
        <img className={styles.card_list__item} srcSet={images[2]} alt='Primary Image' />
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