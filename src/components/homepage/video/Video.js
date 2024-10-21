"use client";

import { useState, useRef, useEffect } from "react";
import {
  Play,
  Pause,
  Volume2,
  Maximize,
  Speed,
  FastForward,
} from "lucide-react"; // Import Speed icon

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [controlsVisible, setControlsVisible] = useState(true);
  const [centerButtonVisible, setCenterButtonVisible] = useState(true);
  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        setDuration(video.duration);
      };

      video.addEventListener("loadedmetadata", handleLoadedMetadata);
      video.addEventListener("timeupdate", () => {
        setCurrentTime(video.currentTime);
      });

      return () => {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      };
    }
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation(); // Stop event bubbling
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play().catch((error) => {
          console.error("Video play failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
    }
  };

  const handleProgressChange = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current) {
      videoRef.current.currentTime = time;
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const toggleSpeed = () => {
    const newSpeed = playbackSpeed === 1 ? 1.5 : playbackSpeed === 1.5 ? 2 : 1; // Toggle through 1x, 1.5x, and 2x
    setPlaybackSpeed(newSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed;
    }
  };

  const handleMouseEnter = () => {
    setControlsVisible(true); // Show controls on mouse enter
    clearTimeout(controlsTimeoutRef.current);
    setCenterButtonVisible(true); // Show the center button on mouse enter
  };

  const handleMouseMove = () => {
    setControlsVisible(true); // Keep showing controls on mouse move
    clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      setControlsVisible(false); // Hide controls after 2s of inactivity
      setCenterButtonVisible(false); // Hide the center button after controls are hidden
    }, 2000);
  };

  const handleMouseLeave = () => {
    clearTimeout(controlsTimeoutRef.current);
    setCenterButtonVisible(false); // Hide the center button when mouse leaves
    // Keep controls visible if playing
    if (!isPlaying) {
      setControlsVisible(false); // Hide controls if not playing
    }
  };

  useEffect(() => {
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setControlsVisible(false); // Hide controls after 2s of playing
        setCenterButtonVisible(false); // Hide the center button
      }, 2000);
    } else {
      setControlsVisible(true); // Keep controls visible if paused
      setCenterButtonVisible(true); // Keep center button visible if paused
    }

    return () => clearTimeout(controlsTimeoutRef.current);
  }, [isPlaying]);

  const toggleFullscreen = () => {
    const videoContainer = videoRef.current.parentElement;
    if (!isFullscreen) {
      if (videoContainer.requestFullscreen) {
        videoContainer.requestFullscreen();
      } else if (videoContainer.webkitRequestFullscreen) {
        // Safari
        videoContainer.webkitRequestFullscreen();
      }
    } else {
      // Check if the document is active before trying to exit fullscreen
      if (document.fullscreenElement) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
          // Safari
          document.webkitExitFullscreen();
        }
      }
    }
    setIsFullscreen(!isFullscreen);
  };
  

  return (
    <div
      className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg aspect-video bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        className="w-full h-full"
        onClick={togglePlay}
        muted
        loop
      >
        <source src="/homepage/whatisshipleap/video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Display controls only when controlsVisible is true */}
      {controlsVisible && (
        <>
          {/* Play/Pause button in the center */}
          {centerButtonVisible && (
            <button
              onClick={togglePlay}
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                isPlaying ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="rounded-full bg-green-500 p-4 max-md:p-2">
                {isPlaying ? (
                  <Pause size={25} className="text-white md:hidden" />
                ) : (
                  <Play size={25} className="text-white md:hidden" />
                )}
                {isPlaying ? (
                  <Pause size={48} className="hidden md:block text-white" />
                ) : (
                  <Play size={48} className="hidden md:block text-white" />
                )}
              </div>
            </button>
          )}

          {/* Bottom control bar */}
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent">
            <input
              type="range"
              min={0}
              max={duration}
              value={currentTime}
              onChange={handleProgressChange}
              className="w-full cursor-pointer"
            />
            <div className="flex items-center justify-between px-4 py-2">
              <div className="flex items-center space-x-2">
                <button
                  onClick={togglePlay}
                  className="text-white hover:text-gray-300"
                >
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <div className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Volume2 size={24} className="text-white" />
                  <input
                    type="range"
                    min={0}
                    max={1}
                    step={0.1}
                    value={volume}
                    onChange={handleVolumeChange}
                    className="w-20 cursor-pointer"
                  />
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={toggleSpeed}
                    className="text-white hover:text-gray-300 text-sm font-bold"
                  >
                    <FastForward size={24} />
                  </button>
                  <span className="text-white text-sm">{playbackSpeed}x</span>
                </div>
                <button
                  onClick={toggleFullscreen}
                  className="text-white hover:text-gray-300"
                >
                  <Maximize size={24} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
