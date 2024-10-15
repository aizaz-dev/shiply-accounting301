import React from "react";

const UpsInfo = () => {
  return (
    <>
    
      <div className=" w-full">
        <div className=" w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
      
          

          <div className="div">
            <form action="" className=" flex flex-col">
              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                UPS account number
              </label>
              <input
                type="text"
                className=" w-[60%] max-md:w-full p-2  outline-none border border-solid border-black rounded-sm"
              />
              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                UPS.com username connected to account
              </label>
              <input
                type="text"
                className=" w-[60%] max-md:w-full p-2  outline-none border border-solid border-black rounded-sm"
              />
              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                UPS.com password
              </label>
              <input
                type="text"
                className=" w-[60%] max-md:w-full p-2  outline-none border border-solid border-black rounded-sm"
              />

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                Latest UPS invoice (send a PDF)
              </label>
              <input type="file" name="" id="" className="" />

              
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

export default UpsInfo;
