import React from "react";

const FedExInfo = () => {
  return (
    <>
      

      <div className=" w-full">
        <div className=" w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
         
          

          <div className="div">
            <form action="" className=" flex flex-col">
              <div className="flex flex-col pb-14 max-md:pb-0">
                <label
                  htmlFor=""
                  className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
                >
                  FEDEX account number
                </label>
                <input
                  type="text"
                  className=" w-[60%] max-md:w-full p-2  outline-none border border-solid border-black rounded-sm"
                />
              </div>

              <div className=" w-full flex gap-3 max-md:flex-col">
                <div className="w-full">
                  <label
                    htmlFor=""
                    className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
                  >
                    FEDEX (billing) First Name
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
                    FEDEX (billing) Last Name
                  </label>
                  <input
                    type="text"
                    className=" w-full p-2  outline-none border border-solid border-black rounded-sm"
                  />
                </div>
              </div>

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                Job Title
              </label>
              <input
                type="text"
                className=" w-[80%] max-md:w-full p-2  outline-none border border-solid border-black rounded-sm"
              />
              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                FEDEX (billing) Company Name
              </label>
              <input
                type="text"
                className="w-full p-2  outline-none border border-solid border-black rounded-sm"
              />

              <div className=" w-full flex gap-3 max-md:flex-col">
                <div className=" w-full">
                  <label
                    htmlFor=""
                    className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
                  >
                    FEDEX (billing) Phone
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
                    FEDEX (billing) Email
                  </label>
                  <input
                    type="text"
                    className=" w-full p-2  outline-none border border-solid border-black rounded-sm"
                  />
                </div>
              </div>

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                FEDEX (billing) Street
              </label>
              <input
                type="text"
                className="w-full p-2  outline-none border border-solid border-black rounded-sm"
              />

              <div className=" w-full flex gap-3 max-md:flex-col">
                <div className=" w-full">
                  <label
                    htmlFor=""
                    className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
                  >
                    FEDEX (billing) City
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
                    FEDEX (billing) State
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
                    FEDEX (billing) ZipCode
                  </label>
                  <input
                    type="text"
                    className=" w-full p-2  outline-none border border-solid border-black rounded-sm"
                  />
                </div>
              </div>

              <label
                htmlFor=""
                className=" text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2"
              >
                FEDEX (billing) Country Code (Two letter code)
              </label>
              <input
                type="text"
                className=" w-[50%] max-md:w-full p-2  outline-none border border-solid border-black rounded-sm"
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

export default FedExInfo;
