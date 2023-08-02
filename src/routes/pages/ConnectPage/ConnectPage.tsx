import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Images from 'shared/Images'
import Icons from 'shared/Icons'
import { MButton } from 'shared/Button/Button'

import styles from './ConnectPage.module.scss'

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

function ConnectPage() {
  useEffect(() => {
    document.title = 'Connect wallet'
  }, [])
  
  return (
    <motion.div
      initial='hidden'
      whileInView='visible'
      className={styles.page}
    >
      <div className={styles.page__preview}>
        <img
          srcSet={Images.ConnectPlaceholder}
          alt='Connect Placeholder'
        />
      </div>
      <div className={styles.page_content}>
        <motion.div
          className={styles.page_content__header}
          variants={elemAnimation}
          custom={1}
        >
          <h1 className={styles.title}>
            Connect wallet
          </h1>
          <p className={styles.subtitle}>
            Choose a wallet you want to connect. There are several wallet providers.
          </p>
        </motion.div>
        <div className={styles.page_content__actions}>
          <MButton
            variants={elemAnimation}
            custom={2}
            title='Metamask'
            size='Medium'
            isBordered={true}
            icon={<Icons.Metamask width={40} height={40} />}
          />
          <MButton
            variants={elemAnimation}
            custom={3}
            title='Metamask'
            size='Medium'
            isBordered={true}
            icon={<Icons.WalletConnect width={40} height={40} />}
          />
          <MButton
            variants={elemAnimation}
            custom={4}
            title='Metamask'
            size='Medium'
            isBordered={true}
            icon={<Icons.Coinbase width={40} height={40} />}
          />
        </div>
      </div>
    </motion.div >
  )
}

export default ConnectPage