import Image from 'next/image'
import React from 'react'

const ImageComponent = () => {
  return (
    <div className='px-0  w-full mt-[80px]'>
<Image width={1600} height={1000} className='w-full h-full object-cover' src="/homepage/image.png" alt="image" />
    </div>
  )
}

export default ImageComponent