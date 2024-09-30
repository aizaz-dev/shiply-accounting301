// components/Customers.js
'use client'
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

const Customers = () => {
  const testimonials = [
    {
      quote: "Our staff loves ShipLeap! Instead of uploading the address CSV files to WorldShip, we were able to upload the entire spreadsheet and print all the labels at once. I was able to export a CSV file that included all the tracking information and costs. This easily saved us four to five hours of time. We instituted the two second lean concept acouple of years ago, and all the staff think this is our best two second lean yet!",
      name: "Sam Manci",
      title: "Allegra Marketing, Image360, Tampa, FL",
      image: "/homepage/customers/sammanci.png", // Replace with actual image URL
    },
    {
      quote: "ShipLeap is the perfect shipping solution for our integration needs. ShipLeap is integrated with Four51 and Printsmith. It sends out tracking to clients for each job, and closes out jobs in Four51. No more double entry for Four51 or Printsmith orders that require a ship to address that isn't already in Printsmith. The system is as easy as pulling up the job, placing a box on the scale it reads the weight, you select a pre set up box size and magically a label prints out and you're done!",
      name: "Kathy Morgan",
      title: "Sir Speedy Printing & Signs",
      image: "/homepage/customers/kathy.png", // Replace with actual image URL
    },
    {
      quote: "ShipLeap has really helped the efficiency of the shipping process at my business. We use the software at both my locations. My customers and employees are happier as a result of switching to the ShipLeap platform, and I am glad to recommend ShipLeap to any business that ships product.",
      name: "Satya Kothiyal",
      title: "AlphaGraphics Northern Colorado",
      image: "/homepage/customers/satya.png", // Replace with actual image URL
    },
    {
      quote:"Just wanted to shoot you a quick note about our experience so far with ShipLeap. We have now been on it for about six weeks and are very happy. It is extremely easy to use, and because of this we now have five different people trained who do the shipping vs. just one prior to ShipLeap. The most important reason we went with ShipLeap is the automatic notification our customers get once a package is sent. Two of our top five customers esponded back to us the first day we shipped to them, saying they love that they will always get the <br> notifications moving forward. <br> <br>That in itself makes the service valuable to us. Thanks once again for the product and quality service.",
      name:"John Flynn",
      title:"Allegra Print Signs Design. Dulles, VA",
      image:"/homepage/customers/john.png",
    },
    {
      quote:"ShipLeap has streamlined our shipping processes and made our day-to-day operations flow smoothly and efficiently. The ability to compare shipping prices in one dashboard has saved us tons of time and money, and our customers love the branded email notifications with tracking!",
      name:"Kari-Ann Smith",
      title:"AlphaGraphics, Wilmington, NC",
      image:"/homepage/customers/karri.png",
    },
    {
      quote:"We just recently began using ShipLeap after it was introduced to us by a colleague within the AlphaGraphics network. It has made our shipping process much faster, especially when dealing with nationwide rollouts. The back integration to PSV with tracking and pricing is great! The ShipLeap team has been very supportive through the whole process of installation and is always ready to answer any questions.",
      name:"Arif Jacksi",
      title:"President at AlphaGraphics of New York",
      image:"/homepage/customers/arif.png",
    },
    {
      quote:"In a short amount of time, ShipLeap has proven to be a valuable tool for our company. The program is user- riendly and a great timesaver. The program integrates smoothly with PrintSmith, allowing for minimal manual data input. Clients are automatically notified of their shipment details with an Allegra-branded email. Truly a fantaqtir nrndl ICt",
      name:"PJ Bobo",
      title:"Allegra Printing. Winston-Salem. NC",
      image:"/homepage/customers/carrier.png",
    },
    {
      quote:"We were able to use the report feature in ShipLeap to export all the tracking numbers for a large shipment into an excel document. We were then able to sort it to match the customer supplied list of addresses and paste all the tracking information back into the customer's list as they require. It took about 30 seconds to sort, copy, and paste this info into their list. It used to take several hours to manually copy the tracking numbers from our old shipping platform.",
      name:"John Beery",
      title:"Campbell Print Center",
      image:"/homepage/customers/jBeery.png",
    },
    {
      quote:"ShipLeap is efficient, accurate, and affordable. GAM has found the platform's interface easy-to-use with quick response time, and ShipLeap has excellent customer service. ShipLeap has helped save time and money by simplifying the fulfillment process and reducing shipping costs. And since it seamlessly integrates with our existing PSV eCommerce platforms, it makes it easier to manage and fulfill orders. GAM is highly satisfied with ShipLeap's services and recommend it to other eCommerce businesses looking for a reliable and cost-effective shipping solution.",
      name:"Nathaniel Grant",
      title:"GAM Graphics and Marketing",
      image:"/homepage/customers/modify.png",
    }
    // Add more testimonials here if needed
  ];

  const PrevArrow = ({ className, style, onClick }) => (
    <FaAngleLeft color='grey' className={`${className} text-green-600 max-md:ml-[15px] z-100 mt-[30px]`} onClick={onClick} />
  );

  const NextArrow = ({ className, style, onClick }) => (
    <FaAngleRight color='grey' className={`${className} text-green-600 mt-[30px] max-md:mr-[15px]`} onClick={onClick} />
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="mt-4 ">
        <ul className="flex space-x-[-1px] justify-center">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-[7px] h-[7px] max-md:-mt-[200px] bg-gray-400 rounded-full"></div>
    ),
  };

  return (
    <div className="bg-white py-10 max-md:pb-0 mt-[80px] max-tab:p-tab max-md:p-mobile max-md:mb-[-190px]">
      <h2 className="text-green-600 text-[35px] font-[700] font-lato max-md:text-[30px] text-center mb-8">
        What Our Customers Say
      </h2>
      <div className="max-w-[1000px] mx-auto px-4 max-md:px-0">
        <Slider {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="text-center">
             <div
                className="text-greyText mb-6 max-tab:p-tab max-md:p-mobile text-[20px] font-lato text-balance mx-auto"
                dangerouslySetInnerHTML={{ __html: testimonial.quote }}
              />
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="rounded-full h-24 w-24 mx-auto mb-4"
              />
              <h4 className="text-[22px] font-[500] hover:text-[#13AFF0] font-lato">{testimonial.name}</h4>
              <p className="text-greenPrimary">{testimonial.title}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Customers;
