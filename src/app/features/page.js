import React from "react";
import ShipLeapFeatures from "../../components/ShipLeapFeatures/ShipLeapFeatures";
import ConnectwithMobile from "../../components/ShipLeapFeatures/ConnectwithMobile/ConnectwithMobile";
import ReadytoGet from "../../components/ReadytoGet/ReadytoGet";
import AlphaGraphics from "../../components/AlphaGraphics/AlphaGraphics";
import Link from "next/link";

const products = [
  {
    id: 1,
    Url: "/Feature/rocket.png",
    heading: "Automated Shipping Fueled by the Latest Technology",
    description:
      "Barcode scanning, automated address importing, label printing, and carrier rate shopping allow you to ship more in less time and maximize your profits.",
  },
  {
    id: 2,
    Url: "/Feature/graph.png",
    heading: "Increased Profitability with the Best Carrier Rates",
    description:
      "Don’t limit your choices by having just one carrier. By easily shopping carriers, you know that you have the best rate to choose from. You can save up to 65% on your shipping.",
  },
  {
    id: 3,
    Url: "/Feature/box.png",
    heading: "Worry-Free Tracking",
    description:
      "Your customers will receive consistent and branded notifications when packages ship. Setup cross-marketing or corporate messaging in your notification emails.",
  },
  {
    id: 4,
    Url: "/Feature/stopwatch.png",
    heading: "Save Time with ShipLeap Momentum™",
    description:
      "ShipLeap Momentum™ is our flagship desktop application loaded with features that streamline your shipping process. Ship more in less time so you can focus on your business.",
  },
  {
    id: 3,
    Url: "/Feature/umbrella.png",
    heading: "We’ve Got You Covered",
    description:
      "Experience a hassle-free insurance purchase process through our reliable 3rd party provider. Benefit from exclusive lower rates, ensuring significant savings compared to standard carrier rates.",
  },
];
const page = () => {
  return (
    <>
      {/* // Steammline your shipping */}
      <div className="w-full bg-[#0091FF]">
        <div className="w-full max-w-[1200px] mx-auto">
          <div className="flex flex-col items-center justify-center text-white px-[16px] py-[100px]">
            <h1 className="font-Lato font-[700] text-[32px] md:text-[40px] lg:text-[50px] text-white text-center pt-[100px]">
              STREAMLINE YOUR SHIPPING
            </h1>
            <p className="font-Lato font-[400] text-[18px] md:text-[24px] lg:text-[30px] text-white text-center leading-8 md:leading-9 lg:leading-10">
              Transform your shipping with a smarter, <br />
              faster, more efficient process
            </p>
            
            <div className=" w-[200px] mt-8 cursor-pointer">
              <Link target="_blank" href="https://calendly.com/shipleap">
              <img
                src="/Feature/schedule-demo_1.png"
                alt=""
                className=" w-full h-auto object-cover object-center"
              /></Link>
            </div>
          </div>
        </div>
      </div>
      {/* // why ShipLeap ? */}
      <div className="w-full bg-[#FFFFFF]">
        <div className="w-full max-w-[1200px] mx-auto px-[16px] pt-[100px]">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-[#1b4284] font-[700] font-Lato text-[28px] sm:text-[32px] lg:text-[35px] text-center">
              Why ShipLeap?
            </h1>
            <p className="text-center text-[#646464] font-[300] font-Lato text-[18px] sm:text-[20px] lg:text-[22px] leading-6 sm:leading-7 mt-4">
              Automate shipping, save time, increase profitability, and enjoy
              worry-free tracking with ShipLeap. Our technology revolutionizes
              your operations, streamlining shipping and securing the best rates
              from carriers. Ship more efficiently, automate tasks, and boost
              profitability. Experience worry-free tracking and a feature-packed
              solution that simplifies shipping at every step.
            </p>
          </div>

          <div className="w-full py-[50px]">
            <div className="flex flex-col gap-5 sm:gap-4">
              {products.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="w-full flex flex-row max-sm:flex-col gap-4 justify-center items-center"
                  >
                    <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[100px] lg:h-[100px]">
                      <img
                        src={item.Url}
                        alt=""
                        className="w-full object-cover object-center"
                      />
                    </div>
                    <div className="w-full flex flex-col">
                      <div className="">
                        <h1 className="text-[#019818] font-[700] font-Lato text-[22px] sm:text-[24px] lg:text-[26px] max-sm:text-center">
                          {item.heading}
                        </h1>
                      </div>
                      <div className="">
                        <p className="text-[#646464] font-[400] font-Lato text-[18px] sm:text-[19px] lg:text-[20px] max-sm:text-center">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* Features of ShipLeap Momentum™ */}
      <ShipLeapFeatures />

      {/* Connect with Our Mobile Apps */}
      <ConnectwithMobile />

      {/* Ready to get started? */}
      <ReadytoGet />

      {/* Alpha Graphics */}
      <AlphaGraphics />
    </>
  );
};

export default page;
