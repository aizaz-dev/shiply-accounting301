import React from "react";
const products = [
  {
    id: 1,
    Url: "/Feature/mis.png",
    heading: "Connect Your MIS",
    description:
      "No need for double-entry of shipping/address information. We can import the information from various MIS systems live so that you can improve shipping efficiency. We can read and write back to your system.",
  },
  {
    id: 2,
    Url: "/Feature/carriers22.png",
    heading: "Shop Carriers",
    description:
      "Choose from over 100 carriers to include in your shipping network. Popular carriers include UPS, FedEx, USPS, Purolator, and Australia Post.",
  },
  {
    id: 3,
    Url: "/Feature/printer.png",
    heading: "Print Labels and Documents",
    description:
      "Choose among several printers to create labels and shipping documents",
  },
  {
    id: 4,
    Url: "/Feature/bulb.png",
    heading: "Automations",
    description:
      "Automate certain tasks and avoid manual work. Improve your shipping workflow by setting up rules and events.",
  },
  {
    id: 5,
    Url: "/Feature/tag.png",
    heading: "Discounted Rates",
    description:
      "Unlock significant savings on postage costs by purchasing discounted postage directly through the ShipLeap app.",
  },
];

const product = [
  {
    id: 1,
    Url: "/Feature/desktop.png",
    heading: "Desktop Application",
    description:
      "For the sake of speed, we created an application that will run on your PC or Mac. You can also connect to our service with any device connected to the internet. Access our app from your browser, iPhone, or Android device.",
  },
  {
    id: 2,
    Url: "/Feature/scale.png",
    heading: "Connect Your Scale",
    description:
      "We support several scales using our service. Using this connection, you don’t have to key in the weights of your packages. Popular scales include Fairbanks, Onyx, Pelouze, and DYMO.",
  },
  {
    id: 3,
    Url: "/Feature/smart-email.png",
    heading: "Smart Email Notifications",
    description:
      "Alert your clients that packages have shipped. Include branding, cross-selling and custom information in your emails along with the tracking information, regardless of which carrier you use.",
  },
  {
    id: 4,
    Url: "/Feature/world.png",
    heading: "International Shipping",
    description:
      "Effortlessly ship parcels worldwide with our streamlined process. We take care of the paperwork, making the experience seamless and automatic.",
  },
  {
    id: 5,
    Url: "/Feature/Artboard-5-8.png",
    heading: "Partner API",
    description:
      "Unlock the full potential of our shipping service with our exclusive Partner API, offering advanced features, seamless integration capabilities, and dedicated support.",
  },
];

const ShipLeapFeatures = () => {
  return (
    <div className="w-full bg-[#FFFFFF]">
      <div className="w-full max-w-[1200px] mx-auto px-[16px]">
      <div className="flex flex-col items-center justify-center">
  <h1 className="text-[#1b4284] font-[700] font-Lato text-[28px] sm:text-[30px] md:text-[32px] lg:text-[35px] text-center">
    Features of ShipLeap Momentum™
  </h1>
  <p className="text-center text-[#646464] font-[400] font-Lato text-[18px] sm:text-[20px] md:text-[22px] leading-6 sm:leading-7 mt-4">
    Here are some of the features that will power your shipping environment.
    Schedule a demo today to learn more about how ShipLeap Momentum™ can make
    your shipping environment more efficient.
  </p>
</div>


        <div className="w-full">
          <div className="div">
            <div className=" w-full flex max-sm:flex-col flex-row py-8">
            <div className="w-[50%] max-sm:w-full">
  {products.map((item) => {
    return (
      <div
        key={item.id}
        className="w-full flex flex-row max-lg:flex-col gap-4 max-sm:justify-center max-sm:items-center pl-[28px] max-sm:pl-0 h-[300px] max-md:h-auto"
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


              <div className="w-[50%] max-sm:w-full">
                {product.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className="w-full flex flex-row max-lg:flex-col gap-4 max-sm:justify-center max-sm:items-center pl-[28px] max-sm:pl-0 h-[300px] max-md:h-auto"
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
                          <p className="text-[#646464] font-[400] font-Lato text-[18px] sm:text-[19px] lg:text-[20px] max-sm:text-center    ">
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
      </div>
    </div>
  );
};

export default ShipLeapFeatures;
