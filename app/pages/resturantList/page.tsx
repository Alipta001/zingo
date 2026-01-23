import Footer from '@/component/globalLayout/footer/footer'
import Navbar from '@/component/globalLayout/navbar/navbar'
import RestaurantSection from '@/component/resturantList/resturantSection/resturantSection'
import React from 'react'
export const metadata = {
  title: 'Restaurants Near You | Order Food Online with Zingo',
  description: 'Discover top restaurants near you and order food online with Zingo. Browse menus, compare prices, track live orders, and enjoy fast doorstep delivery.',
  alternates: {
    canonical: 'https://www.zingo.com/restaurants/',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.zingo.com/restaurants/',
    title: 'Restaurants Near You | Order Food Online with Zingo',
    description: 'Find the best restaurants near you. Order food online with Zingo and get fast delivery from trusted local restaurants.',
    images: [
      {
        url: 'https://www.zingo.com/assets/images/zingo-restaurants-og.png',
        width: 1200,
        height: 630,
        alt: 'Zingo Restaurants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Restaurants Near You | Zingo Food Delivery',
    description: 'Order food online from the best restaurants near you with Zingo. Fast delivery, live tracking, and great choices.',
    images: ['https://www.zingo.com/assets/images/zingo-restaurants-og.png'],
  },
};
export default function Page() {
  return (
    <>
    <Navbar />
    <RestaurantSection />
    <Footer />
    </>
  )
}
