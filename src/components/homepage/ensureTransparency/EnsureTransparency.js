import Image from 'next/image'
import React from 'react'

const EnsureTransparency = () => {
  return (
<section className="py-16 mt-[20px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row-reverse  max-md:flex-col-reverse items-center max-md:gap-8">
                    {/* Video Section */}
                    <div className="w-full md:w-1/2 relative aspect-video">
                      <Image width={683} height={382} src="/homepage/ensureTransparency/dashboard.png" alt="" className=" w-full h-full object-cover max-md:-mt-[30px]"/>
                        
                           
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-[35px] font-[700] text-center text-textColor font-lato mb-4 leading-[40px]">Ensure Transparency in <br className='max-md:hidden '/> Your Shipping Process</h2>
                        <p className="text-pText text-[22px] font-lato font-[400] text-balance text-center mb-6 max-md:leading-[30px]">
                        You can easily see how each carrier works in your organization. Measure performance at a glance.                            </p>
                    
                    </div>
                </div>


              
            </div>
        </section>
  )
}

export default EnsureTransparency