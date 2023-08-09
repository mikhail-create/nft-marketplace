import React from 'react'
import Images from 'shared/Images'
import { Button } from 'shared/Button/Button'
import Icons from 'shared/Icons'

import styles from './HighlightedNFTSection.module.scss'

function HighlightedNFTSection() {
  return (
    <section className={styles.highlighted}>
      <div className={styles.highlighted__bg}>
        <img srcSet={Images.NFTHighlighted} alt='BG' />
      </div>
      <div className={styles.highlighted__wrapper}></div>
      <div className={styles.highlighted_card}>
        <div className={styles.highlighted_card__info}>
          <span className={styles.card__author}>
            <img
              srcSet={Images.AvatarPlaceholder}
              alt='Avatar'
              className={styles.author__img}
            />
            Shroomie
          </span>
          <span className={styles.card__title}>Magic Mashrooms</span>
          <div className={styles.card__button}>
            <Button
              title='See NFT'
              isBordered={false}
              size='Medium'
              icon={<Icons.Eye fill='#A259FF' width={20} height={20} />}
              isWhite={true}
            />
          </div>
        </div>
        <div className={styles.highlighted_card__time}>
          <span>
            Auction ends in:
          </span>
          <div className={styles.card_timer}>
            <div className={styles.card_timer__row}>
              <span>
                59
              </span>
              <span>
                :
              </span>
              <span>
                59
              </span>
              <span>
                :
              </span>
              <span>
                59
              </span>
            </div>
            <div className={styles.card_timer__values}>
              <span>
                Hours
              </span>
              <span>
                Minutes
              </span>
              <span>
                Seconds
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HighlightedNFTSection