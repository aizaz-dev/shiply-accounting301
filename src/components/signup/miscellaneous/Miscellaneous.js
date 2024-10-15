import React from "react";

const Miscellaneous = () => {
  return (
    <>
      {/* <div className="w-full bg-[#1C8606] text-center px-[16px] pt-[200px] pb-[70px]">
        <h1 className="font-lato font-[600] text-white text-[40px] md:text-[50px] lg:text-[60px]">
          Welcome to the ShipLeap Signup Page
        </h1>
        <p className="font-Nunito font-[400] text-white text-[20px] md:text-[25px] lg:text-[30px]">
          Safely send us your setup information below
        </p>
      </div> */}

      <div className=" w-full">
        <div className=" w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
          {/* <p className="text-center text-[#646464] text-[20px] font-lato font-[400]">
            Please share your connection information with us below.{" "}
          </p> */}

          {/* <div className="div">
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
          </div> */}

          <div className="div">
            <form action="" className=" w-full flex flex-col">
              <div className=" flex flex-row w-full max-md:flex-col gap-2">
                <div className=" w-[65%] max-md:w-full flex flex-col">
                  <label
                    htmlFor="fileInput"
                    className="py-4 cursor-pointer  text-[#7A7A7A] text-[16px] font-[400] font-lato"
                  >
                    Attach Logo Here
                  </label>
                  <input type="file" id="fileInput" className="hidden" />

                  <input type="file" name="" id="" />
                </div>
                <div className=" w-[35%] max-md:w-full">
                  <p className=" text-[#7A7A7A] text-[14px] leading-[25.2px] font-[600] font-Roboto">
                    Please send your logo that we will include on your emails to
                    clients. We prefer a PNG or JPG
                  </p>
                </div>
              </div>

              <div className=" w-full flex flex-row max-md:flex-col gap-4 mt-4">
                <div className=" w-[80%] max-md:w-full">
                  <label
                    htmlFor=""
                    className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
                  >
                    What time do you want summary emails to arrive?
                  </label>
                  <input
                    type="time"
                    className=" w-full max-md:w-full p-2  outline-none border border-solid border-black rounded-sm"
                  />
                </div>
                <div className=" w-[20%] max-md:w-full">
                  <label
                    htmlFor=""
                    className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
                  >
                    Time Zone
                  </label>
                  <input
                    type="text"
                    placeholder="EST"
                    className=" w-full max-md:w-full p-2  outline-none border border-solid border-black rounded-sm  placeholder:text-blue-500"
                  />
                </div>
              </div>
              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                Comments
              </label>
              <textarea
                id="w3review"
                name="w3review"
                rows="4"
                cols="50"
                className=" w-full max-md:w-full p-2  outline-none border border-solid border-black rounded-sm"
              ></textarea>

              
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

export default Miscellaneous;