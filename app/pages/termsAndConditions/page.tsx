import Footer from '@/component/globalLayout/footer/footer'
import Navbar from '@/component/globalLayout/navbar/navbar'
import TermsAndConditions from '@/component/termsAndConditon/termsAndConditonSection/termsAndConditonSection'
import React from 'react'

export default function Page() {
  return (
    <>
    <Navbar />
    <TermsAndConditions />
    <Footer />
    </>
  )
}
