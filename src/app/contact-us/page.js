import ContactForm from '@/components/contact/contactForm'
import LetsTalk from '@/components/contact/LetsTalk'
import React from 'react'
import { FaPlay } from 'react-icons/fa'

const page = () => {
  return (
    <div>
        <div className="bg-[url('/contact/contact.png')] bg-no-repeat bg-cover bg-center w-full ">
          <div className="w-full max-w-[1200px] mx-auto px-[16px] flex flex-row max-lg:flex-col py-[250px] max-sm:py-[100px]">
            <div className="w-[50%] flex flex-col max-lg:w-full max-lg:items-center max-lg:justify-center">
              <h3 className="font-Nunito font-[600] text-white text-[16px] sm:text-[18px] lg:text-[20px]">
                SAVE TIME, SHIP SMARTER
              </h3>
              <img
                src="/Integration/blue-line.png"
                alt="line"
                className=" w-[200px] sm:w-[250px] object-cover object-center mt-6"
              />
              <h1 className="font-Lato font-[600] text-white text-[40px] sm:text-[50px] lg:text-[60px] mt-2">
                CONTACT-US</h1>
              <p className="cursor-pointer font-Nunito font-[400] text-white text-[20px] sm:text-[24px] lg:text-[30px]">
                Transform your shipping with a smarter,
                <br className="hidden max-lg:block" /> faster, more efficient
                process
              </p>
              <h2 className="cursor-pointer font-Nunito font-[400] text-white text-[22px] sm:text-[26px] lg:text-[30px]">
                LEARN MORE
              </h2>
            </div>
            {/* <div className="w-[50%] flex flex-row max-sm:flex-col gap-4 max-sm:gap-2 pt-4 items-end justify-end max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:gap-16">
              <button className="bg-white text-[#6dd400] font-Lato font-[700] text-[16px] sm:text-[18px] lg:text-[20px] rounded-[15px] px-[40px] py-[20px]">
                Schedule a Demo
              </button>
              <button className="flex justify-center items-center gap-2 bg-transparent text-white font-Lato font-[700] text-[16px] sm:text-[18px] lg:text-[20px] rounded-[15px] px-[40px] py-[20px] border-2 border-white border-solid">
                <FaPlay color="white" />
                Watch Video
              </button>
            </div> */}
          </div>
        </div>
        <ContactForm/>
        <LetsTalk/>
    </div>
  )
}

export default page