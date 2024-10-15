"use client";
import CarrierInfo from "@/components/signup/carrierInfo/CarrierInfo";
import ContactInfo from "@/components/signup/contactinfo/ContactInfo";
import FedExInfo from "@/components/signup/fedexinfo/FedExInfo";
import Sucess from "@/components/signup/form-sucess/Sucess";
import Miscellaneous from "@/components/signup/miscellaneous/Miscellaneous";
import Payment from "@/components/signup/payment/Payment";
import UpsInfo from "@/components/signup/upsinfo/UpsInfo";
import React, { useState } from "react";

const page = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleNext = () => {
    if (activeTab < 6) {
      setActiveTab(activeTab + 1);
    }
  };

  const handlePrevious = () => {
    if (activeTab > 1) {
      setActiveTab(activeTab - 1);
    }
  };

  return (
    <>
      <div className="w-full bg-[#1C8606] text-center px-[16px] pt-[200px] pb-[70px]">
        <h1 className="font-lato font-[600] text-white text-[40px] md:text-[50px] lg:text-[60px]">
          Welcome to the ShipLeap Signup Page
        </h1>
        <p className="font-Nunito font-[400] text-white text-[20px] md:text-[25px] lg:text-[30px]">
          Safely send us your setup information below
        </p>
      </div>

      <div className="w-full">
        <div className="w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
          <p className="text-center text-[#646464] text-[20px] font-lato font-[400]">
            Please share your connection information with us below.
          </p>

          {/* Tab Header */}
          <div className="flex flex-row items-center justify-between pt-[80px]">
            {[
              "Contact Info",
              "UPS Info",
              "FedEx Info",
              "Other Carrier Info",
              "Miscellaneous",
              "Payment",
            ].map((label, index) => {
              const isActive = activeTab === index + 1;
              const isPrevious = activeTab > index + 1;

              return (
                <React.Fragment key={index}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-fit flex flex-col items-center font-lato font-[700] text-[14px] ${
                        isActive
                          ? "text-[#61CE70]"
                          : isPrevious
                          ? "text-[#61CE70]"
                          : "text-[#7A7A7A]"
                      }`}
                    >
                      <div
                        className={`rounded-full border border-solid w-[37px] h-[37px] flex justify-center items-center ${
                          isActive
                            ? "border-[#61CE70]"
                            : isPrevious
                            ? "bg-[#61CE70] border-[#61CE70]"
                            : "border-gray-500"
                        }`}
                      >
                        <span className={`${isPrevious ? "text-white" : ""}`}>
                          {index + 1}
                        </span>
                      </div>
                      <h1 className="text-center mt-2">
                        {label.split(" ")[0]}
                      </h1>
                      {label.split(" ").length > 1 && (
                        <h1 className="text-center -mt-2">
                          {label.split(" ").slice(1).join(" ")}
                        </h1>
                      )}
                    </div>
                  </div>

                  {/* Add line between circles except the last one */}
                  {index < 5 && (
                    <div className="flex-grow flex items-center">
                      <div className="w-full h-[0.5px] border-t-2 bg-[#61CE70] mx-2 -mt-[40px]"></div>
                    </div>
                  )}
                </React.Fragment>
              );
            })}
          </div>

          {/* Content */}
          <div className="mt-10">
            {activeTab === 1 && <ContactInfo />}
            {activeTab === 2 && <UpsInfo />}
            {activeTab === 3 && <FedExInfo />}
            {activeTab === 4 && <CarrierInfo />}
            {activeTab === 5 && <Miscellaneous />}
            {activeTab === 6 && <Payment />}
            {activeTab === 7 && <Sucess />}

            {/* Next/Previous Button */}
            <div className="flex gap-3 mt-1 px-[16px]">
              {activeTab > 1 && (
                <button
                  onClick={handlePrevious}
                  className="w-[50%] text-white font-Roboto font-[500] text-[16px] text-center py-3 rounded-md bg-[#61CE70] mt-2"
                >
                  Previous
                </button>
              )}
              <button
                onClick={handleNext}
                className={`${
                  activeTab === 1 ? "w-full" : "w-[50%]"
                } text-white font-Roboto font-[500] text-[16px] text-center py-3 rounded-md bg-[#61CE70] mt-2`}
              >
                {activeTab === 6 ? "Submit" : "Next"}
              </button>
            </div>
          </div>

          <div className="px-[150px] max-md:px-[100px] max-sm:px-[40px] py-[50px]">
            <hr className="w-full border-1 border-solid border-black" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
