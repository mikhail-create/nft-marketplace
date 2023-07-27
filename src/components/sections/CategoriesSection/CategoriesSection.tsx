import React from 'react'
import SectionLabel from 'components/SectionLabel/SectionLabel'
import CategoriesCard from 'components/CategoriesCard/CategoriesCard'

import styles from './CategoriesSection.module.scss'

function CategoriesSection() {
  return (
    <div className={styles.categories}>
      <SectionLabel title='Browse Categories' />
      <nav className={styles.categories_list}>
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
        <CategoriesCard />
      </nav>
    </div>
  )
}

export default CategoriesSection