import React from "react";

const AlphaGraphics = () => {
  return (
    <div className="w-full bg-[#CEE6B4]">
      <div className="w-full max-w-[1200px] mx-auto px-[16px] py-[100px]">
        <div className="flex flex-col justify-center items-center gap-12 sm:gap-16">
          <p className="text-[#000000] font-[400] text-[18px] sm:text-[22px] lg:text-[24px] font-sans text-center italic leading-7 sm:leading-8">
            “My experience with ShipLeap always reflected PROFESSIONALISM which
            for me entailed KNOWLEDGE, QUALITY and RESPONSIVENESS. It&apos;s just
            great to know that they are there when you need them.”
          </p>
          <div className="w-[250px] sm:w-[300px] lg:w-[350px]">
            <img
              src="/Feature/alphagraphics-logo.png"
              alt=""
              className="w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlphaGraphics;
