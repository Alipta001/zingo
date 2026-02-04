import CartPage from '@/component/cart_me/CartPage'
import Footer from '@/component/globalLayout/footer/footer'
import Navbar from '@/component/globalLayout/navbar/navbar'
import ProtectedRoute from '@/component/auth/ProtectedRoute'
import React from 'react'


export default function Page() {
  return (
    <ProtectedRoute requiredPage="/auth/signIn">
    <>
    <Navbar></Navbar>
    <CartPage></CartPage>
    <Footer></Footer>
    </>
    </ProtectedRoute>
  )
}
