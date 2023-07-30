import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FAQCardPropsType } from 'types/FAQCardPropsType';

import styles from './FAQCard.module.scss';

export const FAQCard = forwardRef<HTMLDivElement, FAQCardPropsType>(({ title, description, icon }, ref) => {
  return (
    <div className={styles.card} ref={ref}>
      <div className={styles.card_icon}>{icon}</div>
      <div className={styles.card_content}>
        <span className={styles.card_content__title}>{title}</span>
        <p className={styles.card_content__description}>{description}</p>
      </div>
    </div>
  );
});

export const MFAQCard = motion(FAQCard);