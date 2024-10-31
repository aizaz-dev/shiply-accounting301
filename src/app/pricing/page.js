import React from "react";
import { FaPlay, FaRegCheckCircle } from "react-icons/fa";

const page = () => {
  return (
    <>
      <div
        id="top"
        className="bg-[url('/pricing/pricing.png')] bg-no-repeat bg-cover bg-center w-full "
      >
        <div className="w-full max-w-[1200px] mx-auto px-[16px] flex flex-row max-lg:flex-col py-[250px] max-sm:py-[100px]">
          <div className="w-[50%] flex flex-col max-lg:w-full max-lg:items-center max-lg:justify-center">
            <h3 className="font-Nunito font-[600] text-white text-[16px] sm:text-[18px] lg:text-[20px]">
              SAVE TIME, SHIP SMARTER
            </h3>
            <img
              src="/pricing/green-line.png"
              alt="line"
              className=" w-[200px] sm:w-[250px] object-cover object-center mt-6"
            />
            <h1 className="font-Lato font-[600] text-white text-[40px] sm:text-[50px] lg:text-[60px] mt-2">
              PRICING
            </h1>
            <p className="cursor-pointer font-Nunito font-[400] text-white text-[20px] sm:text-[24px] lg:text-[30px]">
              Transform your shipping with a smarter,
              <br className="hidden max-lg:block" /> faster, more efficient
              process
            </p>
            <h2 className="cursor-pointer font-Nunito font-[400] text-white text-[22px] sm:text-[26px] lg:text-[30px]">
              LEARN MORE
            </h2>
          </div>
          <div className="w-[50%] flex flex-row max-sm:flex-col gap-4 max-sm:gap-2 pt-4 items-end justify-end max-lg:w-full max-lg:items-center max-lg:justify-center max-lg:gap-16">
            <button className="bg-white text-[#1B4284] font-Lato font-[700] text-[16px] sm:text-[18px] lg:text-[20px] rounded-[15px] px-[40px] py-[20px]">
              Schedule a Demo
            </button>
            <button className="flex justify-center items-center gap-2 bg-transparent text-white font-Lato font-[700] text-[16px] sm:text-[18px] lg:text-[20px] rounded-[15px] px-[40px] py-[20px] border-2 border-white border-solid">
              <FaPlay color="white" />
              Watch Video
            </button>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="w-full max-w-[1200px] mx-auto px-4 py-[50px] flex flex-col justify-center items-center">
          <h1 className="text-[#019818] font-bold font-lato text-[28px] sm:text-[32px] md:text-[35px] lg:text-[40px]">
            Simple Pricing
          </h1>
          <p className="text-[#646464] font-light font-lato text-[16px] sm:text-[18px] md:text-[20px] py-4">
            Your first 15 days are free.
          </p>
          <div className="bg-[#F9FAFA] w-full max-w-[500px] mt-8">
            <div className="bg-[#4054B2] p-5"></div>
            <h1 className="text-center text-[#555555] font-bold font-lato text-[32px] sm:text-[40px] md:text-[47px] py-10">
              CONTACT US
            </h1>
            <div className="pl-4 pr-8">
              <div className="flex items-center gap-4 py-2">
                <FaRegCheckCircle color="#7A7A7A" size={20} />
                <h2 className="text-[#7A7A7A] font-normal font-lato text-[16px] sm:text-[18px]">
                  Label printing
                </h2>
              </div>
              <div className="pl-8">
                <hr className="bg-[#7A7A7A] " />
              </div>

              <div className="flex items-center gap-4 py-2">
                <FaRegCheckCircle color="#7A7A7A" size={20} />
                <h2 className="text-[#7A7A7A] font-normal font-lato text-[16px] sm:text-[18px]">
                  Carrier price shopping
                </h2>
              </div>
              <div className="pl-8">
                <hr className="bg-[#7A7A7A]" />
              </div>

              <div className="flex items-center gap-4 py-2">
                <FaRegCheckCircle color="#7A7A7A" size={20} />
                <h2 className="text-[#7A7A7A] font-normal font-lato text-[16px] sm:text-[18px]">
                  ERP/MIS connection
                </h2>
              </div>
              <div className="pl-8">
                <hr className="bg-[#7A7A7A]" />
              </div>

              <div className="flex items-center gap-4 py-2">
                <FaRegCheckCircle color="#7A7A7A" size={20} />
                <h2 className="text-[#7A7A7A] font-normal font-lato text-[16px] sm:text-[18px]">
                  Branded emails notifications
                </h2>
              </div>
              <div className="pl-8">
                <hr className="bg-[#7A7A7A]" />
              </div>

              <div className="flex items-center gap-4 py-2">
                <FaRegCheckCircle color="#7A7A7A" size={20} />
                <h2 className="text-[#7A7A7A] font-normal font-lato text-[16px] sm:text-[18px]">
                  USPS commercial rate
                </h2>
              </div>
              <div className="pl-8">
                <hr className="bg-[#7A7A7A]" />
              </div>

              <div className="flex items-center gap-4 py-2">
                <FaRegCheckCircle color="#7A7A7A" size={20} />
                <h2 className="text-[#7A7A7A] font-normal font-lato text-[16px] sm:text-[18px]">
                  Phone and email support
                </h2>
              </div>
              <div className="pl-8">
                <hr />
              </div>
            </div>
            <div className="py-[30px]">
              <div className="flex justify-center items-center">
                <button className="font-roboto text-[14px] sm:text-[16px] text-white font-medium bg-[#00D420] px-[20px] sm:px-[30px] py-[12px] sm:py-[15px] rounded-md outline-none">
                  Contact us
                </button>
              </div>
              <p className="text-center font-light font-lato text-[13px] sm:text-[15px] text-[#7A7A7A] pt-4">
                All supported carriers included
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full ">
        <div className="w-full max-w-[1200px] mx-auto px-[16px] flex flex-col justify-center items-center">
          <h1 className="text-[#019818] text-[28px] sm:text-[32px] md:text-[35px] lg:text-[40px] font-[700] font-lato">
            Other Items
          </h1>

          <div className="w-full max-w-[747px] mt-4 pb-[50px]">
            <ul className="list-none">
              <li>
                <a href="#top">
                  <div className="py-2 flex items-center justify-between">
                    <span className="text-[#4054B2]  whitespace-nowrap  font-lato font-semibold text-[16px] sm:text-[18px] md:text-[19px]">
                      Wireless barcode <br className="hidden max-md:block" /> scanner
                    </span>
                    <span class="border-t-[3px] max-md:hidden border-dotted border-black w-full my-4 mx-3"></span>
                    <span className="text-[#4054B2] font-lato font-semibold text-[16px] sm:text-[18px] md:text-[19px]">
                      $200+tax+shipping
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#top">
                <div className="py-2 flex items-center justify-between">
                    <span className="text-[#4054B2] whitespace-nowrap  font-lato font-semibold text-[16px] sm:text-[18px] md:text-[19px]">
                    Wired barcode  <br className="hidden max-md:block" /> scanner                    </span>
                    <span class="border-t-[3px] max-md:hidden border-dotted border-black w-full my-4 mx-3"></span>
                    <span className="text-[#4054B2] font-lato font-semibold text-[16px] sm:text-[18px] md:text-[19px]">
                    $150+tax+shipping
                    </span>
                  </div>
                </a>
              </li>
              <li>
                <a href="#top">
                <div className="py-2 flex items-center justify-between">
                    <span className="text-[#4054B2] whitespace-nowrap  font-lato font-semibold text-[16px] sm:text-[18px] md:text-[19px]">
                    Barcode re-programming              </span>
                    <span class="border-t-[3px] border-dotted border-black w-full my-4 mx-3"></span>
                    <span className="text-[#4054B2] font-lato font-semibold text-[16px] sm:text-[18px] md:text-[19px]">
                    $50
                    </span>
                  </div>
                  <p className="font-lato font-light text-[12px] sm:text-[14px] text-[#7A7A7A]">
                    (Some barcode scanners may not be programmable. Please
                    contact us for more detail).
                  </p>
                </a>
              </li>
              <li>
                <a href="#top">
                <div className="py-2 flex items-center justify-between">
                    <span className="text-[#4054B2] whitespace-nowrap  font-lato font-semibold text-[16px] sm:text-[18px] md:text-[19px]">
                    General Setup       </span>
                    <span class="border-t-[3px] border-dotted border-black w-full my-4 mx-3"></span>
                    <span className="text-[#4054B2] font-lato font-semibold text-[16px] sm:text-[18px] md:text-[19px]">
                    $500
                    </span>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
