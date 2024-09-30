import React from "react";

const products = [
  {
    id: 1,
    image: "/about-us/Goal-qaa67xb1u64kbci7foqci1vtjaq47crjxn0ez1mr7g.png",
    title: "Our Mission",
    description:
      "Our mission is to simplify and enhance the shipping experience for businesses of all sizes. We understand the challenges and complexities that come with shipping operations, and our goal is to provide intuitive and efficient software solutions that enable our clients to deliver their products swiftly and securely, while saving time and reducing costs. ",
  },
  {
    id: 2,
    image:
      "/about-us/Idea-Sharing-qaa67y8w105umygua74z2jna4olhf1va9rnwgbld18.png",
    title: "Our Expertise",
    description:
      "With years of experience in the shipping and logistics industry, our team of dedicated professionals brings a wealth of knowledge and expertise to every project. We have worked closely with a diverse range of clients, from small businesses to large enterprises, gaining insights into their unique shipping requirements. This deep understanding allows us to develop tailored software solutions that meet the specific needs of our clients and deliver exceptional results. ",
  },
  {
    id: 3,
    image:
      "/about-us/Popular-woman-qaa67xb1u64kbci7foqci1vtjaq47crjxn0ez1mr7g.png",
    title: "Our Solutions",
    description:
      "We offer a comprehensive suite of shipping software solutions designed to simplify every aspect of the shipping process. From order management and label generation to shipment tracking and analytics, our software provides a seamless and efficient workflow, enabling businesses to ship with confidence and precision. Our user-friendly interface and robust features make our software accessible to both novice users and experienced professionals.",
  },
];

const page = () => {
  return (
    <>
      <div className="bg-[url('/about-us/blue-and-2-e1571943716716.png')] w-full text-center font-Lato px-[16px] pt-[100px] pb-[200px] bg-center bg-cover">
        <h1 className="font-[700] text-[36px] sm:text-[48px] md:text-[56px] lg:text-[64px] text-white pt-[100px]">
          The ShipLeap Story
        </h1>
        <p className="font-[500] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-white mt-4">
          More than just about shipping packages from A to Z
        </p>
      </div>

      <div className="w-full bg-[#F3F3F3]">
        <div className="w-full max-w-[1200px] mx-auto max-md:px-[16px] px-[100px] py-[20px] flex flex-col gap-5">
          {products.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-[#FFFFFF] p-8 max-md:p-6 max-sm:p-4"
              >
                <img src={item.image} alt="" className="" />
                <h1 className="font-Lato font-[700] text-[24px] sm:text-[26px] md:text-[28px] lg:text-[30px] text-[#019818] mt-2">
                  {item.title}
                </h1>
                <p className="text-[#7a7a7a] font-Lato font-[400] text-[16px] sm:text-[18px] md:text-[20px] mt-4">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-[16px] py-[50px] flex flex-row max-md:flex-col">
          <div className="w-[50%] max-md:w-full">
            <img
              src="/about-us/shipping-warehouse.png"
              alt=""
              className="w-full object-cover object-center"
            />
          </div>
          <div className="w-[50%] max-md:w-full p-8">
            <h1 className="text-center font-Lato text-[#515151] text-[28px] sm:text-[30px] md:text-[35px] font-[700]">
              Why Did We Create ShipLeap?
            </h1>
            <p className="text-center font-Lato font-[400] text-[#646464] text-[18px] sm:text-[19px] md:text-[20px] mt-4">
              We believe there is a better way to ship packages—a faster, more
              dynamic and less carrier-dependent way, where companies can have
              all the information they need at their fingertips. We’re
              passionate about it, and our mission is to help businesses
              streamline their shipping process.
            </p>
          </div>
        </div>
      </div>

      <div className="w-full bg-white">
        <div className="w-full max-w-[1200px] mx-auto px-[16px] pb-[50px] flex flex-row-reverse max-md:flex-col">
          <div className="w-[50%] max-md:w-full">
            <img
              src="/about-us/Warehouse-worker-scanning-barcode-on-box.jpg"
              alt="Warehouse worker scanning barcode"
              className="w-full object-cover object-center"
            />
          </div>
          <div className="w-[50%] max-md:w-full p-8">
            <h1 className="text-center font-Lato text-[#515151] text-[28px] sm:text-[30px] md:text-[35px] font-[700]">
              Streamline Your Shipping
            </h1>
            <p className="text-center font-Lato font-[400] text-[#646464] text-[18px] sm:text-[19px] md:text-[20px] mt-4">
              We focus on smart shipping and maximizing savings. Without the
              right technology, it’s impractical to connect to MIS systems and
              check various carrier rates live—particularly for companies that
              do high-volume shipping. We see an opportunity. We’re excited to
              improve the shipping process for everyone through our technology
              and community.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
