import Image from 'next/image';
import React from 'react';

const Features = () => {
  const features = [
    {
      icon: '/homepage/featuresComponent/watch.png', // Replace with the path to your first icon
      title: 'Save Time, Ship Smarter',
      description:
        'Transform your shipping with a smarter, faster, and more efficient process. Save money by shopping rates.',
    },
    {
      icon: '/homepage/featuresComponent/star.png', // Replace with the path to your second icon
      title: 'Elevate Your <br> Brand',
      description:
        'Automatically send branded emails with shipping information, along with cross-selling messaging.',
    },
    {
      icon: '/homepage/featuresComponent/heart.png', // Replace with the path to your third icon
      title: 'Increase Customer Satisfaction',
      description:
        'Customers want to know where their packages are. Keep them informed throughout the shipping journey.',
    },
  ];

  return (
    <div className="bg-[#f7f7f7] py-16">
      <div className="container max-w-[1200px] max-tab:p-tab mx-auto flex flex-col md:flex-row justify-between  gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center text-center max-w-xs mx-auto">
            <Image
              width={120}
              height={119}
              src={feature.icon}
              alt={feature.title}
              className=" mb-4"
            />
            <h3
              className=" font-lato text-[#575757] text-[30px] font-[700] mb-4 leading-[30px]"
              dangerouslySetInnerHTML={{ __html: feature.title }}
            />
            <p className="text-[18px] font-[400] font-lato text-[#646464]">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
