import React from 'react'
import { FiPhone, FiMapPin, FiSend } from 'react-icons/fi'

export default function LetsTalk() {
  return (
    <div className="relative max-w-[1200px] mx-auto px-[80px] max-tab:p-tab max-md:p-mobile py-16 space-y-16 overflow-hidden">
      <div className="text-center space-y-6">
        <h2 className="text-4xl font-bold text-indigo-600">Let&apos;s Talk</h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50">
          Schedule a Demo
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center space-y-4 bg-white p-6 rounded-lg rounded-bl-[80px] shadow-lg">
          <div className="flex justify-center">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FiPhone className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold">Give Us A Call</h3>
          <p className="text-gray-600">888-321-0072</p>
        </div>
        
        <div className="text-center space-y-4 bg-white p-6 rounded-lg rounded-bl-[80px] shadow-lg">
          <div className="flex justify-center">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FiMapPin className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold">We&apos;re On The Map</h3>
          <p className="text-gray-600">558 Central Avenue</p>
          <p className="text-gray-600">New Providence, NJ 07974</p>
        </div>
        
        <div className="text-center space-y-4 bg-white p-6 rounded-lg rounded-bl-[80px] shadow-lg">
          <div className="flex justify-center">
            <div className="bg-indigo-100 p-4 rounded-full">
              <FiSend className="h-8 w-8 text-indigo-600" />
            </div>
          </div>
          <h3 className="text-xl font-semibold">Send Us A Message</h3>
          <p className="text-gray-600">info@shipleap.com</p>
        </div>
      </div>

      {/* Decorative rounded shape */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-cyan-50 rounded-tr-full -z-10"></div>
    </div>
  )
}