import React from 'react'
import styles from './SectionLabel.module.scss'
import { SectionLabelType } from 'types/SectionLabelType'

function SectionLabel({ title, subtitle }: SectionLabelType) {
  return (
    <div className={styles.section_label}>
      <span className={styles.section_label__title}>
        {title}
      </span>
      <span className={styles.section_label__subtitle}>
        {subtitle}
      </span>
    </div>
  )
}

export default SectionLabel