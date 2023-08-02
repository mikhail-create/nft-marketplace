import React, { useEffect } from 'react'
import { Form, Formik } from 'formik'
import { motion } from 'framer-motion'
import { SignUpSchema } from '_helpers/yup'
import Images from 'shared/Images'
import Icons from 'shared/Icons'
import { MCustomInput } from 'shared/CustomInput/CustomInput'
import { SignUpType } from 'types/SignUpType'

import styles from './SignUpPage.module.scss'

const elemAnimation = {
  hidden: {
    x: -50,
    opacity: 0,
  },
  visible: (custom: number) => ({
    x: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

function SignUpPage() {
  useEffect(() => {
    document.title = 'Create account'
  }, [])

  const handleSubmit = (values: SignUpType): any => {
    console.log(values);
  };

  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      className={styles.page}
    >
      <div className={styles.page__preview}>
        <img srcSet={Images.SignUpPlaceholder} alt='SignUp Placeholder' />
      </div>
      <div className={styles.page_content}>
        <motion.div
          className={styles.page_content__header}
          variants={elemAnimation}
          custom={1}
        >
          <h1 className={styles.title}>
            Create account
          </h1>
          <p className={styles.subtitle}>
            Welcome! enter your details and start creating, collecting and selling NFTs.
          </p>
        </motion.div>
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
              <MCustomInput
                icon={<Icons.User fill='#BDBDBD' height={20} width={20} />}
                placeholder='Username'
                name='username'
                id='username'
                type='text'
                variants={elemAnimation}
                custom={2}
              />
              <MCustomInput
                icon={<Icons.EnvelopeSimple fill='#BDBDBD' height={20} width={20} />}
                placeholder='Email Address'
                name='email'
                id='email'
                type='email'
                variants={elemAnimation}
                custom={3}
              />
              <MCustomInput
                icon={<Icons.LockKey fill='#BDBDBD' height={20} width={20} />}
                placeholder='Password'
                name='password'
                id='password'
                type='password'
                variants={elemAnimation}
                custom={4}
              />
              <MCustomInput
                icon={<Icons.LockKey fill='#BDBDBD' height={20} width={20} />}
                placeholder='Confirm Password'
                name='passwordRepeat'
                id='passwordRepeat'
                type='password'
                variants={elemAnimation}
                custom={5}
              />
              <motion.button
                className={styles.button}
                type='submit'
                disabled={!isValid}
                variants={elemAnimation}
                custom={6}
              >
                Create account
              </motion.button>
            </Form>
          )}
        </Formik>
      </div>
    </motion.div >
  )
}

export default SignUpPage