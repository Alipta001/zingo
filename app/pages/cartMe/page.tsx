import CartPage from '@/component/cart_me/CartPage'
import Footer from '@/component/globalLayout/footer/footer'
import Navbar from '@/component/globalLayout/navbar/navbar'
import React from 'react'


export default function Page() {
  return (
    <>
    <Navbar></Navbar>
    <CartPage></CartPage>
    <Footer></Footer>
    </>
  )
}
