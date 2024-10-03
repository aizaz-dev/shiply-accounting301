import LetsTalk from '@/components/contact/LetsTalk'
import React from 'react'

const page = () => {
  return (
    <>
    <div className=" w-full h-[200px] bg-[#5F47F2]"></div>

    <div className="w-full bg-[#FFFFFF]">
  <div className="w-full max-w-[1200px] mx-auto px-[16px] py-[50px]">
    <div className="w-full flex flex-row max-md:flex-col">
      <div className="w-[50%] max-md:w-full flex flex-col max-md:justify-center max-md:items-center">
        <h3 className="font-lato font-[400] text-black text-[30px] sm:text-[35px] md:text-[40px]">
          Refer a Friend
        </h3>
        <h1 className="font-lato font-[700] text-[70px] sm:text-[80px] md:text-[90px] text-[#229E2E]">
          Get $150
        </h1>
        <h3 className="font-lato font-[400] text-black text-[30px] sm:text-[35px] md:text-[40px]">
          When They Come Onboard
        </h3>
      </div>
      <div className="w-[50%] max-md:w-full">
        <img
          src="/referral/shipleap-referral.png"
          alt="Referral Program"
          className="object-center object-cover w-full h-auto"
        />
      </div>
    </div>
  </div>
</div>


<div className="w-full bg-white">
  <div className="w-full max-w-[1200px] mx-auto px-[16px] sm:px-[40px] py-[50px] shadow-md">
    <h1 className="text-center font-lato font-[400] text-black text-[30px] sm:text-[35px] md:text-[40px]">
      Sharing is Caring
    </h1>
    <p className="text-center font-lato font-[400] text-black text-[16px] sm:text-[18px] md:text-[19px]">
      We will reach out to any contacts below.
    </p>
    <p className="text-center font-lato font-[400] text-black text-[16px] sm:text-[18px] md:text-[19px]">
      When they come onboard, we will send you $150.
    </p>

    {/* Contact #1 */}
    <div className="py-12">
      <div className="bg-[#229E2E] w-full h-1 flex justify-center items-center">
        <div className="w-fit bg-white px-4 font-lato font-[400] text-black text-[24px] sm:text-[28px] md:text-[31px]">
          Contact #1
        </div>
      </div>
    </div>

    {/* Contact #1 Fields */}
    <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">Company</h1>
    <input type="text" placeholder="Enter company name you are referring" className="w-full p-4 bg-[#FAFAFA] outline-none" />
    <div className="gap-1 max-md:gap-0 flex flex-row max-md:flex-col">
      <div className="w-[50%] max-md:w-full">
        <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">First Name</h1>
        <input type="text" placeholder="John" className="w-full p-4 bg-[#FAFAFA] outline-none" />
      </div>
      <div className="w-[50%] max-md:w-full">
        <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">Last Name</h1>
        <input type="text" placeholder="Smith" className="w-full p-4 bg-[#FAFAFA] outline-none" />
      </div>
    </div>
    <div className="gap-1 max-md:gap-0 flex flex-row max-md:flex-col">
      <div className="w-[50%] max-md:w-full">
        <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">Email</h1>
        <input type="email" placeholder="john@testwebsite.com" className="w-full p-4 bg-[#FAFAFA] outline-none" />
      </div>
      <div className="w-[50%] max-md:w-full">
        <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">Phone</h1>
        <input type="tel" placeholder="123-123-1234" className="w-full p-4 bg-[#FAFAFA] outline-none" />
      </div>
    </div>

    {/* Contact #2 */}
    <div className="py-12">
      <div className="bg-[#229E2E] w-full h-1 flex justify-center items-center">
        <div className="w-fit bg-white px-4 font-lato font-[400] text-black text-[24px] sm:text-[28px] md:text-[31px]">
          Contact #2
        </div>
      </div>
    </div>

    {/* Contact #2 Fields */}
    <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">Company</h1>
    <input type="text" placeholder="Enter company name you are referring" className="w-full p-4 bg-[#FAFAFA] outline-none" />
    <div className="gap-1 max-md:gap-0 flex flex-row max-md:flex-col">
      <div className="w-[50%] max-md:w-full">
        <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">First Name</h1>
        <input type="text" placeholder="John" className="w-full p-4 bg-[#FAFAFA] outline-none" />
      </div>
      <div className="w-[50%] max-md:w-full">
        <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">Last Name</h1>
        <input type="text" placeholder="Smith" className="w-full p-4 bg-[#FAFAFA] outline-none" />
      </div>
    </div>
    <div className="gap-1 max-md:gap-0 flex flex-row max-md:flex-col">
      <div className="w-[50%] max-md:w-full">
        <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">Email</h1>
        <input type="email" placeholder="john@testwebsite.com" className="w-full p-4 bg-[#FAFAFA] outline-none" />
      </div>
      <div className="w-[50%] max-md:w-full">
        <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">Phone</h1>
        <input type="tel" placeholder="123-123-1234" className="w-full p-4 bg-[#FAFAFA] outline-none" />
      </div>
    </div>

    {/* Your Contact Info */}
    <div className="py-12">
      <div className="bg-[#229E2E] w-full h-1 flex justify-center items-center">
        <div className="w-fit bg-white px-4 font-lato font-[400] text-black text-[24px] sm:text-[28px] md:text-[31px]">
          Your Contact Info
        </div>
      </div>
    </div>

    {/* Your Contact Fields */}
    <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">Your name</h1>
    <input type="text" placeholder="Enter YOUR name" className="w-full p-4 bg-[#FAFAFA] outline-none" />
    <div className="gap-1 max-md:gap-0 flex flex-row max-md:flex-col">
      <div className="w-[50%] max-md:w-full">
        <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">Email</h1>
        <input type="email" placeholder="john@testwebsite.com" className="w-full p-4 bg-[#FAFAFA] outline-none" />
      </div>
      <div className="w-[50%] max-md:w-full">
        <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">Phone</h1>
        <input type="tel" placeholder="123-123-1234" className="w-full p-4 bg-[#FAFAFA] outline-none" />
      </div>
    </div>

    {/* Comments and Send Button */}
    <h1 className="py-2 text-[#060101] text-[14px] sm:text-[15px] font-[400]">Comments</h1>
    <textarea placeholder="Comments" className="w-full p-4 bg-[#FAFAFA] outline-none"></textarea>
    <button className="bg-[#2DAA3A] w-full text-white font-lato font-[500] text-[16px] text-center py-4 mt-4 border-solid border-[#2DAA3A] hover:bg-[#7232DA] border-4 transition-all ease-in-out duration-150">
      SEND
    </button>
  </div>
</div>



<div className="div">
    <LetsTalk/>
</div>


    </>
  )
}

export default page