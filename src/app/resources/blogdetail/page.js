import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import { SlUser } from "react-icons/sl";
import { BsChat } from "react-icons/bs";
import { FaRegFolder } from "react-icons/fa";
import { GoClock } from "react-icons/go";

const products = [
  {
    id: 1,
    imgUrl: "/resources/Depositphotos_67122483_ds-2048x1229.jpg",
    title:
      "Enhance Your Shipping Automation with ShipLeap’s Integration to Odyssey 2.0 from Marketing Ideas for Printers",
    desc: "We are excited to announce a game-changing integration for Odyssey 2.0 users—ShipLeap has joined forces with Marketing Ideas for Printers to bring you seamless shipping",
  },
];

const page = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1200px] mx-auto px-[16px] py-[50px] bg-[#FFFFFF]">
        <div className=" w-[40%] max-md:w-full">
          {products.map((item) => (
            <div
              key={item.id}
              className="flex flex-col h-full cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-200 ease-in"
            >
              <img
                src={item.imgUrl}
                alt={item.title}
                className="object-cover object-center w-full  h-[200px] sm:h-[250px] md:h-[300px]"
              />
              <div className=" p-4">
                <h1 className="text-[#54595F] font-Roboto font-[600] text-[18px] sm:text-[20px] md:text-[21px] hover:text-[#007EFF]">
                  {item.title}
                </h1>
                <div className=" flex flex-col max-md:flex-row max-sm:flex-col mt-2 text-[#484E50] font-sans text-[14px] font-[400] ">
                  <div className=" flex items-center gap-2">
                    <SlUser />{" "}
                    <h1 className="hover:text-[#007EFF]">shipleapadmin</h1>{" "}
                    <span>-</span> <BsChat />
                    <h1 className="hover:text-[#007EFF]">0 Comments</h1>{" "}
                    <span>-</span>
                  </div>
                  <div className=" flex items-center gap-2">
                    <GoClock />{" "}
                    <h1 className="hover:text-[#007EFF]">October 10, 2023</h1>{" "}
                    <span>-</span> <FaRegFolder />
                    <h1 className="hover:text-[#007EFF]">ShipLeap Blog</h1>
                  </div>
                </div>
                <p className="text-[#777777] font-Roboto font-[400] text-[14px] mt-8">
                  {item.desc}
                </p>
                <button className=" underline flex justify-center items-center text-black text-[12px] font-sans font-[500] mt-6 md:mt-8 hover:text-[#007EFF]">
                  Continue Reading <IoIosArrowForward className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
