import React from "react";
import VideoPlayer from "@/components/homepage/video/Video";
import LetsTalk from "@/components/contact/LetsTalk";
import Video from "@/components/homepage/video/Video";

const page = () => {
  return (
    <>
      <div className="w-full h-[201px] bg-[#251967]"></div>
      <div className="w-full">
        <div className="w-full max-w-[1400px] mx-auto px-[16px]">
          <p className="text-center font-[300] font-Lato text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] text-[#4632DA] py-[16px]">
            Watch our video.
          </p>
          <div className="w-full py-8 flex justify-center">
            <Video videoId="F001zdJ7WdE" width="90%" maxWidth="1000px" />
          </div>
          <p className="text-center font-[300] font-Lato text-[28px] sm:text-[35px] md:text-[40px] lg:text-[45px] text-[#4632DA] py-[16px]">
            Let&apos;s Talk. <br />
            Book time below.
          </p>

          {/* Calendly Embed */}
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/shipleap?hide_gdpr_banner=1"
            style={{ position: "relative", minWidth: "320px", height: "630px" }}
          >
            <iframe
              src="https://calendly.com/shipleap?embed_domain=shipleap.com&embed_type=Inline&hide_gdpr_banner=1"
              width="100%"
              height="100%"
              frameBorder="0"
              title="Select a Date & Time - Calendly"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="div">
        <div className="py-8 ">
          <LetsTalk hideHeader={true}/>
        </div>
      </div>
    </>
  );
};

export default page;
