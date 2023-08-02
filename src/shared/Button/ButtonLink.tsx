import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonLinkPropsType } from 'types/ButtonPropsType';

import styles from './Button.module.scss';

function ButtonLink({ title, size, icon, isBordered, isWhite, to }: ButtonLinkPropsType) {
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
    <Link to={to} className={buttonClasses}>
      {icon && <span className={styles.icon}>{icon}</span>}
      <span>{title}</span>
    </Link>
  );
}

export default ButtonLink;
