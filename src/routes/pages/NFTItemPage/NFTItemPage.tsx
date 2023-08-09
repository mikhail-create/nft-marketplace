import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import NFTCard from 'components/NFTCard/NFTCard'
import Images from 'shared/Images'
import Icons from 'shared/Icons'
import { Button } from 'shared/Button/Button'
import ButtonLink from 'shared/Button/ButtonLink'
import CustomLabel from 'shared/CustomLabel/CustomLabel'

import styles from './NFTItemPage.module.scss'

const TagLabel = ({ title }: { title: string }) => {
  return (
    <label className={styles.tag__label}>
      {title}
    </label>
  )
}

function NFTItemPage() {
  useEffect(() => {
    document.title = 'NFT Item'
  }, [])

  return (
    <div className={styles.item}>
      <img className={styles.item__img} srcSet={Images.NFTBIG} alt='NFT' />
      <div className={styles.item_body}>
        <div>
          <h1 className={styles.item_body__title}>
            The Orbitians
          </h1>
          <span className={styles.item_body__date}>
            Minted on Sep 30, 2022
          </span>
        </div>
        <div className={styles.item_body__timer}>
          <span>
            Auction ends in:
          </span>
          <div className={styles.card_timer}>
            <div className={styles.card_timer__row}>
              <span>
                59
              </span>
              <span>
                :
              </span>
              <span>
                59
              </span>
              <span>
                :
              </span>
              <span>
                59
              </span>
            </div>
            <div className={styles.card_timer__values}>
              <span>
                Hours
              </span>
              <span>
                Minutes
              </span>
              <span>
                Seconds
              </span>
            </div>
            <Button
              title='Place Bid'
              size='Medium'
              isBordered={false}
            />
          </div>
        </div>
        <div className={styles.item_body__author}>
          <CustomLabel title='Created By' />
          <div className={styles.author}>
            <img srcSet={Images.AvatarPlaceholder} alt='Avatar' />

            <Link
              to='/user'
              className={styles.author__name}
            >
              Orbitian
            </Link>

          </div>
        </div>
        <div className={styles.item_body__description}>
          <CustomLabel title='Description' />
          <p>
            The Orbitians
            <br />
            is a collection of 10,000 unique NFTs on the Ethereum
            blockchain,
            <br />
            <br />
            There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.
            <br />
            <br />
            They live in a metal space machines, high up in the sky and only have one foot on Earth.
            These Orbitians are a peaceful race, but they have been at war with a group of invaders for many
            generations. The invaders are called Upside-Downs, because of their inverted bodies that live on
            the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win
            this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
          </p>
        </div>
        <div className={styles.item_body__details}>
          <CustomLabel title='Details' />
          <span className={styles.details__item}>
            <Icons.Globe fill='#858584' />
            <a href='/'>
              View on Etherscan
            </a>
          </span>
          <span className={styles.details__item}>
            <Icons.Globe fill='#858584' />
            <a href='/'>
              View Original
            </a>
          </span>
        </div>
        <div className={styles.item_body__tags}>
          <CustomLabel title='Tags' />
          <div className={styles.tags__list}>
            <TagLabel title='Animation' />
            <TagLabel title='illustration' />
            <TagLabel title='moon' />
          </div>
        </div>
      </div>
      <div className={styles.item_more}>
        <h2 className={styles.item_more__title}>
          More from this artist
        </h2>
        <div className={styles.item_more__list}>
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
          <NFTCard />
        </div>
        <div className={styles.item_more__button}>
          <ButtonLink
            title='Go To Artist Page'
            size='Medium'
            isBordered={true}
            icon={<Icons.ArrowRight fill='#A259FF' width={24} height={24} />}
            to='/user'
          />
        </div>
      </div>
    </div>
  )
}

export default NFTItemPage