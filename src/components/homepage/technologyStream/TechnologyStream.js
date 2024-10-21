import Link from 'next/link'
import React from 'react'

const TechnologyStream = () => {
  return (
    <div className='w-full mt-[80px]  '>
    <div className="w-full max-w-[1200px] mx-auto max-tab:p-tab max-md:p-mobile  ">
    <h2 className="text-[35px] font-[700] text-center text-textColor font-lato mb-4 max-md:leading-[40px]">Technology That Streamlines <br className='max-md:hidden'/>
    Your Shipping</h2>
    <p className="text-pText text-[22px] font-lato font-[400] text-center mb-6 max-md:leading-[30px]">
    Use your current UPS, FedEx, and other carrier accounts to shop  <br className='max-md:hidden'/>
rates live, weigh packages, print labels and track all your shipments from your desktop <br  className='max-md:hidden'/>
or mobile device    </p>
<Link target="_blank" href="https://calendly.com/shipleap">
    <button className="bg-textColor mx-auto block text-[18px] text-white px-[35px] py-[15px] rounded-[12px] font-semibold  transition-colors duration-200">
        Schedule Live Demo
    </button>
    </Link>
</div>
</div>
  )
}

export default TechnologyStream