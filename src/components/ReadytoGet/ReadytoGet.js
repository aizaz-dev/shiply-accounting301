import Link from "next/link";
import React from "react";

const ReadytoGet = () => {
  return (
    <div className="w-full bg-[#1B4284]">
      <div className="w-full max-w-[1200px] mx-auto px-[16px] py-[50px] flex flex-row max-md:flex-col justify-between items-center gap-8">
        <div className="w-[60%] max-sm:w-full">
          <h1 className="font-[700] text-[28px] sm:text-[32px] lg:text-[36px] font-Lato text-white">
            Ready to get started?
          </h1>
          <p className="text-white font-[400] text-[18px] sm:text-[20px] font-Lato">
            15 day free trial. No commitment.
          </p>
        </div>
        <div className="pt-3 cursor-pointer px-3">
          <Link target='_blank' href="https://calendly.com/shipleap">
          <img
            src="/Feature/Feature.png"
            alt=""
            className="w-[150px] sm:w-[180px] lg:w-[200px] object-cover object-center"
          />
          </Link>
        </div>
        <div className="pt-3 cursor-pointer px-3">
          <Link href="/contact-us"> 
          <img
            src="/Feature/contact-sales.png"
            alt=""
            className="w-[150px] sm:w-[180px] lg:w-[200px] object-cover object-center"
          /></Link>
        </div>
      </div>
    </div>
  );
};

export default ReadytoGet;
