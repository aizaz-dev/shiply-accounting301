import Footer from '@/components/footer/Footer'
import Companies from '@/components/homepage/companies/Companies'
import ConnectedCarriers from '@/components/homepage/connectedCarriers/ConnectedCarriers'
import ConnectedSlider from '@/components/homepage/connectedSlider/ConnectedSlider'
import Customers from '@/components/homepage/customers/Customers'
import EnsureTransparency from '@/components/homepage/ensureTransparency/EnsureTransparency'
import Features from '@/components/homepage/features/Features'
import Header from '@/components/homepage/header/Header'
import Hero from '@/components/homepage/hero/Hero'
import ImageComponent from '@/components/homepage/imageComponent/ImageComponent'
import PriceComponent from '@/components/homepage/priceComponent/PriceComponent'
import TechnologyStream from '@/components/homepage/technologyStream/TechnologyStream'
import WhatIsShipLeap from '@/components/homepage/whatIsShipLeap/WhatIsShipLeap'
import React from 'react'
// Home Page
const page = () => {
  return (
    <div className='pb-[40px]'>
      {/* <Header/> */}
      <Hero/>
      <Companies/>
      <WhatIsShipLeap/>
      <Features/>
      <TechnologyStream/>
      <ImageComponent/>
      <EnsureTransparency/>
      <PriceComponent/>
      <Customers/>
      <ConnectedCarriers/>
      <ConnectedSlider/>
      {/* <Footer/> */}
    </div>
  )
}

export default page