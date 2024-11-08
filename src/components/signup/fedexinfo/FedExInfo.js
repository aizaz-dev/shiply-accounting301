import React, { useState } from "react";

const FedExInfo = ({ onChange }) => {
  const [fedexData, setFedexData] = useState({
    accountNumber: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    companyName: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    countryCode: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFedexData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    onChange({
      ...fedexData,
      [name]: value,
    });
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
        <form className="flex flex-col">
          <div className="flex flex-col pb-14 max-md:pb-0">
            <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
              FEDEX account number
            </label>
            <input
              type="text"
              name="accountNumber"
              value={fedexData.accountNumber}
              onChange={handleChange}
              className="w-[60%] max-md:w-full p-2 outline-none border border-solid border-black rounded-sm"
            />
          </div>

          <div className="w-full flex gap-3 max-md:flex-col">
            <div className="w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
                FEDEX (billing) First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={fedexData.firstName}
                onChange={handleChange}
                className="w-full p-2 outline-none border border-solid border-black rounded-sm"
              />
            </div>
            <div className="w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
                FEDEX (billing) Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={fedexData.lastName}
                onChange={handleChange}
                className="w-full p-2 outline-none border border-solid border-black rounded-sm"
              />
            </div>
          </div>

          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            value={fedexData.jobTitle}
            onChange={handleChange}
            className="w-[80%] max-md:w-full p-2 outline-none border border-solid border-black rounded-sm"
          />

          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            FEDEX (billing) Company Name
          </label>
          <input
            type="text"
            name="companyName"
            value={fedexData.companyName}
            onChange={handleChange}
            className="w-full p-2 outline-none border border-solid border-black rounded-sm"
          />

          <div className="w-full flex gap-3 max-md:flex-col">
            <div className="w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
                FEDEX (billing) Phone
              </label>
              <input
                type="text"
                name="phone"
                value={fedexData.phone}
                onChange={handleChange}
                className="w-full p-2 outline-none border border-solid border-black rounded-sm"
              />
            </div>
            <div className="w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
                FEDEX (billing) Email
              </label>
              <input
                type="email"
                name="email"
                value={fedexData.email}
                onChange={handleChange}
                className="w-full p-2 outline-none border border-solid border-black rounded-sm"
              />
            </div>
          </div>

          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            FEDEX (billing) Street
          </label>
          <input
            type="text"
            name="street"
            value={fedexData.street}
            onChange={handleChange}
            className="w-full p-2 outline-none border border-solid border-black rounded-sm"
          />

          <div className="w-full flex gap-3 max-md:flex-col">
            <div className="w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
                FEDEX (billing) City
              </label>
              <input
                type="text"
                name="city"
                value={fedexData.city}
                onChange={handleChange}
                className="w-full p-2 outline-none border border-solid border-black rounded-sm"
              />
            </div>
            <div className="w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
                FEDEX (billing) State
              </label>
              <input
                type="text"
                name="state"
                value={fedexData.state}
                onChange={handleChange}
                className="w-full p-2 outline-none border border-solid border-black rounded-sm"
              />
            </div>
            <div className="w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
                FEDEX (billing) ZipCode
              </label>
              <input
                type="text"
                name="zipCode"
                value={fedexData.zipCode}
                onChange={handleChange}
                className="w-full p-2 outline-none border border-solid border-black rounded-sm"
              />
            </div>
          </div>

          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            FEDEX (billing) Country Code (Two-letter code)
          </label>
          <input
            type="text"
            name="countryCode"
            value={fedexData.countryCode}
            onChange={handleChange}
            className="w-[50%] max-md:w-full p-2 outline-none border border-solid border-black rounded-sm"
          />
        </form>
      </div>
    </div>
  );
};

export default FedExInfo;
