import React, { useContext, useEffect, useState } from 'react'
import { motion } from 'framer-motion';
import NFTContainer from 'components/NFTContainer/NFTContainer';
import CollectionContainer from 'components/CollectionContainer/CollectionContainer';
import Icons from 'shared/Icons'
import { ThemeContext, themes } from 'shared/Theme/ThemeContext';
import { ThemeContextType } from 'types/ThemeContextType';

import styles from './BrowsePage.module.scss'

const spring = {
  type: 'spring',
  stiffness: 500,
  damping: 50
};

function BrowsePage() {
  useEffect(() => {
    document.title = 'Browse Marketplace'
  }, [])

  const { theme } = useContext<ThemeContextType>(ThemeContext);
  const [isNftSelected, setIsNftSelected] = useState(true)

  const toggleSwitch = () => setIsNftSelected(!isNftSelected);

  return (
    <div className={styles.page}>
      <div className={styles.page_header}>
        <h1 className={styles.page_header__title}>
          Browse Marketplace
        </h1>
        <p className={styles.page_header__subtitle}>
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>
        <div className={styles.page_header__search}>
          <input
            placeholder='Search your favourite NFTs'
          />
          <Icons.MagnifyingGlass
            fill={theme === themes.dark ? 'white' : '#444444'}
            width={24}
            height={24}
          />
        </div>
      </div>
      <div className={styles.page__divider} />
      <div className={styles.page_filter}>
        <div
          className={`${styles.page_filter__item} ${isNftSelected && styles.active}`}
          onClick={toggleSwitch}
        >
          <span>
            NFTs
          </span>
          <label className={styles.label__active}>
            302
          </label>
        </div>
        <div
          className={`${styles.page_filter__item} ${!isNftSelected && styles.active}`}
          onClick={toggleSwitch}
        >
          <span>
            Collections
          </span>
          <label>
            67
          </label>
        </div>
      </div>
      <div className={styles.filter__switch} data-isnftselected={!isNftSelected} onClick={toggleSwitch}>
        <motion.div className={styles.filter__handle} layout transition={spring} />
      </div>
      <div className={styles.page_container}>
        {
          isNftSelected
            ?
            <NFTContainer />
            :
            <CollectionContainer />
        }
      </div>
    </div >
  )
}

export default BrowsePage