"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, Maximize, FastForward } from "lucide-react";

export default function Video({ videoId, width = "100%", maxWidth = "800px" }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [volume, setVolume] = useState(50);
  const [centerButtonVisible, setCenterButtonVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const playerRef = useRef(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [isPlayerReady, setIsPlayerReady] = useState(false);

  useEffect(() => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("youtube-player", {
        videoId: videoId, // Use the dynamic videoId prop
        playerVars: {
          controls: 0,
          rel: 0,
          modestbranding: 1,
          iv_load_policy: 3,
          fs: 0,
          playsinline: 1,
          disablekb: 1,
        },
        events: {
          onReady: (event) => {
            event.target.setVolume(volume);
            setIsPlaying(false);
            playerRef.current = event.target;
            setIsPlayerReady(true);
          },
          onStateChange: (event) => {
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
              setCenterButtonVisible(false);
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
              setCenterButtonVisible(true);
            } else if (event.data === window.YT.PlayerState.ENDED) {
              setIsPlaying(false);
              setCenterButtonVisible(true);
            }
          },
        },
      });
    };
  }, [volume, videoId]); // Add videoId to dependencies

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlayerReady && isPlaying && playerRef.current) {
        const currentTime = playerRef.current.getCurrentTime();
        const duration = playerRef.current.getDuration();
        setProgress((currentTime / duration) * 100);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying, isPlayerReady]);

  const togglePlay = () => {
    if (isPlayerReady && playerRef.current) {
      isPlaying ? playerRef.current.pauseVideo() : playerRef.current.playVideo();
      setIsPlaying(!isPlaying);
      setCenterButtonVisible(false);
    } else {
      console.error("Player is not initialized or ready.");
    }
  };

  const handleSeek = (e) => {
    const newProgress = e.target.value;
    setProgress(newProgress);
    if (playerRef.current) {
      const newTime = (newProgress / 100) * playerRef.current.getDuration();
      playerRef.current.seekTo(newTime);
    }
  };

  const toggleSpeed = () => {
    const newSpeed = playbackSpeed === 1 ? 1.5 : playbackSpeed === 1.5 ? 2 : 1;
    setPlaybackSpeed(newSpeed);
    if (playerRef.current) {
      playerRef.current.setPlaybackRate(newSpeed);
    }
  };

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    if (playerRef.current) {
      playerRef.current.setVolume(newVolume);
    }
  };

  const toggleFullscreen = () => {
    const container = document.getElementById("video-container");
    if (container) {
      if (!isFullscreen) {
        if (container.requestFullscreen) container.requestFullscreen();
        else if (container.webkitRequestFullscreen) container.webkitRequestFullscreen();
      } else {
        if (document.fullscreenElement || document.webkitFullscreenElement) {
          if (document.exitFullscreen) document.exitFullscreen();
          else if (document.webkitExitFullscreen) document.webkitExitFullscreen();
        }
      }
      setIsFullscreen(!isFullscreen);
    }
  };
  
  return (
    <div
      id="video-container"
      style={{ width, maxWidth }}
      className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-lg aspect-video bg-black"
    >
      <div id="youtube-player" className="w-full h-full"></div>

      {centerButtonVisible && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
        >
          <div className="rounded-full bg-green-500 p-4 max-md:p-2">
            {isPlaying ? <Pause size={48} className="text-white" /> : <Play size={48} className="text-white" />}
          </div>
        </button>
      )}

      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={handleSeek}
        className="progress-slider absolute cursor-pointer bottom-11 z-[100] w-[98%] left-2 h-1 bg-gray-400 appearance-none"
        style={{
          backgroundImage: `linear-gradient(to right, #00ff00 ${progress}%, #ccc ${progress}%)`,
        }}
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent">
        <div className="flex items-center justify-between px-4 py-2">
          <button onClick={togglePlay} className="text-white hover:text-gray-300">
            {isPlaying ? <Pause size={25} /> : <Play size={25} />}
          </button>
        
          <div className="flex items-center space-x-2">
            <Volume2 size={24} className="text-white" />
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={handleVolumeChange}
              className="volume-slider"
            />
            <button onClick={toggleSpeed} className="text-white hover:text-gray-300">
              <FastForward size={24} />
            </button>
            <span className="text-white text-sm">{playbackSpeed}x</span>
            <button onClick={toggleFullscreen} className="text-white hover:text-gray-300">
              <Maximize size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
