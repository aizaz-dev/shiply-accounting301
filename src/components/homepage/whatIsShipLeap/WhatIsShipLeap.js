import React from 'react';
import VideoPlayer from '../video/Video';

export default function WhatIsShipLeap() {
    return (
        <section className="py-16 ">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row items-center max-md:gap-8">
                    {/* Video Section */}
                    <div className="w-full md:w-1/2 relative aspect-video">
                      <VideoPlayer/>

                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button
                                className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50"
                                aria-label="Play video"
                            >
                                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Text Section */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-[35px] font-[700] text-center text-textColor font-lato mb-4">What is ShipLeap?</h2>
                        <p className="text-pText text-[22px] font-lato font-[400] text-balance text-center mb-6 max-md:leading-[30px]">
                            ShipLeap takes the headache out of your shipping process by streamlining your shipping, elevating your brand, and increasing customer satisfaction.
                        </p>
                        <button className="bg-textColor mx-auto block text-[18px] text-white px-[35px] py-[15px] rounded-[12px] font-semibold  transition-colors duration-200">
                            Schedule Live Demo
                        </button>
                    </div>
                </div>


                <div className="w-full mt-[80px] ">
                        <h2 className="text-[35px] font-[700] text-center text-textColor font-lato mb-4 max-md:leading-[42px]">Streamline Your Shipping Workflow                        </h2>
                        <p className="text-pText text-[22px] font-lato font-[400] text-center mb-6 max-md:leading-[30px]">
                        With our desktop software, you can connect to your MIS/ERP system, shop all your carrier rates, print labels, and automatically send branded email tracking to your customers.                        </p>
                      
                    </div>
            </div>
        </section>
    );
}
