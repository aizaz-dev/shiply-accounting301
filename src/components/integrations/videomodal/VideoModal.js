"use client";

import React from "react";
import ReactDOM from "react-dom";
import ReactPlayer from "react-player/lazy"; // Use lazy loading

const VideoModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Don't render if not open

  // Function to handle click outside the modal to prevent closing
  const handleModalClick = (e) => {
    e.stopPropagation(); // Prevent click events from bubbling up
  };

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-[100]"
      // No longer closing on background click
    >
      <div 
        className="relative w-full max-w-[80vw] " 
        onClick={handleModalClick} // Handle clicks inside the modal content
      >
        <button onClick={onClose} className="absolute text-[30px] font-bold max-h-[80%]  right-9 top-5 text-white z-10">
          X
        </button>
        
        <ReactPlayer
          url="/video.mp4"
          playing
          controls
          width="100%"
          height="80%"
          style={{ borderRadius: "8px", overflow: "hidden" }}
          className="object-cover"
        />
      </div>
    </div>,
    document.body // Append to the body
  );
};

export default VideoModal;
