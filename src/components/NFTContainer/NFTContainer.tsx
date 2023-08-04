import React from 'react'
import NFTCard from 'components/NFTCard/NFTCard'

import styles from './NFTContainer.module.scss'

function NFTContainer() {
  return (
    <div className={styles.container}>
      <NFTCard isDarker />
      <NFTCard isDarker />
      <NFTCard isDarker />
      <NFTCard isDarker />
      <NFTCard isDarker />
      <NFTCard isDarker />
    </div>
  )
}

export default NFTContainer