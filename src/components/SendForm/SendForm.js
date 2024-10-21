import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const SendForm = () => {
  return (
    <div className="w-full pt-[0px] bg-no-repeat bg-[url('/contact/contactbg.pn')]  bg-[center_top_200px]">
      <div className="flex flex-col-reverse items-stretch gap-[20px] lg:flex-row-reverse max-w-[1200px] mx-auto px-[80px] max-tab:px-tab max-md:px-[20px] py-4">
        <div className="lg:w-[60%] p-8 lg:p-16 bg-white shadow-2xl  rounded-[15px]">
          <form className="space-y-6">
            <p className="font-lato font-[700] text-[#575555] text-[22px]">
              Tell us a little about yourself, and we&apos;ll send information about your
              way.{" "}
            </p>
            <div className=" flex flex-row max-lg:flex-col max-lg:gap-6 gap-2">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full p-6 text-[15px] text-[#3D4459] outline-none bg-[#fafafa] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />

              <input
                type="text"
                placeholder="Last Name"
                className="w-full p-6 text-[15px] text-[#3D4459] outline-none bg-[#fafafa] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <input
              type="tel"
              placeholder="Company"
              className="w-full p-6 bg-[#fafafa] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-6 bg-[#fafafa] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full p-6 bg-[#fafafa] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <div className="flex items-end justify-end ">
              <button
                type="submit"
                className=" bg-[#019818] text-[16px] font-nunito font-[300] hover:bg-indigo-700 text-white  py-3 px-9 justify-self-end rounded-[13px] transition duration-300 ease-in-out flex items-center justify-center"
              >
                SEND
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 w-full flex flex-col p-2">
          <h1 className="text-[#019818] mb-2 leading-[75px] max-md:leading-[40px] text-center lg:text-left font-Lato text-[36px] sm:text-[48px] md:text-[56px] lg:text-[63px] font-[700]">
            Let&apos;s Do This Demo!
          </h1>
          <p className="text-[#646464] text-center lg:text-left text-[18px] sm:text-[19px] md:text-[20px] lg:text-[21px] leading-[27px] md:leading-[28px] lg:leading-[29.4px] font-Lato font-[400] mb-4">
            We always recommend a live demo to answer your specific questions,
            but we can also send pre-recorded content if you prefer. Please fill
            out our form, and we will send the information to you.
          </p>
          <ul className="pl-5 list-disc text-[#646464] text-[18px] sm:text-[19px] md:text-[20px] lg:text-[21px] leading-[27px] md:leading-[28px] lg:leading-[29.4px] font-Lato font-[400]">
            <li>Watch demo videos</li>
            <li>Sign up for a live demo with live Q&A</li>
            <li>Take a tour of the ShipLeap platform</li>
          </ul>
          <div className="py-6">
            <img
              src="/senddemo/lady.jpg"
              alt="lady"
              className="w-full  object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendForm;
