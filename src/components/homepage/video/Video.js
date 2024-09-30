"use client"

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, Maximize } from 'lucide-react'

export default function Video() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [controlsVisible, setControlsVisible] = useState(true);
  const videoRef = useRef(null);
  const controlsTimeoutRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleLoadedMetadata = () => {
        setDuration(video.duration);
      };

      video.addEventListener('loadedmetadata', handleLoadedMetadata);
      video.addEventListener('timeupdate', () => {
        setCurrentTime(video.currentTime);
      });

      return () => {
        video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      };
    }
  }, []);

  const togglePlay = () => {
    const video = videoRef.current;
    if (video) {
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
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
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const toggleSpeed = () => {
    const newSpeed = playbackSpeed === 1 ? 2 : 1;
    setPlaybackSpeed(newSpeed);
    if (videoRef.current) {
      videoRef.current.playbackRate = newSpeed;
    }
  };

  const handleMouseEnter = () => {
    setControlsVisible(true);
    clearTimeout(controlsTimeoutRef.current);
  };

  const handleMouseMove = () => {
    setControlsVisible(true);
    clearTimeout(controlsTimeoutRef.current);
    controlsTimeoutRef.current = setTimeout(() => {
      setControlsVisible(false);
    }, 2000);
  };

  useEffect(() => {
    if (isPlaying) {
      controlsTimeoutRef.current = setTimeout(() => {
        setControlsVisible(false);
      }, 2000);
    }
    
    return () => clearTimeout(controlsTimeoutRef.current);
  }, [isPlaying]);

  return (
    <div 
      className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg aspect-video bg-black"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
    >
      <video
        ref={videoRef}
        className="w-full h-full"
        onClick={togglePlay}
      >
        <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {controlsVisible && (
        <>
          {!isPlaying && (
            <button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="rounded-full bg-green-500 p-4">
                <Play size={48} className="text-white" />
              </div>
            </button>
          )}

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
                <button onClick={togglePlay} className="text-white hover:text-gray-300">
                  {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <div className="text-white text-sm">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <button
                  onClick={toggleSpeed}
                  className="text-white hover:text-gray-300 text-sm font-bold"
                >
                  {playbackSpeed}x
                </button>
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
                <button className="text-white hover:text-gray-300">
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