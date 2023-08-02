import React from 'react'
import Images from 'shared/Images'
import CustomInput from 'shared/CustomInput/CustomInput'
import Icons from 'shared/Icons'

import styles from './SignUpPage.module.scss'

function SignUpPage() {
  return (
    <div className={styles.page}>
      <div className={styles.page__preview}>
        <img srcSet={Images.SignUpPlaceholder} alt='SignUp Placeholder' />
      </div>
      <div className={styles.page_content}>
        <div className={styles.page_content__header}>
          <h1 className={styles.title}>
            Create account
          </h1>
          <p className={styles.subtitle}>
            Welcome! enter your details and start creating, collecting and selling NFTs.
          </p>
        </div>
        <form className={styles.page_content__form}>
          <CustomInput
            icon={<Icons.User fill='#BDBDBD' height={20} width={20} />}
            placeholder='Username'
            type='text'
          />
          <CustomInput
            icon={<Icons.EnvelopeSimple fill='#BDBDBD' height={20} width={20} />}
            placeholder='Email Address'
            type='email'
          />
          <CustomInput
            icon={<Icons.LockKey fill='#BDBDBD' height={20} width={20} />}
            placeholder='Password'
            type='password'
          />
          <CustomInput
            icon={<Icons.LockKey fill='#BDBDBD' height={20} width={20} />}
            placeholder='Confirm Password'
            type='password'
          />
          <button className={styles.button} type='submit'>
            Create account
          </button>
        </form>
      </div>
    </div>
  )
}

export default SignUpPage