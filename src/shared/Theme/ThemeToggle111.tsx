import React from 'react'
import styles from './ThemeToggle111.module.scss'

export interface Props {
  value: boolean,
  onChange: any
}

const ThemeToggle = ({ value, onChange }: Props) => (
  <label className={styles.switch} htmlFor='toggler'>
    <input
      id='toggler'
      type='checkbox'
      onClick={onChange}
      checked={value}
      readOnly
    />
    <span className={styles.slider} />
    <span className={styles.wave} />
  </label>
)

export default ThemeToggle