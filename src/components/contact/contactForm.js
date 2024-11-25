'use client'
import React, { useState } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    reason: "",
    phone: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({ fullName: "", reason: "", phone: "", email: "", message: "" });
      } else {
        setStatus("Error sending message: " + result.message);
      }
    } catch (error) {
      setStatus("Error sending message: " + error.message);
    }
  };
  return (
    <div className="w-full pt-[0px] bg-no-repeat bg-[url('/contact/contactbg.png')]  bg-[center_top_200px]">
      <div className="flex flex-col-reverse lg:flex-row min-h-screen justify-center items-center max-w-[1200px] mx-auto px-[80px] max-tab:px-tab max-md:px-mobile">
        <div className="lg:w-[60%] p-8 lg:p-16 bg-white shadow-2xl h-fit rounded-[15px]">
        <form className="space-y-6" onSubmit={handleSubmit}>
            <input
              type="text"
              required
              name="fullName"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full p-3 text-[15px] text-[#3D4459] outline-none bg-[#fafafa] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <div className="relative">
              <select
                name="reason"
                value={formData.reason}
                onChange={handleInputChange}
                className="w-full text-[15px] text-[#3D4459] p-3 cursor-pointer font-nunito font-[300] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-[#fafafa] appearance-none"
              >
                <option value="">Reason for contacting us</option>
                <option value="General Inquiry">General Inquiry</option>
                <option value="Starter Plan">We want to do the Starter Plan</option>
                <option value="Standard Plan">We want to do the Standard Plan</option>
                <option value="Pro Plan">We want to do the Pro Plan</option>
                <option value="Enterprise Plan">We want to do the Enterprise Plan</option>
              </select>
              <IoMdArrowDropdown size={25} className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none" />
            </div>
            <input
              type="tel"
              required
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#fafafa] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#fafafa] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <textarea
              name="message"
              placeholder="Write Us"
              rows={4}
              value={formData.message}
              onChange={handleInputChange}
              className="w-full p-3 bg-[#fafafa] rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>
            <div className="flex items-end justify-end">
              <button
                type="submit"
                className="bg-[#4632da] text-[16px] font-nunito font-[300] hover:bg-indigo-700 text-white py-3 px-9 justify-self-end rounded-[13px] transition duration-300 ease-in-out flex items-center justify-center"
              >
                SEND
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </form>
          {status && <p className="mt-4 text-center text-indigo-600">{status}</p>}
        </div>
        <div className="lg:w-1/2 max-md:w-full p-8 lg:p-12 max-md:px-[28px] max-md:mt-[80px] flex flex-col justify-center">
          <p className="text-indigo-600 mb-2 max-tab:text-center font-nunito text-[20px] font-[300]">
            Call Us, Email Us, Or Schedule A Demo
          </p>
          <h2 className="text-[#3D4459] max-tab:text-center leading-[40px] text-[35px] font-lato font-[700] mb-4">
            We Would Be Happy To <br className='max-tab:hidden' /> Learn All About Your <br className='max-tab:hidden'/> Business
          </h2>
          <p className="text-[#646464] max-tab:text-center font-[300] mb-6 text-[21px] font-lato">
            Let&apos;s connect. We can help you ship more <br className='max-tab:hidden'/> efficiently.
          </p>
          <p className="text-[#3D4459] max-tab:text-center font-lato font-[400] text-[18px]">
            Monday - Friday: 9AM - 5PM Eastern
          </p>
        </div>
      </div>
    </div>
  );
}
