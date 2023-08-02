import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import { SignUpSchema } from '_helpers/yup'
import Images from 'shared/Images'
import CustomInput from 'shared/CustomInput/CustomInput'
import Icons from 'shared/Icons'
import { SignUpType } from 'types/SignUpType'

import styles from './SignUpPage.module.scss'

function SignUpPage() {
  useEffect(() => {
    document.title = 'Create account'
  }, [])

  const handleSubmit = (values: SignUpType) => {
    console.log(values);
  }

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
        <Formik
          initialValues={{
            username: '',
            email: '',
            password: '',
            passwordRepeat: '',
          }}
          onSubmit={handleSubmit}
          validationSchema={SignUpSchema}
        >
          {({ isSubmitting, isValid }) => (
            <Form className={styles.page_content__form}>
              <CustomInput
                icon={<Icons.User fill='#BDBDBD' height={20} width={20} />}
                placeholder='Username'
                name='username'
                id='username'
                type='text'
              />
              <CustomInput
                icon={<Icons.EnvelopeSimple fill='#BDBDBD' height={20} width={20} />}
                placeholder='Email Address'
                name='email'
                id='email'
                type='email'
              />
              <CustomInput
                icon={<Icons.LockKey fill='#BDBDBD' height={20} width={20} />}
                placeholder='Password'
                name='password'
                id='password'
                type='password'
              />
              <CustomInput
                icon={<Icons.LockKey fill='#BDBDBD' height={20} width={20} />}
                placeholder='Confirm Password'
                name='passwordRepeat'
                id='passwordRepeat'
                type='password'
              />
              <button
                className={styles.button}
                type='submit'
                disabled={!isValid}
              >
                Create account
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div >
  )
}

export default SignUpPage