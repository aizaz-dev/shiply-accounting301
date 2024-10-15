'use client'
import CarrierInfo from "@/components/signup/carrierInfo/CarrierInfo";
import React, { useState } from "react";

const ContactInfo = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      

      <div className=" w-full">
        <div className=" w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
       
          














































          <div className="div">
            <form action="" className=" flex flex-col">
              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato "
              >
                Company Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className=" w-[80%] max-md:w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                Address <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                City <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                State <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                Zip Code <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                Admin Email <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                General Email{" "}
              </label>
              <input
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2 "
              >
                Website
              </label>
              <input
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                Phone <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                Which carriers do you use? (List your preferred carrier first){" "}
              </label>
              <input
              placeholder='UPS,FEDEX,USPS'
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm  placeholder:text-blue-500"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato  mt-2"
              >
                How many shipments do you do per day?{" "}
              </label>
              <input
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato  mt-2"
              >
                What kind of thermal printer do you have on you shipping
                computer?{" "}
              </label>
              <input
              placeholder='Zebra?WhatModel? '
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm  placeholder:text-blue-500"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2 "
              >
                Which ERP/MIS system do you use?{" "}
              </label>
              <input
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2 "
              >
                Do you have a scale connected to your shipping computer?{" "}
              </label>
              <input
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2 "
              >
                What size label do you print shipping labels on{" "}
              </label>
              <input
                placeholder='4" x 6.25"'
                type="text"
                className="w-full p-3 outline-none border border-solid border-black rounded-sm  placeholder:text-blue-500"
              />
            </form>
          </div>

          {/* <div className="div px-[150px] max-md:px-[100px] max-sm:px-[40px] py-[50px]">
            <hr className=" w-full border-1 border-solid  border-black " />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ContactInfo;
