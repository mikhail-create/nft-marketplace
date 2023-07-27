import CreatorSection from 'components/sections/CreatorSection/CreatorSection'
import HeroSection from 'components/sections/HeroSection/HeroSection'
import TrendingSection from 'components/sections/TrendingSection/TrendingSection'
import React from 'react'

function HomePage() {
  return (
    <div>
      <HeroSection />
      <TrendingSection />
      <CreatorSection />
    </div>
  )
}

export default HomePage