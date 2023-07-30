import React from 'react'
import { FAQCardPropsType } from 'types/FAQCardPropsType'

import styles from './FAQCard.module.scss'

function FAQCard({ title, description, icon }: FAQCardPropsType) {
  return (
    <div className={styles.card}>
      <div className={styles.card_icon}>
        {icon}
      </div>
      <div className={styles.card_content}>
        <span className={styles.card_content__title}>
          {title}
        </span>
        <p className={styles.card_content__description}>
          {description}
        </p>
      </div>
    </div>
  )
}

export default FAQCard