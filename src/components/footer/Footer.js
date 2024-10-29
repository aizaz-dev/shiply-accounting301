'use client'
import Link from "next/link";
import Image from "next/image";
import {
  FaFacebookSquare,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";



const reloadOnNavigation = ['explainer']; 

export default function Footer() {

  const handleClick = (label, url) => {
    if(reloadOnNavigation.includes(label.toLowerCase())){
      window.location.href = url;
    }
  }

  return (
    <footer className="bg-[#1b4284] text-white py-12 pt-[50px]">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <h2 className="text-[46px] max-md:text-[28px] max-md:text-center font-lato font-[700] mb-4 md:mb-0">
            Streamline your shipping <br /> today with ShipLeap.
          </h2>
          <Link
            href="/signup"
            className="bg-white text-[18px] text-[#1B4284] px-[40px] py-[20px] rounded-[15px] font-semibold font-lato hover:bg-opacity-90 transition duration-300"
          >
            Sign Up Now!
          </Link>
        </div>

        <hr className="border-white border-opacity-20 mb-12 max-md:mb-[0px]" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mb-12 max-md:pl-[20px]">
          <div className="col-span-1 mt-[100px] mr-[50px] max-md:mb-[20px] max-md:mr-auto max-md:mx-auto">
            <Image
              src="/homepage/header/shipleap.png"
              alt="ShipLeap Logo"
              width={270}
              height={38}
              className="mb-4"
            />
          </div>

          <div className="col-span-1 ml-[50px] max-tab:ml-[20px] max-md:ml-[0px]">
            <h3 className="font-poppins font-[500] text-[22px] mb-4">
              COMPANY
            </h3>
            <ul className="space-y-2 list-none">
              <li>
                <Link
                onClick={() => handleClick('explainer', '/explainer')}
                
                  href="/explainer"
                  className="hover:underline text-[16px] font-lato"
                >
                  Explainer
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="hover:underline text-[16px] font-lato"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/resources"
                  className="hover:underline text-[16px] font-lato"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about-us"
                  className="hover:underline text-[16px] font-lato"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className="hover:underline text-[16px] font-lato"
                >
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/insurance"
                  className="hover:underline text-[16px] font-lato"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  href="/partner-api"
                  className="hover:underline text-[16px] font-lato"
                >
                  Partner API
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="hover:underline text-[16px] font-lato"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="hover:underline text-[16px] font-lato"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/referral"
                  className="hover:underline text-[16px] font-lato"
                >
                  Referral
                </Link>
              </li>
              <li>
                <Link
                  href="/signup"
                  className="hover:underline text-[16px] font-lato"
                >
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-poppins font-[500] text-[22px] mb-4">LEGAL</h3>
            <ul className="space-y-2 list-none" >
              <li>
                <Link
                  href="/terms-and-conditions"
                  className="hover:underline text-[16px] font-lato"
                >
                  Terms And Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:underline text-[16px] font-lato"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/end-user-agreement"
                  className="hover:underline text-[16px] font-lato"
                >
                  End User Agreement
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-poppins font-[500] text-[22px] mb-4">
              CONTACT
            </h3>
            <p>558 Central Avenue</p>
            <p>New Providence, NJ 07974</p>
            <p className="mt-4">1-888-321-0072</p>
            <p className="mt-4">info@shipleap.com</p>
            <div className="flex space-x-4 mt-4">
              <Link
                target="_blank"
                href="https://facebook.com/shipleap"
                className="hover:opacity-80"
              >
                <FaFacebookSquare size={24} />
              </Link>
              <Link
                target="_blank"
                href="https://instagram.com/shipleap"
                className="hover:opacity-80"
              >
                <FaInstagram size={24} />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/company/51706803"
                className="hover:opacity-80"
              >
                <FaLinkedin size={24} />
              </Link>
              <Link
                target="_blank"
                href="https://twitter.com/shipleap"
                className="hover:opacity-80"
              >
                <FaTwitter size={24} />
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-sm font-lato">
          <p>&copy; {new Date().getFullYear()} - All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}
