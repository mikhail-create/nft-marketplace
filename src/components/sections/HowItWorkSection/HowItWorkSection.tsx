import React from 'react'
import { motion } from 'framer-motion'
import SectionLabel from 'components/SectionLabel/SectionLabel'
import { MFAQCard } from 'components/FAQCard/FAQCard'
import Icons from 'shared/Icons'

import styles from './HowItWorkSection.module.scss'

const cardAnimation = {
  hidden: {
    y: 100,
    opacity: 0,
  },
  visible: (custom: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: custom * 0.2 }
  })
}

function HowItWorkSection() {
  return (
    <motion.section
      className={styles.section}
      initial='hidden'
      whileInView='visible'
      viewport={{ amount: 0.2 }}
    >
      <SectionLabel
        title='How it works'
        subtitle='Find out how to get started'
      />
      <div className={styles.section_content}>
        <MFAQCard
          variants={cardAnimation}
          custom={1}
          title='Setup Your wallet'
          description='Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'
          icon={<Icons.FAQ1 />}
        />
        <MFAQCard
          variants={cardAnimation}
          custom={2}
          title='Create Collection'
          description='Upload your work and setup your collection. Add a description, social links and floor price.'
          icon={<Icons.FAQ2 />}
        />
        <MFAQCard
          variants={cardAnimation}
          custom={3}
          title='Start Earning'
          description='Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
          icon={<Icons.FAQ3 />}
        />
      </div>
    </motion.section>
  )
}

export default HowItWorkSection