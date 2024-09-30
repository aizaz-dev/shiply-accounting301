import React from "react";
import { FaPlay } from "react-icons/fa";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const products = [
  {
    id: 1,
    imgUrl: "/resources/Depositphotos_67122483_ds-2048x1229.jpg",
    title:
      "Enhance Your Shipping Automation with ShipLeap’s Integration to Odyssey 2.0 from Marketing Ideas for Printers",
    desc: "We are excited to announce a game-changing integration for Odyssey 2.0 users—ShipLeap has joined forces with Marketing Ideas for Printers to bring you seamless shipping",
    date: "Octuber 1, 2023",
    commit: "No Comments",
  },
  {
    id: 2,
    imgUrl: "/resources/usps-rates-600x400-1.png",
    title:
      "Enhance Your Shipping Automation with ShipLeap’s Integration to Odyssey 2.0 from Marketing Ideas for Printers",
    desc: "We are excited to announce a game-changing integration for Odyssey 2.0 users—ShipLeap has joined forces with Marketing Ideas for Printers to bring you seamless shipping",
    date: "June 9, 2023",
    commit: "No Comments",
  },
  {
    id: 3,
    imgUrl: "/resources/earth.jpg",
    title:
      "Enhance Your Shipping Automation with ShipLeap’s Integration to Odyssey 2.0 from Marketing Ideas for Printers",
    desc: "We are excited to announce a game-changing integration for Odyssey 2.0 users—ShipLeap has joined forces with Marketing Ideas for Printers to bring you seamless shipping",
    date: "June 3, 2023",
    commit: "No Comments",
  },
  {
    id: 4,
    imgUrl: "/resources/umbrella.jpg",
    title:
      "Secure Your Shipments with Shipleap’s Package Insurance: Protecting Your Deliveries Every Step of the Way",
    desc: "We understand the importance of safeguarding your shipments throughout their journey. We are excited to announce a new offering that adds an extra layer of",
    date: "May 13, 2023",
    commit: "No Comments",
  },
  {
    id: 5,
    imgUrl: "/resources/automate.jpeg",
    title: "Streamline Your Shipping Process with ShipLeap Automations",
    desc: "Shipping can be a complex and time-consuming process, especially when dealing with repetitive tasks. However, with the help of ShipLeap automations, you can simplify and",
    date: "April 12, 2023",
    commit: "No Comments",
  },
  {
    id: 6,
    imgUrl: "/resources/stencil.default-768x512.jpg",
    title: "What Are UPS Backcharging Fees and How to Avoid Them with Shipleap",
    desc: "If you’re a small business owner who frequently ships with UPS, you may have heard of backcharging fees or adjustments. These fees are charged by",
    date: "March 24, 2023",
    commit: "No Comments",
  },
  {
    id: 7,
    imgUrl: "/resources/api.png",
    title:
      "Introducing Shipleap’s Partner API: Unlocking Seamless Shipping Automation",
    desc: "We are thrilled to announce an exciting new feature at Shipleap that will revolutionize the way businesses manage their shipping operations. Today, we are introducing",
    date: "February 3, 2023",
    commit: "No Comments",
  },
  {
    id: 8,
    imgUrl: "/resources/stencil.default-1-300x200.jpg",
    title:
      "Streamline Your Workflow with ShipLeap’s Powerful Shipping Platform",
    desc: "As a business owner, you know how important it is to have efficient shipping and logistics operations. The right shipping software can help you streamline",
    date: "January 11, 2023",
    commit: "No Comments",
  },
  {
    id: 9,
    imgUrl: "/resources/stencil.480x288-shipleap-blog-pic-300x180.jpg",
    title: "Navigating the Convoluted USPS Shipping Options",
    desc: "Every business looks for ways to cut costs. Edging off a few dollars every month can make the difference between survival and closure, especially lately.",
    date: "December 24, 2023",
    commit: "No Comments",
  },
];

const page = () => {
  return (
    <div>
      <div className="bg-[url('/resources/resource-guy.png')] bg-no-repeat bg-cover bg-center w-full ">
        <div className="w-full max-w-[1200px] mx-auto px-[16px] flex flex-row max-lg:flex-col py-[250px] max-sm:py-[100px]">
          {/* Header Section */}
          <div className="w-[50%] flex flex-col max-lg:w-full max-lg:items-center max-lg:justify-center">
            <h3 className="font-Nunito font-[600] text-white text-[16px] sm:text-[18px] lg:text-[20px]">
              SAVE TIME, SHIP SMARTER
            </h3>
            <img
              src="/resources/green-line.png"
              alt="line"
              className=" w-[200px] sm:w-[250px] object-cover object-center mt-6"
            />
            <h1 className="font-Lato font-[600] text-white text-[40px] sm:text-[50px] lg:text-[60px] mt-2">
              RESOURCES
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
            <button className="bg-white text-[#D820E0] font-Lato font-[700] text-[16px] sm:text-[18px] lg:text-[20px] rounded-[15px] px-[40px] py-[20px]">
              Schedule a Demo
            </button>
            <button className="flex justify-center items-center gap-2 bg-transparent text-white font-Lato font-[700] text-[16px] sm:text-[18px] lg:text-[20px] rounded-[15px] px-[40px] py-[20px] border-2 border-white border-solid">
              <FaPlay color="white" />
              Watch Video
            </button>
          </div>
        </div>
      </div>
      {/* Blog Section */}
      <div className="w-full">
        <div className="w-full max-w-[1200px] mx-auto px-[16px] py-[100px] bg-[#FFFFFF]">
          <div className="grid items-stretch grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((item) => (
              <div
                key={item.id}
                className="flex flex-col h-full cursor-pointer rounded-md shadow-lg hover:shadow-2xl transition-all duration-200 ease-in"
              >
                <img
                  src={item.imgUrl}
                  alt={item.title}
                  className="object-cover object-center w-full rounded-t-md h-[200px] sm:h-[250px] md:h-[300px]"
                />
                <div className="flex-grow p-6">
                  <h1 className="text-[#54595F] font-Roboto font-[600] text-[18px] sm:text-[20px] md:text-[21px] mt-4">
                    {item.title}
                  </h1>
                  <p className="text-[#777777] font-Roboto font-[400] text-[14px] mt-6 md:mt-8">
                    {item.desc}
                  </p>
                  <button className="flex justify-center items-center text-[#1B4284] text-[12px] font-sans font-[500] mt-6 md:mt-8 hover:text-[#3a6097]">
                    READ MORE <MdKeyboardDoubleArrowRight className="ml-1" />
                  </button>
                </div>
                <hr />
                <div className="px-6 py-4 text-[#ADADAD] font-sans font-[400] text-[12px] flex items-end">
                  <span>{item.date}</span> <span className="mx-2">•</span>
                  <span>No Comments</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
