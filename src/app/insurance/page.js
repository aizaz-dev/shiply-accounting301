import React from "react";

const products = [
  {
    id: 1,
    Url: "/insurance/hands.png",
    heading: "Why Choose ShipLeap Insurance?",
    description:
      "We provide end-to-end coverage, from the moment your package leaves your hands until it reaches its destination. Our insurance policy offers reimbursement for the full value of your shipped items, giving you complete financial protection.",
  },
  {
    id: 2,
    Url: "/insurance/Peace.png",
    heading: "Peace of Mind, Delivered",
    description:
      "Say goodbye to worries about unforeseen accidents or mishaps during transit. ShipLeap has you covered. Focus on your business or personal priorities, knowing that your packages are in safe hands.",
  },
  {
    id: 3,
    Url: "/insurance/customer.png",
    heading: "Customer Satisfaction at the Core",
    description:
      "Customer satisfaction is our top priority. We understand the importance of your shipments, and we go the extra mile to protect them. Our commitment to reliable, secure shipping ensures that your customers receive their items intact, building trust and loyalty.",
  },
  {
    id: 4,
    Url: "/insurance/Ahead.png",
    heading: "Stay Ahead of the Competition",
    description:
      "Differentiate yourself in the market by offering comprehensive package insurance through ShipLeap. Gain a competitive advantage over other shipping providers by providing peace of mind and secure shipping options that your customers will value.",
  },
  {
    id: 5,
    Url: "/insurance/refund.png",
    heading: "Hassle-Free Claims Process",
    description:
      "Should the need arise, our streamlined claims process ensures a hassle-free experience. Our dedicated team handles claims promptly, resolving issues efficiently and minimizing any disruptions to your business operations.",
  },
  {
    id: 6,
    Url: "/insurance/quality.png",
    heading: "Experience the ShipLeap Difference Today",
    description:
      "Choose ShipLeap as your shipping software partner and unlock the power of secure shipping and peace of mind. Empower your business with our comprehensive insurance coverage, providing you and your customers with the confidence to ship valuable items worry-free.",
  },
];

const page = () => {
  return (
    <>
      <div className="">
        <div className="bg-[url('/insurance/insurance-hero.png')] bg-no-repeat bg-cover bg-center w-full text-center py-[250px] px-[16px]">
          <h1 className="font-[700] font-Lato text-[32px] sm:text-[48px] lg:text-[64px] text-white leading-[38px] sm:leading-[54px] lg:leading-[64px]">
            SECURE SHIPPING <br />
            PEACE OF MIND
          </h1>
          <p className="font-[500] font-Lato text-[16px] sm:text-[20px] lg:text-[24px] text-white w-[90%] sm:w-[80%] lg:w-[70%] mx-auto leading-[20px] sm:leading-[26px] lg:leading-[28px] mt-8">
            ShipLeap is revolutionizing the shipping industry with our
            cutting-edge software that ensures your packages are protected from
            start to finish. With our comprehensive insurance coverage, you can
            ship with confidence, knowing that your valuable items are
            safeguarded against loss, damage, or theft during transit.
          </p>
        </div>
      </div>

      <div className="w-full py-[50px]">
        <div className=" w-full max-w-[1200px] mx-auto flex flex-col gap-5 sm:gap-16 px-[16px]">
          {products.map((item) => {
            return (
              <div
                key={item.id}
                className="w-full flex flex-row max-sm:flex-col gap-4 justify-center items-center"
              >
                <div className="w-[80px] h-[80px] sm:w-[90px] sm:h-[90px] lg:w-[120px] lg:h-[120px]">
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
                    <p className="text-[#646464] font-[400] font-Lato text-[18px] sm:text-[19px] lg:text-[20px] max-sm:text-center mt-4">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default page;
