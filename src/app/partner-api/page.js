import React from 'react';

const products = [
    {
        id:1,
        url: "/Partner/integrate.png",
        heading: "Seamless Integration",
        desc: "Seamlessly integrate our robust shipping capabilities into your existing systems and workflows.",
    },
    {
        id:2,
        url: "/Partner/solutions.png",
        heading: "Tailored Solutions",
        desc: "We understand that every business is unique. You can collaborate closely with our team of experts.",
    },
    {
        id:3,
        url: "/Partner/support.png",
        heading: "Dedicated Support",
        desc: "You gain access to our dedicated support team–ready to assist you every step of the way.",
    },
];

const page = () => {
    return (
        <>
            <div className="">
  <div className="bg-[url('/Partner/BG.png')] bg-no-repeat bg-cover bg-center w-full text-center py-[280px] px-[16px]">
    <h1 className="font-[700] font-Lato text-white leading-[50px] text-[30px] sm:text-[40px] md:text-[50px]">
      UNLOCK THE POWER OF SHIPPING <br />
      WITH OUR PARTNER API
    </h1>
    <p className="font-[500] font-Lato text-white w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] mx-auto leading-[28px] mt-8 text-[16px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
      Our Partner API is designed to provide you with unparalleled integration capabilities, enhanced features, and dedicated support, empowering you to create customized shipping solutions that align perfectly with your business requirements.
    </p>
  </div>
</div>



<div className="w-full bg-[#F3F3F3]">
  <div className="w-full max-w-[1200px] py-[50px] px-[16px] mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
      {products.map((item) => {
        return (
          <div key={item.id} className="p-8 shadow-sm bg-white">
            <img src={item.url} alt={item.heading} className=" object-cover object-center" />
            <h1 className="text-[#575757] text-[24px] sm:text-[26px] md:text-[30px] font-[700] font-Lato py-4">
              {item.heading}
            </h1>
            <p className="font-Lato font-[400] text-[16px] sm:text-[18px] text-[#646464] py-4">
              {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  </div>
</div>

<div className="w-full">
  <div className="w-full max-w-[1200px] mx-auto px-4 py-[50px]">
    <h1 className="text-[#019818] font-Lato font-[700] text-[24px] sm:text-[28px] md:text-[30px] pb-8">
      Why Choose Our Partner API?
    </h1>

    <h3 className="text-[#646464] text-[20px] sm:text-[22px] font-[600] font-Lato pb-4">
      Seamless Integration
    </h3>
    <p className="text-[#646464] text-[18px] sm:text-[20px] md:text-[22px] font-[300] font-Lato">
      Seamlessly integrate our robust shipping capabilities into your existing systems and workflows. 
      Our Partner API offers a smooth and efficient integration process, ensuring that you can leverage 
      our shipping services without any disruption to your operations.
    </p>

    <h3 className="text-[#646464] text-[20px] sm:text-[22px] font-[600] font-Lato pb-4">
      Advanced Functionality
    </h3>
    <p className="text-[#646464] text-[18px] sm:text-[20px] md:text-[22px] font-[300] font-Lato py-4">
      Take advantage of an array of advanced features and functionalities available exclusively through our 
      Partner API. From real-time tracking and address validation to automated customs documentation and 
      international shipping options, our API opens up a world of possibilities for your shipping needs.
    </p>

    <h3 className="text-[#646464] text-[20px] sm:text-[22px] font-[600] font-Lato pb-4">
      Tailored Solutions
    </h3>
    <p className="text-[#646464] text-[18px] sm:text-[20px] md:text-[22px] font-[300] font-Lato py-4">
      We understand that every business is unique. With our Partner API, you can collaborate closely with 
      our team of experts to create tailor-made shipping solutions that cater specifically to your business 
      requirements. Whether it’s customizing shipping rules, implementing special handling instructions, or 
      integrating with your existing software, our API allows for unparalleled flexibility.
    </p>

    <h3 className="text-[#646464] text-[20px] sm:text-[22px] font-[600] font-Lato pb-4">
      Dedicated Support
    </h3>
    <p className="text-[#646464] text-[18px] sm:text-[20px] md:text-[22px] font-[300] font-Lato py-4">
      We believe in building strong partnerships. When you choose our Partner API, you gain access to our 
      dedicated support team, ready to assist you every step of the way. From initial integration to ongoing 
      maintenance and troubleshooting, we are committed to ensuring your success with our API.
    </p>

    <img
      src="/Partner/drawing.png"
      alt="Partner API Drawing"
      className="w-full object-cover object-center my-8"
    />

    <h1 className="text-[#019818] font-Lato font-[700] text-[24px] sm:text-[28px] md:text-[30px]">
      How to Get Started
    </h1>
    <p className="text-[#646464] text-[18px] sm:text-[20px] md:text-[22px] font-[300] font-Lato py-4">
      Getting started with our Partner API is quick and easy. Simply reach out to our team through our contact 
      form or email us at info@shipleap.com, and our API specialists will guide you through the onboarding process. 
      We’ll work closely with you to understand your unique needs, provide comprehensive documentation, and assist 
      with any technical aspects to ensure a seamless integration.
    </p>

    <h1 className="text-[#019818] font-Lato font-[700] text-[24px] sm:text-[28px] md:text-[30px]">
      Join Our Growing Network of Successful Partners
    </h1>
    <p className="text-[#646464] text-[18px] sm:text-[20px] md:text-[22px] font-[300] font-Lato py-4">
      Join the ranks of our esteemed partners who have unlocked the full potential of our shipping services through 
      our Partner API. Experience the advantages of streamlined operations, enhanced customer experience, and increased 
      efficiency. Don’t miss out on this opportunity to transform your shipping capabilities.
    </p>
    <p className="text-[#646464] text-[18px] sm:text-[20px] md:text-[22px] font-[300] font-Lato py-4">
      Contact us today to learn more about our Partner API and how it can revolutionize the way you ship your products.
    </p>
  </div>
</div>


        </>
    )
}

export default page
