import React from "react";

const ConnectwithMobile = () => {
  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className="w-full max-w-[1200px] mx-auto px-[16px] pb-[50px] flex flex-row max-md:flex-col justify-between items-center gap-6">
        <div className="w-[60%] max-sm:w-full text-center">
          <h1 className="text-[#1b4284] font-[400] text-[20px] sm:text-[22px] lg:text-[24px] font-Lato">
            Connect with Our Mobile Apps
          </h1>
          <p className="text-[#646464] font-[400] text-[16px] sm:text-[17px] lg:text-[18px] font-Lato">
            Track your shipments and check historical information.
          </p>
        </div>
        <div className="pt-3 cursor-pointer">
          <img
            src="/Feature/app-store-qaa68h1q0moosttuqkbyal4ccrpfet9m7ur50ozwao.png"
            alt="App Store"
            className="w-[200px] sm:w-[230px] lg:w-[250px] object-cover object-center"
          />
        </div>
        <div className="pt-3 cursor-pointer">
          <img
            src="/Feature/google-play-badge-qaa68h1q0mop0703hbpvkuvn5pho4gzj1l7in0v1oq.png"
            alt="Google Play"
            className="w-[200px] sm:w-[230px] lg:w-[250px] object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectwithMobile;
