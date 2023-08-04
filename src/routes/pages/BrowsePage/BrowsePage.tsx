import React, { useContext } from 'react'
import NFTContainer from 'components/NFTContainer/NFTContainer';
import Icons from 'shared/Icons'
import { ThemeContext, themes } from 'shared/Theme/ThemeContext';
import { ThemeContextType } from 'types/ThemeContextType';

import styles from './BrowsePage.module.scss'

function BrowsePage() {
  const { theme } = useContext<ThemeContextType>(ThemeContext);

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
        <div className={`${styles.page_filter__item} ${styles.active}`}>
          <span>
            NFTs
          </span>
          <label className={styles.label__active}>
            302
          </label>
        </div>
        <div className={styles.page_filter__item}>
          <span>
            Collections
          </span>
          <label>
            67
          </label>
        </div>
      </div>
      <div className={styles.page_container}>
        <NFTContainer />
      </div>
    </div>
  )
}

export default BrowsePage