import React from 'react'
import SectionLabel from 'components/SectionLabel/SectionLabel'
import FAQCard from 'components/FAQCard/FAQCard'
import Icons from 'shared/Icons'

import styles from './HowItWorkSection.module.scss'

function HowItWorkSection() {
  return (
    <div className={styles.section}>
      <SectionLabel
        title='How it works'
        subtitle='Find out how to get started'
      />
      <div className={styles.section_content}>
        <FAQCard
          title='Setup Your wallet'
          description='Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.'
          icon={<Icons.FAQ1 />}
        />
        <FAQCard
          title='Create Collection'
          description='Upload your work and setup your collection. Add a description, social links and floor price.'
          icon={<Icons.FAQ2 />}
        />
        <FAQCard
          title='Start Earning'
          description='Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.'
          icon={<Icons.FAQ3 />}
        />
      </div>
    </div>
  )
}

export default HowItWorkSection