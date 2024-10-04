"use client";
import React, { useEffect, useRef } from "react";
import GlowingEffect from "./layouts/GlowingEffect";

function VideoSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, []);
  return (
    <div className="relative z-20 mt-5 ">
      <GlowingEffect align={false} innerClass={"!mt-32"}/>
      <div className="flex relative items-center justify-center py-16">
        <img
          src="assets/images/new-logo.png"
          className="absolute left-[10%] sm:left-[15%] top-20 z-[20] w-[80px] sm:w-[120px] md:w-[150px]"
        />
        <video
          className="border-2 border-[#FF00FF] rounded-[10px] lg:rounded-[30px] w-[95%] sm:w-[80%]"
          preload="none"
          autoPlay
          loop
          controls
          muted
          playsInline
        >
          <source src="/assets/videos/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className="">
        <img
          src="assets/images/bg-blue.png"
          className="mb-[-8vw] relative w-full"
        />
      </div>
    </div>
  );
}

export default VideoSection;
