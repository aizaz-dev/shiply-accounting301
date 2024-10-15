import React from "react";

const CarrierInfo = () => {
  return (
    <>
      
      <div className=" w-full">
        <div className=" w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
          {/* <p className="text-center text-[#646464] text-[20px] font-lato font-[400]">
            Please share your connection information with us below.{" "}
          </p> */}

         

          <div className="div">
            <form action="" className=" flex flex-col">
              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                Other carrier name (GSO, Ontrac, etc.)
              </label>
              <input
                type="text"
                placeholder="GSO, Ontrac"
                className=" w-[60%] max-md:w-full p-2  outline-none border border-solid border-black rounded-sm  placeholder:text-blue-500"
              />
              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                Account number
              </label>
              <input
                type="text"
                className=" w-[60%] max-md:w-full p-2  outline-none border border-solid border-black rounded-sm"
              />

              <div className=" w-full flex gap-3 max-md:flex-col">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className=" w-full p-2  outline-none border border-solid border-black rounded-sm"
                  />
                </div>
                <div className="w-full">
                  <label
                    htmlFor=""
                    className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
                  >
                    Password
                  </label>
                  <input
                    type="text"
                    className=" w-full p-2  outline-none border border-solid border-black rounded-sm"
                  />
                </div>
              </div>

            
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

export default CarrierInfo;
