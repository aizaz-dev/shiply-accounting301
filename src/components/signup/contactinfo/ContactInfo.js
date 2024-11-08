"use client";
import CarrierInfo from "@/components/signup/carrierInfo/CarrierInfo";
import React, { useState } from "react";

const ContactInfo = ({ onChange }) => {
  const [localData, setLocalData] = useState({
    companyName: "",
    yourName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    adminEmail: "",
    generalEmail: "",
    website: "",
    phone: "",
    carriers: "",
    shipmentsPerDay: "",
    thermalPrinter: "",
    erpSystem: "",
    scaleConnected: "",
    labelSize: "",
  });

  // Function to handle input changes
  const handleInputChange = (field, value) => {
    setLocalData((prev) => ({ ...prev, [field]: value }));
    onChange({ ...localData, [field]: value }); // Pass updated data to main form
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
                value={localData.companyName}
                onChange={(e) =>
                  handleInputChange("companyName", e.target.value)
                }
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
                value={localData.yourName}
                onChange={(e) => handleInputChange("yourName", e.target.value)}
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
                value={localData.address}
                onChange={(e) => handleInputChange("address", e.target.value)}
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
                value={localData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
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
                value={localData.state}
                onChange={(e) => handleInputChange("state", e.target.value)}
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
                value={localData.zipCode}
                onChange={(e) => handleInputChange("zipCode", e.target.value)}
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
                value={localData.adminEmail}
                onChange={(e) =>
                  handleInputChange("adminEmail", e.target.value)
                }
                type="text"
                className=" w-full p-3  outline-none border border-solid border-black rounded-sm"
              />

              <label
                value={localData.generalEmail}
                onChange={(e) =>
                  handleInputChange("generalEmail", e.target.value)
                }
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
                value={localData.website}
                onChange={(e) => handleInputChange("website", e.target.value)}
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
                value={localData.phone}
                onChange={(e) => handleInputChange("phone", e.target.value)}
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
                value={localData.carriers}
                onChange={(e) => handleInputChange("carriers", e.target.value)}
                placeholder="UPS,FEDEX,USPS"
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
                value={localData.shipmentsPerDay}
                onChange={(e) =>
                  handleInputChange("shipmentsPerDay", e.target.value)
                }
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
                value={localData.thermalPrinter}
                onChange={(e) =>
                  handleInputChange("thermalPrinter", e.target.value)
                }
                placeholder="Zebra?WhatModel? "
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
                value={localData.erpSystem}
                onChange={(e) => handleInputChange("erpSystem", e.target.value)}
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
                value={localData.scale}
                onChange={(e) => handleInputChange("scale", e.target.value)}
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
                value={localData.labelSize}
                onChange={(e) => handleInputChange("labelSize", e.target.value)}
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
