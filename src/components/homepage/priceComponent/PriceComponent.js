'use client'
import React, { useState, useEffect, useRef } from 'react';
import CountUp from 'react-countup';

const PriceComponent = () => {
  const stats = [
    { value: 552621, label: 'Labels printed' },
    { value: 17327221, label: 'Postage purchased', isCurrency: true },
    { value: 31.34, label: 'Average label cost', isCurrency: true, decimals: 2 },
    { value: 746038, label: 'Email notifications sent' },
  ];

  const [isVisible, setIsVisible] = useState(false);
  const componentRef = useRef(null);

  // Intersection Observer to detect when component enters and leaves view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true); // Start counting when in view
        } else {
          setIsVisible(false); // Reset counting when out of view
        }
      },
      { threshold: 0.3 }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={componentRef}
      className="bg-[url('/homepage/priceComponent/bgprice.png')] bg-opacity-[0.5] bg-black bg-cover bg-center h-[350px] max-md:h-auto text-white"
    >
      <div className="bg-black bg-opacity-[0.8] h-full flex items-center">
        <div className="container max-w-[1200px] max-tab:p-tab max-md:p-mobile mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col">
              {isVisible ? (
                <CountUp
                  start={0}
                  end={stat.value}
                  duration={2.5}
                  separator=","
                  prefix={stat.isCurrency ? '$' : ''}
                  decimals={stat.decimals || 0}
                  className="text-4xl font-semibold"
                />
              ) : (
                <span className="text-4xl font-semibold">0</span> // Reset to 0 when out of view
              )}
              <span className="text-lg mt-2">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PriceComponent;
