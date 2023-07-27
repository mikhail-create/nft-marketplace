import React from 'react'
import { SectionLabelPropsType } from 'types/SectionLabelPropsType'

import styles from './SectionLabel.module.scss'

function SectionLabel({ title, subtitle }: SectionLabelPropsType) {
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