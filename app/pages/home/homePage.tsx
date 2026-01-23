import React from 'react'
import Navbar from '@/component/globalLayout/navbar/navbar'
import Banner from '@/component/homeLayout/banner/banner'
import HowItWorks from '@/component/homeLayout/howItWorks/howItWorks'
import SearchedSection from '@/component/homeLayout/searchedSection/searchedSection'
import ResturantsSection from '@/component/homeLayout/resturantsSection/resturantsSection'
import PreferedPicks from '@/component/homeLayout/preferedPicks/preferedPicks'
import NearbyFoods from '@/component/homeLayout/nearbyFoods/nearbyFoods'
import OfferSection from '@/component/homeLayout/offersSection/offerSection'
import Footer from '@/component/globalLayout/footer/footer'
import { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Zingo | Best Food Delivery App to Order Food Online',
  description: 'Zingo is a fast-food delivery app to order food online from top restaurants near you.',
  alternates: {
    canonical: 'https://www.zingo.com/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.zingo.com/',
    title: 'Zingo | Best Food Delivery App to Order Food Online',
    description: 'Zingo is a fast-food delivery app to order food online from top restaurants near you.',
    images: [
      {
        url: 'https://www.zingo.com/Zingologo.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zingo | Best Food Delivery App',
    description: 'Order food online with Zingo. Fast delivery from top restaurants near you.',
    images: ['https://www.zingo.com/Zingologo.png'],
  },
}
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
