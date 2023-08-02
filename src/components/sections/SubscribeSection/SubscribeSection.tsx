import React from 'react'
import { useMediaQuery } from 'react-responsive'
import Images from 'shared/Images'
import { Button } from 'shared/Button/Button'
import Icons from 'shared/Icons'

import styles from './SubscribeSection.module.scss'

function SubscribeSection() {

  const isSmallScreen = useMediaQuery({ maxWidth: 1279 });

  return (
    <section className={styles.section}>
      <div className={styles.section_content}>
        <div className={styles.section_content__img}>
          <img srcSet={Images.Newsletter} alt='Newsletter' />
        </div>
        <div className={styles.section_content__info}>
          <span className={styles.title}>
            Join Our Weekly Digest
          </span>
          <span className={styles.subtitle}>
            Get exclusive promotions & updates straight to your inbox.
          </span>
          <div className={styles.form}>
            <input placeholder='Enter your email here' />
            <Button
              title='Subscribe'
              size={isSmallScreen ? 'Small' : 'Medium'}
              isBordered={false}
              icon={<Icons.EnvelopeSimple fill='white' width={20} height={20} />}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SubscribeSection