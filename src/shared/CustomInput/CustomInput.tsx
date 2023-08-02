import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { useField } from 'formik';
import { CustomInputPropsType } from 'types/CustomInputPropsType';

import styles from './CustomInput.module.scss';

export const CustomInput = forwardRef<HTMLDivElement, CustomInputPropsType>(({ icon, placeholder, type, ...props }, ref) => {
  const [field, meta] = useField(props);

  return (
    <div
      className={styles.wrapper}
      ref={ref}
    >
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
})

export const MCustomInput = motion(CustomInput)
