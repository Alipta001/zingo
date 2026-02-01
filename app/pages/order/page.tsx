import Footer from '@/component/globalLayout/footer/footer'
import Navbar from '@/component/globalLayout/navbar/navbar'
import OrderSection from '@/component/orderPage/orderSection/orderSection'
import React from 'react'

export default function Page() {
  return (
    <>
    <Navbar></Navbar>
    <OrderSection></OrderSection>
    <Footer />
    </>
  )
}
