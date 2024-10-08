import React from "react";

const page = () => {
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

      <div className=" w-full">
        <div className=" w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
          <p className="text-center text-[#646464] text-[20px] font-lato font-[400]">
            Please share your connection information with us below.{" "}
          </p>

          <div className="div">
            <div className=" flex flex-row justify-between pt-[80px]">
              <div className="w-fit flex flex-col  font-lato font-[700] text-[14px] text-[#7A7A7A]">
                <div className=" rounded-full border border-solid border-gray-500 w-[37px] h-[37px] flex justify-center items-center">
                  1
                </div>
                <h1 className="text-center mt-2">Contact</h1>
                <h1 className="text-center -mt-2"> Info</h1>
              </div>
              <hr className="border border-solid border-gray-500 w-full mt-4 mx-2" />
              <div className="w-fit flex flex-col  items-center font-lato font-[700] text-[14px] text-[#7A7A7A]">
                <div className=" rounded-full border border-solid border-gray-500 w-[37px] h-[37px] flex justify-center items-center">
                  2
                </div>
                <h1 className="text-center mt-2">UPS</h1>
                <h1 className="text-center -mt-2"> Info</h1>
              </div>
              <hr className="border border-solid border-gray-500 w-full mt-4 mx-2" />
              <div className="w-fit flex flex-col  items-center font-lato font-[700] text-[14px] text-[#7A7A7A]">
                <div className=" rounded-full border border-solid border-gray-500 w-[37px] h-[37px] flex justify-center items-center">
                  3
                </div>
                <h1 className="text-center mt-2">FEDEX</h1>
                <h1 className="text-center -mt-2"> Info</h1>
              </div>
              <hr className="border border-solid border-gray-500 w-full mt-4 mx-2" />
              <div className="w-fit flex flex-col  items-center font-lato font-[700] text-[14px] text-[#7A7A7A]">
                <div className=" rounded-full border border-solid border-gray-500 w-[37px] h-[37px] flex justify-center items-center">
                  4
                </div>
                <h1 className="text-center mt-2">Other </h1>
                <h1 className="text-center -mt-2"> Carrier</h1>
                <h1 className="text-center -mt-2"> Info</h1>
              </div>
              <hr className="border border-solid border-gray-500 w-full mt-4 mx-2" />
              <div className="w-fit flex flex-col items-center font-lato font-[700] text-[14px] text-[#7A7A7A]">
                <div className=" rounded-full border border-solid border-gray-500 w-[37px] h-[37px] flex justify-center items-center">
                  5
                </div>
                <h1 className="text-center mt-2">Miscellaneous</h1>
              </div>
              <hr className="border border-solid border-gray-500 w-full mt-4 mx-2" />
              <div className="w-fit flex flex-col   items-center font-lato font-[700] text-[14px] text-[#7A7A7A]">
                <div className=" rounded-full border border-solid border-gray-500 w-[37px] h-[37px] flex justify-center items-center">
                  6
                </div>
                <h1 className="text-center mt-2">Payment</h1>
              </div>
            </div>
          </div>

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
              <button className=" text-white font-Roboto font-[500] text-[16px] text-center w-full py-3 rounded-md bg-[#61CE70] mt-2">Next</button>
            </form>
          </div>

          <div className="div px-[150px] max-md:px-[100px] max-sm:px-[40px] py-[50px]">
            <hr className=" w-full border-1 border-solid  border-black " />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
