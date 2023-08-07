import React, { useEffect } from 'react'
import CategoriesSection from 'components/sections/CategoriesSection/CategoriesSection'
import CreatorSection from 'components/sections/CreatorSection/CreatorSection'
import HeroSection from 'components/sections/HeroSection/HeroSection'
import TrendingSection from 'components/sections/TrendingSection/TrendingSection'
import DiscoverSection from 'components/sections/DiscoverSection/DiscoverSection'
import HighlightedNFTSection from 'components/sections/HighlightedNFTSection/HighlightedNFTSection'
import HowItWorkSection from 'components/sections/HowItWorkSection/HowItWorkSection'
import SubscribeSection from 'components/sections/SubscribeSection/SubscribeSection'

function HomePage() {
  useEffect(() => {
    document.title = 'NFT Marketplace'
  }, [])

  return (
    <div>
      <HeroSection />
      <TrendingSection />
      <CreatorSection />
      <CategoriesSection />
      <DiscoverSection />
      <HighlightedNFTSection />
      <HowItWorkSection />
      <SubscribeSection />
    </div>
  )
}

export default HomePage