import React from "react";
import {
  FaLinkedin,
  FaReddit,
  FaRegCommentDots,
  FaTwitter,
} from "react-icons/fa";
import { IoCalendarClear, IoChevronBackOutline } from "react-icons/io5";
import { MdEmail, MdOutlineFacebook } from "react-icons/md";
import { RiWhatsappLine } from "react-icons/ri";

const page = () => {
  return (
    <div>
      <div className=" w-full bg-[#1B4284] h-[220px]"></div>
      <div className=" relative w-full  p-8 flex flex-row max-lg:flex-col max-lg:p-0">
        <div className=" w-[50%] max-lg:w-full">
          <img
            src="/blog/Depositphotos_67122483_ds-scaled.jpg"
            alt=""
            className=" w-full object-cover object-center "
          />
        </div>

        <div className="flex max-lg:hidden w-[53%] absolute  left-[45%] py-[50px] max-xl:py-0  ">
          <div className=" w-full h-[100%] bg-[url('/blog/Depositphotos_67122483_ds-scaled.png')] bg-center bg-cover p-4">
            <h1 className=" text-white font-Lato font-[600] text-[50px] max-2xl:text-[40px] max-xl:text-[36px] ">
              Enhance Your Shipping Automation with ShipLeap’s Integration to
              Odyssey 2.0 from Marketing Ideas for Printers
            </h1>
            <div className=" flex items-center gap-2 text-white cursor-pointer">
              <IoCalendarClear /> october 10, 2023 <FaRegCommentDots /> No
              Comments
            </div>
          </div>
        </div>

        <div className="w-full hidden max-lg:block">
          <div className="w-full h-[100%] bg-[url('/blog/Depositphotos_67122483_ds-scaled.png')] bg-center bg-cover p-8">
            <h1 className="text-white font-Lato font-[600] text-[24px] sm:text-[30px] md:text-[40px] lg:text-[50px]">
              Enhance Your Shipping Automation with ShipLeap’s Integration to
              Odyssey 2.0 from Marketing Ideas for Printers
            </h1>
            <div
              className="flex items-center gap-2 text-white text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] cursor-pointer
            "
            >
              <IoCalendarClear /> October 10, 2023 <FaRegCommentDots /> No
              Comments
            </div>
          </div>
        </div>
      </div>

      {/* details */}
      <div className=" w-full">
        <div className=" w-full max-w-[1200px] mx-auto px-[16px] flex flex-row max-md:flex-col gap-4 ">
          <div className=" flex flex-col max-md:flex-row gap-4 m-5 p-5 max-md:p-0 max-md:m-0 max-md:justify-center max-md:items-center max-md:py-4 md:sticky top-2 z-50 h-full ">
            <div className=" w-[72px] py-2 bg-[#366CDD] flex items-center justify-center hover:bg-[#5582e2] transition-all duration-150 ease-in-out cursor-pointer">
              <MdOutlineFacebook color="white" size={25} />
            </div>
            <div className=" w-[72px]  py-2 bg-[#00CFFF] flex items-center justify-center hover:bg-[#42d3f3] transition-all duration-150 ease-in-out cursor-pointer">
              <FaTwitter color="white" size={25} />
            </div>
            <div className=" w-[72px]  py-2 bg-[#009BFF] flex items-center justify-center hover:bg-[#5582e2] transition-all duration-150 ease-in-out cursor-pointer">
              <FaLinkedin color="white" size={25} />
            </div>

            <div className=" w-[72px]  py-2 bg-[#FF3E00] flex items-center justify-center hover:bg-[#f36f43] transition-all duration-150 ease-in-out cursor-pointer">
              <FaReddit color="white" size={25} />
            </div>
            <div className=" w-[72px]  py-2 bg-[#00FF54] flex items-center justify-center hover:bg-[#44f37f] transition-all duration-150 ease-in-out cursor-pointer">
              <RiWhatsappLine color="white" size={25} />
            </div>
            <div className=" w-[72px] py-2  bg-[#FF3C22] flex items-center justify-center hover:bg-[#f36f43] transition-all duration-150 ease-in-out cursor-pointer">
              <MdEmail color="white" size={25} />
            </div>
          </div>
          <div className=" w-full m-5 p-5 max-md:m-0 max-md:p-0">
            <p className=" text-Lato font-[400] text-[#7A7A7A] text-[20px]">
              We are excited to announce a game-changing integration for Odyssey
              2.0 users—ShipLeap has joined forces with Marketing Ideas for
              Printers to bring you seamless shipping automation capabilities.
              This powerful integration empowers businesses using Odyssey 2.0 to
              streamline their shipping processes, optimize workflows, and
              deliver exceptional customer experiences. Read on to discover how
              ShipLeap’s integration with Odyssey 2.0 can revolutionize your
              shipping automation.
            </p>
            <h1 className=" text-Lato font-[600] text-[#1B4284] text-[22px] py-4">
              Streamlined Shipping Processes
            </h1>
            <p className=" text-Lato font-[400] text-[#7A7A7A] text-[20px]">
              We understand the importance of efficient shipping operations. Our
              integration with Odyssey 2.0 provides a seamless and intuitive
              experience for managing your shipping needs. By leveraging
              ShipLeap’s robust shipping automation features within Odyssey 2.0,
              you can simplify your workflow and save valuable time. Say goodbye
              to manual processes and enjoy a streamlined shipping experience
              like never before.
            </p>
            <h1 className=" text-Lato font-[600] text-[#1B4284] text-[22px] py-4">
              Automate and Simplify Your Workflow
            </h1>
            <p className=" text-Lato font-[400] text-[#7A7A7A] text-[20px]">
              With ShipLeap’s integration, you can automate key shipping tasks,
              eliminating repetitive manual efforts. From generating shipping
              labels to tracking packages, ShipLeap seamlessly integrates with
              Odyssey 2.0, enabling you to manage your shipping operations
              effortlessly. By reducing manual data entry and minimizing errors,
              you can improve accuracy and expedite order fulfillment, ensuring
              a smooth shipping process from start to finish.
            </p>
            <h1 className=" text-Lato font-[600] text-[#1B4284] text-[22px] py-4">
              Unleash the Power of Advanced Shipping Tools
            </h1>
            <p className=" text-Lato font-[400] text-[#7A7A7A] text-[20px]">
              ShipLeap brings a wealth of advanced shipping tools to Odyssey 2.0
              users. Take advantage of features such as real-time carrier rates,
              label printing, batch processing, and address validation—all
              within the familiar Odyssey 2.0 interface. With access to multiple
              shipping carriers and comprehensive shipping options, you can
              choose the best shipping methods for your business and provide
              reliable, cost-effective shipping solutions to your customers.
            </p>
            <h1 className=" text-Lato font-[600] text-[#1B4284] text-[22px] py-4">
              Seamless Order and Inventory Management
            </h1>
            <p className=" text-Lato font-[400] text-[#7A7A7A] text-[20px]">
              The integration between ShipLeap and Odyssey 2.0 enables seamless
              order and inventory management. Sync orders between the platforms
              effortlessly, ensuring accurate shipping information and
              minimizing discrepancies. With real-time inventory updates and
              order status visibility, you can efficiently manage your shipping
              operations, reduce fulfillment errors, and provide your customers
              with accurate shipping information.
            </p>
            <h1 className=" text-Lato font-[600] text-[#1B4284] text-[22px] py-4">
              Optimize Your Shipping Strategy
            </h1>
            <p className=" text-Lato font-[400] text-[#7A7A7A] text-[20px]">
              ShipLeap’s integration with Odyssey 2.0 goes beyond automation and
              offers valuable insights to optimize your shipping strategy.
              Leverage ShipLeap’s robust reporting and analytics capabilities to
              track shipping expenses, monitor carrier performance, and identify
              areas for cost savings. By analyzing shipping data, you can make
              data-driven decisions, negotiate better rates with carriers, and
              continuously refine your shipping processes for optimal
              efficiency.
            </p>
            <h1 className=" text-Lato font-[600] text-[#1B4284] text-[22px] py-4">
              Getting Started with ShipLeap and Odyssey 2.0
            </h1>
            <p className=" text-Lato font-[400] text-[#7A7A7A] text-[20px]">
              Embarking on this transformative shipping automation journey is
              simple. Visit our website to learn more about ShipLeap and sign up
              for an account. Our dedicated support team will guide you through
              the integration process, ensuring a smooth transition to a more
              streamlined shipping experience. Take advantage of the combined
              power of ShipLeap and Odyssey 2.0 to elevate your shipping
              automation and deliver exceptional customer satisfaction.
            </p>
            <p className=" text-Lato font-[400] text-[#7A7A7A] text-[20px] py-4">
              ShipLeap’s integration with Odyssey 2.0 from Marketing Ideas for
              Printers is a significant milestone in our commitment to
              empowering businesses with cutting-edge shipping automation
              solutions. Seamlessly manage your shipping processes, automate key
              tasks, and optimize your shipping strategy, all within the
              familiar Odyssey 2.0 platform. Experience the power of ShipLeap’s
              advanced shipping tools and elevate your shipping automation to
              new heights.
            </p>
            <p className=" text-Lato font-[400] text-[#7A7A7A] text-[20px] pt-2 pb-[50px]">
              Take the next step in your shipping automation journey with
              ShipLeap and Odyssey 2.0. Visit our website today to learn more
              and unlock a world of streamlined shipping possibilities.
              Together, we’ll help you simplify your workflow, improve
              efficiency, and provide exceptional shipping experiences for your
              customers.
            </p>
            <hr />
            <div className=" p-4 max-md:px-0 max-md:py-2">
              <h1 className=" font-[600] font-sans text-[24px] text-[#1B4284] pb-4">
                Leave a Reply
              </h1>
              <form action="">
                <textarea
                  typeof="text"
                  placeholder="Your comment here..."
                  name=""
                  id=""
                  className=" w-full outline-none border-solid border p-4 rounded-sm "
                ></textarea>
                <div className=" flex flex-row max-md:flex-col gap-2 py-2">
                  <input
                    type="text"
                    placeholder="Name (required)"
                    className=" w-full p-2 outline-none border border-solid  rounded-sm"
                  />{" "}
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Email (required)"
                    className=" w-full p-2 outline-none border border-solid  rounded-sm"
                  />{" "}
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Website"
                    className=" w-full p-2 outline-none border border-solid  rounded-sm"
                  />
                </div>
                <div className=" flex gap-2">
                  <input type="checkbox" name="" id="" />{" "}
                  <p className=" text-Lato font-[400] text-[#4A4A4A] text-[14px]">
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </p>
                </div>
                <div className=" w-full flex justify-end">
                  <button className=" bg-[#0091FF] hover:bg-[#27577c] transition-all ease-in-out duration-150  px-4 py-2 font-Lato font-[600] text-[12px] text-white">
                    POST COMMENT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className=" w-full">
          <div className=" w-full max-w-[1200px] mx-auto px-[16px] pb-[100px]">
            <div className=" flex items-center gap-2 cursor-pointer">
              <div className=" text-[#1B4284]">
                <IoChevronBackOutline size={30} />
              </div>
              <div className="div">
                <div className=" font-Lato font-[400] text-[20px] text-[#1B4284]">
                  PREVIOUS
                </div>
                <div className=" font-Lato font-[400] text-[#54595F] text-[14px]">
                  2023 UPSS Rates
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
