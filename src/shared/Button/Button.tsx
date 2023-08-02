import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { ButtonPropsType } from 'types/ButtonPropsType';

import styles from './Button.module.scss';

export const Button = forwardRef<HTMLButtonElement, ButtonPropsType>(({ title, size, icon, isBordered, isWhite }, ref) => {
  let buttonClasses = styles.button;

  if (size === 'Large') {
    buttonClasses += ` ${styles.button__large}`;
  } else if (size === 'Medium') {
    buttonClasses += ` ${styles.button__medium}`;
  } else if (size === 'Small') {
    buttonClasses += ` ${styles.button__small}`;
  }

  if (isBordered) {
    buttonClasses += ` ${styles.bordered}`;
  }

  if (isWhite) {
    buttonClasses += ` ${styles.white}`;
  }

  return (
    <button
      className={buttonClasses}
      ref={ref}
    >
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{title}</span>
    </button>
  );
})

export const MButton = motion(Button);