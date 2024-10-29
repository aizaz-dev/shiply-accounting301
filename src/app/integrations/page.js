'use client'
import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import Logoimages from "../../components/Logoimages/Logoimages";
import LogoCarrier from "../../components/LogoCarrier/LogoCarrier";
import Link from "next/link";
import VideoModal from "@/components/integrations/videomodal/VideoModal";

const Page = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <>
      <div>
        <div className="bg-[url('/Integration/integration-guy.png')] bg-no-repeat bg-cover bg-center w-full ">
          <div className="w-full max-w-[1200px] mx-auto px-[16px] flex flex-row max-lg:flex-col py-[250px] max-sm:py-[100px]">
            <div className="w-[50%] flex flex-col max-lg:w-full max-lg:items-center max-lg:justify-center">
              <h3 className="font-Nunito font-[600] text-white text-[16px] sm:text-[18px] lg:text-[20px]">
                SAVE TIME, SHIP SMARTER
              </h3>
              <img
                src="/Integration/blue-line.png"
                alt="line"
                className=" w-[200px] sm:w-[250px] object-cover object-center mt-6"
              />
              <h1 className="font-Lato font-[600] text-white text-[40px] sm:text-[50px] lg:text-[60px] mt-2">
                INTEGRATIONS
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
              <Link target="_blank" href="https://calendly.com/shipleap">
              <button className="bg-white text-[#6dd400] font-Lato font-[700] text-[16px] sm:text-[18px] lg:text-[20px] rounded-[15px] px-[40px] py-[20px]">
                Schedule a Demo
              </button>
              </Link>
              <button
                onClick={() => setIsVideoModalOpen(true)} // Open video modal
                className="flex justify-center items-center gap-2 bg-transparent text-white font-Lato font-[700] text-[16px] sm:text-[18px] lg:text-[20px] rounded-[15px] px-[40px] py-[20px] border-2 border-white border-solid"
              >
                <FaPlay color="white" />
                Watch Video
              </button>
            </div>
            <VideoModal videoUrl="https://www.youtube.com/watch?v=fZSII2viumc" isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />

          </div>
        </div>
      </div>

      {/* para */}
      <div className="w-full">
        <div className="w-full max-w-[1200px] mx-auto px-[16px] py-[50px] text-center flex flex-col gap-4 font-Lato ">
          <p className="text-[18px] sm:text-[20px] md:text-[22px] font-[300] text-[#646464]">
            We believe in providing seamless connectivity to enhance your
            shipping experience. Our platform integrates with leading CRMs and
            shipping carriers, empowering you with a comprehensive solution that
            streamlines your shipping operations. With these integrations, you
            can effortlessly manage your orders, automate shipping processes,
            and deliver exceptional service to your customers. You can easily
            expand your shipping network, shop carrier rates, and print
            documentation & labels for your packages. ShipLeap creates
            interfaces, or “bridges,” between various systems to streamline and
            support your shipping process.
          </p>

          <p className="text-[18px] sm:text-[20px] md:text-[22px] font-[300] text-[#646464]">
            Don’t see your integration listed? Let us know what you need.
          </p>

          <h1 className="text-[#1b4284] font-[700] text-[28px] sm:text-[30px] md:text-[35px] mt-4">
            MIS Integrations
          </h1>
          <p className="text-[#646464] text-[18px] sm:text-[20px] md:text-[22px] font-[300]">
            Our integrations enable you to efficiently manage your shipping
            workflows from a single interface. Say goodbye to manual data entry
            and hello to increased productivity and accuracy. ShipLeap connects
            to several MIS and enterprise systems. Using these connections, we
            can import shipping data directly into our software so that you
            don’t have to retype shipping information.
          </p>
        </div>
      </div>
      {/* Logo */}
      <section>
        <Logoimages />
      </section>
      <div className=" px-[16px] py-[50px]">
        <p className=" text-center font-Lato font-[400] text-[9px] text-[#646464]">
          *PrintSmith is a registered trademark owned by eProductivitySoftware
          (ePS) and ShipLeap is not affiliated with or sponsored by ePS in any
          way.
        </p>
      </div>
      <section>
        <div className=" w-full">
          <div className=" w-full max-w-[1200px] mx-auto px-[16px] text-center flex flex-col gap-4 font-Lato ">
            <h1 className="text-[#1b4284] font-[700] text-[28px] sm:text-[30px] md:text-[35px] ">
              Carrier Integrations
            </h1>
            <p className="text-[#646464] text-[18px] sm:text-[20px] md:text-[22px] font-[300]">
              ShipLeap offers robust integrations with leading shipping
              carriers, ensuring you have access to the best rates, shipping
              options, and tracking capabilities. Our integrations simplify the
              shipping process, allowing you to compare rates, generate shipping
              labels, and provide accurate tracking information to your
              customers effortlessly. Easily add a new carrier and determine “on
              the fly” which carrier fits best with your requirements. We are
              adding new carriers frequently.
            </p>
          </div>
        </div>
      </section>
      <section>
        <LogoCarrier />
      </section>
    </>
  );
};

export default Page;
