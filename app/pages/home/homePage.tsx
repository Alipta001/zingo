'use client';

import React from 'react'
import Navbar from '@/component/globalLayout/navbar/navbar'
import Banner from '@/component/homeLayout/banner/banner'
import HowItWorks from '@/component/homeLayout/howItWorks/howItWorks'
import SearchedSection from '@/component/homeLayout/searchedSection/searchedSection'
import ResturantsSection from '@/component/homeLayout/resturantsSectionMainPage/resturantSection/resturantsSection'
import PreferedPicks from '@/component/homeLayout/preferedPicks/preferedPicks'
import NearbyFoods from '@/component/homeLayout/nearbyFoods/nearbyFoods'
import OfferSection from '@/component/homeLayout/offersSection/offerSection'
import Footer from '@/component/globalLayout/footer/footer'

export default function HomePage() {
  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <HowItWorks></HowItWorks>
    <SearchedSection></SearchedSection>
    <ResturantsSection />
    <PreferedPicks></PreferedPicks>
    <NearbyFoods></NearbyFoods>
    <OfferSection></OfferSection>
    <Footer></Footer>
    </>
  )
}
