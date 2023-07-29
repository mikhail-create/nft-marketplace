import React from 'react'
import CategoriesSection from 'components/sections/CategoriesSection/CategoriesSection'
import CreatorSection from 'components/sections/CreatorSection/CreatorSection'
import HeroSection from 'components/sections/HeroSection/HeroSection'
import TrendingSection from 'components/sections/TrendingSection/TrendingSection'
import DiscoverSection from 'components/sections/DiscoverSection/DiscoverSection'
import HighlightedNFTSection from 'components/sections/HighlightedNFTSection/HighlightedNFTSection'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrendingSection />
      <CreatorSection />
      <CategoriesSection />
      <DiscoverSection />
      <HighlightedNFTSection />
    </div>
  )
}

export default HomePage