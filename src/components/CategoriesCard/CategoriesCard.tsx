import React from 'react'
import IMG from 'assets/images/collection-placeholder.webp'
import { ReactComponent as PaintBrush } from 'assets/icons/categories/paint-brush.svg'

import styles from './CategoriesCard.module.scss'

function CategoriesCard() {
  return (
    <div className={styles.card}>
      <div className={styles.card_img}>
        <div className={styles.card_img__wrapper}></div>
        <img srcSet={IMG} alt='Collection' />
        <PaintBrush className={styles.card_img__icon} stroke='white' />
      </div>
      <div className={styles.card__name}>
        Art
      </div>
    </div>
  )
}

export default CategoriesCard