import React from 'react'

import styles from './CustomLabel.module.scss'

function CustomLabel({ title }: { title: string }) {
  return (
    <label className={styles.label}>
      {title}
    </label>
  )
}

export default CustomLabel