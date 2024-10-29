import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function Hero() {
  return (
    <div className="min-h-[90vh] max-md:min-h-[100vh]  flex items-center justify-center bg-[url('/homepage/HeroComponent/bg.jpg')] bg-cover bg-center">
      <div className="!h-[100%] max-w-[1200px] mx-auto flex  items-center justify-center  bg-opacity-80">
        <div className="flex max-laptop:flex-col gap-[30px] max-md:pt-[50px] max-tab:gap-0 items-stretch justify-center  text-white text-center px-4">
          <div className="w-[50%] max-laptop:w-full">
            <h1 className="text-[60px] max-tab:text-center  max-md:text-[28px]  font-[600] font-lato text-left mb-4 leading-[65px] max-tab:leading-[55px] max-md:leading-[35px]">
              THE BEST SHIPPING EXPERIENCE FOR YOUR BUSINESS
            </h1>
            <p className="text-[30px] max-tab:text-center max-md:text-[20px] font-nunito mb-8 text-left max-md:leading-[25px] ">
              A complete, easy-to-use shipping solution that you and your
              customers will love
            </p>
          </div>
          <div className="flex max-tab:flex-col max-tab:items-center max-tab:gap-5 max-tab:justify-center space-x-4 w-[50%] max-laptop:w-full items-end ">
            <Link target="_blank" href="https://calendly.com/shipleap">
              <button className="text-[18px] whitespace-nowrap bg-white text-blue-900  px-[40px] py-[20px] rounded-[12px] font-semibold hover:bg-gray-200 transition-colors duration-200">
                Schedule Live Demo
              </button>
            </Link>
            <Link href="/send-demo">
              <button className="text-[18px] whitespace-nowrap flex items-center justify-center gap-2 bg-transperent border-[3px] border-solid border-primary rounded-[12px] px-[40px] py-[17px] text-primary  font-semibold transition-colors duration-200">
                <FaPlay /> View Demo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
