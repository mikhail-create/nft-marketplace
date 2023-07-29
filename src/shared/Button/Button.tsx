import React from 'react';
import { ButtonPropsType } from 'types/ButtonPropsType';

import styles from './Button.module.scss';

function Button({ title, size, icon, isBordered, isWhite }: ButtonPropsType) {
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
    <button className={buttonClasses}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{title}</span>
    </button>
  );
}

export default Button;
