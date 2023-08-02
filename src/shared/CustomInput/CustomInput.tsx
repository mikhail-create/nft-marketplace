import React from 'react';
import { useField } from 'formik';
import { CustomInputPropsType } from 'types/CustomInputPropsType';

import styles from './CustomInput.module.scss';

function CustomInput({ icon, placeholder, type, ...props }: CustomInputPropsType) {
  const [field, meta] = useField(props);

  return (
    <div className={styles.wrapper}>
      {meta.touched && meta.error && <div className={styles.error}>{meta.error}</div>}
      <label>
        {icon && <label className={styles.icon}>{icon}</label>}
        <input
          {...field}
          className={`${styles.input} ${meta.error ? styles.errorInput : ''}`}
          placeholder={placeholder}
          type={type}
        />
      </label>
    </div>
  );
}

export default CustomInput;
