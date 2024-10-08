"use client";

import React from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./style.css";
const PrevArrow = ({ className, onClick }) => (
  <FaChevronLeft
    color="green"
    size={50}
    className={`${className} text-green-600 ml-[10px] max-md:ml-[25px] -mt-[30px] z-10 cursor-pointer custom-arrow-size`} // Apply custom class
    onClick={onClick}
  />
);

const NextArrow = ({ className, onClick }) => (
  <FaChevronRight
    color="green"
    size={50}
    className={`${className} text-green-600 mr-[10px] max-md:mr-[25px] -mt-[30px] cursor-pointer custom-arrow-size`} // Apply custom class
    onClick={onClick}
  />
);

const logos = [
    { name: 'Deutsche Post', src: '/homepage/connectedSlider/1.png' },
    { name: 'DHL', src: '/homepage/connectedSlider/2.png' },
    { name: 'Australia Post', src: '/homepage/connectedSlider/3.png' },
    { name: 'OnTrac', src: '/homepage/connectedSlider/4.png' },
    { name: 'UPS', src: '/homepage/connectedSlider/6.png' },
    { name: 'USPS', src: '/homepage/connectedSlider/7.png' },
    { name: 'FedEx', src: '/homepage/connectedSlider/8.png' },
    { name: 'Company 13', src: '/homepage/connectedSlider/13.png' },
    { name: 'Company 14', src: '/homepage/connectedSlider/14.png' },
    { name: 'Company 15', src: '/homepage/connectedSlider/15.png' },
    { name: 'Company 16', src: '/homepage/connectedSlider/16.png' },
    { name: 'Company 17', src: '/homepage/connectedSlider/17.jpg' },
    { name: 'Company 18', src: '/homepage/connectedSlider/18.png' },
    { name: 'Company 19', src: '/homepage/connectedSlider/19.png' },
    { name: 'Company 20', src: '/homepage/connectedSlider/20.png' },
    { name: 'Company 21', src: '/homepage/connectedSlider/21.png' },
  ];
  

export default function ConnectedSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoPlay: true,
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: true,
    swipeToSlide: true, 
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: (dots) => (
      <div className="mt-4">
        <ul className="flex space-x-[-5px] justify-center">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-[5px] h-[5px] max-md:-mt-[0px] bg-gray-400 rounded-full"></div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-6xl mx-auto px-[80px] max-tab:px-tab max-md:px-mobile py-8">
      <Slider {...settings}>
        {logos.map((logo, index) => (
          <div key={index} className="px-2">
            <img src={logo.src} alt={logo.name} className="mx-auto" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
