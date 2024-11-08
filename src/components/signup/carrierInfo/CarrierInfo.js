import React, { useState } from "react";

const CarrierInfo = ({ onChange }) => {
  const [carrierData, setCarrierData] = useState({
    carrierName: "",
    accountNumber: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCarrierData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    onChange({
      ...carrierData,
      [name]: value,
    });
  };

  return (
    <div className="w-full">
      <div className="w-full max-w-[756px] mx-auto px-[16px] py-[50px]">
        <form className="flex flex-col">
          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            Other carrier name (GSO, Ontrac, etc.)
          </label>
          <input
            type="text"
            name="carrierName"
            placeholder="GSO, Ontrac"
            value={carrierData.carrierName}
            onChange={handleChange}
            className="w-[60%] max-md:w-full p-2 outline-none border border-solid border-black rounded-sm placeholder:text-blue-500"
          />

          <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
            Account number
          </label>
          <input
            type="text"
            name="accountNumber"
            value={carrierData.accountNumber}
            onChange={handleChange}
            className="w-[60%] max-md:w-full p-2 outline-none border border-solid border-black rounded-sm"
          />

          <div className="w-full flex gap-3 max-md:flex-col">
            <div className="w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={carrierData.username}
                onChange={handleChange}
                className="w-full p-2 outline-none border border-solid border-black rounded-sm"
              />
            </div>
            <div className="w-full">
              <label className="text-[#7A7A7A] text-[16px] font-[400] font-lato mt-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={carrierData.password}
                onChange={handleChange}
                className="w-full p-2 outline-none border border-solid border-black rounded-sm"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CarrierInfo;
