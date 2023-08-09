import React from 'react'
import Images from 'shared/Images'
import { Button } from 'shared/Button/Button'
import Icons from 'shared/Icons'
import CustomLabel from 'shared/CustomLabel/CustomLabel'

import styles from './UserPage.module.scss'

function UserPage() {
  return (
    <div className={styles.page}>
      <div className={styles.page_banner}>
        <div className={styles.page_banner__wrapper} />
        <img className={styles.page_banner__img} srcSet={Images.ProfileBanner} alt='Banner' />
      </div>
      <div className={styles.page_avatar}>
        <img className={styles.page_avatar__img} srcSet={Images.AvatarPlaceholder} alt='Avatar' />
      </div>
      <div className={styles.page_user}>
        <h1 className={styles.page_user__name}>
          Animakid
        </h1>
        <div className={styles.page_user__actions}>
          <span>
            <Button
              title='0xc0E3...B79C'
              size='Medium'
              isBordered={false}
              icon={<Icons.Copy fill='white' width={20} height={24} />}
            />
          </span>
          <span>
            <Button
              title='Follow'
              size='Medium'
              isBordered={true}
              icon={<Icons.Plus fill='#A259FF' width={20} height={24} />}
            />
          </span>
        </div>
        <div className={styles.page_user__stats}>
          <span>
            250k+
          </span>
          <span>
            50+
          </span>
          <span>
            3000+
          </span>
          <label>
            Volume
          </label>
          <label>
            NFTs Sold
          </label>
          <label>
            Followers
          </label>
        </div>
        <div className={styles.page_user__bio}>
          <CustomLabel title='Bio' />
          <p>
            The internet's friendliest designer kid.
          </p>
        </div>
        <div className={styles.page_user__links}>
          <CustomLabel title='Links' />
          <div className={styles.list}>
            <Icons.Globe fill='#858584' width={32} height={32} />
            <Icons.DiscordLogo fill='#858584' width={32} height={32} />
            <Icons.YoutubeLogo fill='#858584' width={32} height={32} />
            <Icons.TwitterLogo fill='#858584' width={32} height={32} />
            <Icons.InstagramLogo fill='#858584' width={32} height={32} />
          </div>
        </div>
      </div>
      <div className={styles.page_filters}>
        
      </div>
    </div>
  )
}

export default UserPage