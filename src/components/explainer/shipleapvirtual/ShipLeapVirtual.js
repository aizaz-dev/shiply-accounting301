'use client'
import Image from 'next/image';
import React from 'react';
import { MdCircle, MdChevronRight } from 'react-icons/md';

export default function ShipLeapVirtual() {
  const handleMeetingClick = (meetingType) => {
    console.log(`Clicked on ${meetingType} meeting`);
    // Add your logic here for what should happen when a meeting type is clicked
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
      <div className="flex justify-center mb-6">
       <Image src="/explainer/logo.png" height="80" width="80"/>
      </div>
      <h1 className="text-2xl font-semibold text-center mb-2">ShipLeap Virtual Meetings</h1>
      <p className="text-center text-gray-600 mb-8 max-w-md mx-auto">
        Welcome to the ShipLeap scheduling page. Please follow the instructions below to add an event to our calendar.
      </p>
      <div className="grid md:grid-cols-2 gap-6">
        {[
          {
            title: "Sales/Demo/Discovery Meeting",
            description: "See how ShipLeap can help streamline your shipping environment. Pick this option if you are interested in working with our platform. A Zoom invitation will be sen...",
          },
          {
            title: "Software support meeting",
            description: "Pick this option if you are already a customer and have questions about the software or need support. A Zoom invitation will be sent when you select a date. You c...",
          },
        ].map((meeting, index) => (
          <div 
            key={index}
            className="bg-gray-100 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => handleMeetingClick(meeting.title)}
          >
            <div className="flex items-center mb-4">
              <MdCircle className="text-green-400 mr-3" size={16} />
              <h2 className="text-lg font-semibold flex-grow">{meeting.title}</h2>
              <MdChevronRight className="text-gray-400" size={20} />
            </div>
            <p className="text-gray-600 text-sm">{meeting.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}