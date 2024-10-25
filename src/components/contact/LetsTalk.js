import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function LetsTalk({ hideHeader = false }) {
  return (
    <div className="w-full max-md:mt-[80px] mb-[100px] pb-[100px] bg-[url('/contact/bgcontactpri.png')] bg-no-repeat bg-[left_0px_top_250px]">
      <div className="relative max-w-[1200px] max-md:px-[28px] mx-auto px-[80px] max-tab:p-tab max-md:p-mobile py-16 space-y-16 overflow-hidden">
      {!hideHeader && (
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-bold text-indigo-600">Let&apos;s Talk</h2>
            <Link href="https://calendly.com/shipleap">
              <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
                Schedule a Demo
              </button>
            </Link>
          </div>
        )}


        <div className="grid w-full grid-cols-1 md:grid-cols-3 gap-8">
          {/* First Box */}
          <div className="text-center space-y-4 bg-white p-8 rounded-lg rounded-bl-[100px] shadow-lg">
            <div className="flex justify-center">
              <div className="p-4 rounded-full">
                <Image width={66} height={57} src="/contact/mobile.png" alt="mobile" />
              </div>
            </div>
            <h3 className="text-[20px] font-nunito font-[400] text-[#3D4459]">Give Us A Call</h3>
            <p className="text-[16px] font-lato text-[#3D4459] font-[300]">888-321-0072</p>
          </div>

          {/* Second Box */}
          <div className="text-center space-y-4 bg-white p-8 rounded-lg rounded-bl-[100px] shadow-lg">
            <div className="flex justify-center">
              <div className="p-4 rounded-full">
              <Image width={66} height={57} src="/contact/location.png" alt="mobile" />

              </div>
            </div>
            <h3 className="text-[20px] font-nunito font-[400] text-[#3D4459]">We&apos;re On The Map</h3>
            <p className="text-[16px] font-lato text-[#3D4459] font-[300]">558 Central Avenue</p>
            <p className="text-[16px] font-lato text-[#3D4459] font-[300]">New Providence, NJ 07974</p>
          </div>

          {/* Third Box */}
          <div className="text-center space-y-4 bg-white p-8 rounded-lg rounded-bl-[100px] shadow-lg">
            <div className="flex justify-center">
              <div className="p-4 rounded-full">
              <Image width={66} height={57} src="/contact/mail.png" alt="mobile" />

              </div>
            </div>
            <h3 className="text-[20px] font-nunito font-[400] text-[#3D4459]">Send Us A Message</h3>
            <p className="text-[16px] font-lato text-[#3D4459] font-[300]">info@shipleap.com</p>
          </div>
        </div>

        {/* Decorative rounded shape */}
        <div className="absolute bottom-0 left-0 w-1/3 h-1/3 rounded-tr-full -z-10"></div>
      </div>
    </div>
  )
}
