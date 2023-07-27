import React from 'react'
import { CategoriesCardPropsType } from 'types/CategoriesCardPropsType'
import { Link } from 'react-router-dom'

import styles from './CategoriesCard.module.scss'

function CategoriesCard({ icon, name, image, path }: CategoriesCardPropsType) {
  return (
    <Link to={path} className={styles.card}>
      <div className={styles.card_img}>
        <div className={styles.card_img__wrapper}></div>
        <img srcSet={image} alt='Collection' />
        <div className={styles.card_img__icon}>
          {icon}
        </div>
      </div>
      <div className={styles.card__name}>
        {name}
      </div>
    </Link>
  )
}

export default CategoriesCard