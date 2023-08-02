import React from 'react'
import { CustomInputPropsType } from 'types/CustomInputPropsType';

import styles from './CustomInput.module.scss'

function CustomInput({ icon, placeholder, type }: CustomInputPropsType) {
  return (
    <div>
      {
        icon &&
        <label className={styles.icon}>
          {icon}
        </label>
      }
      <input
        className={styles.input}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export default CustomInput