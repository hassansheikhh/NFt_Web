import React from "react";
import GlowingEffect from "../layouts/GlowingEffect";

function ContactBanner() {
  return (
    <div className="relative flex flex-col items-center">
      <GlowingEffect align={true} innerClass={"mt-28"} />
      <div className="w-full absolute top-0 left-0 right-0 z-20 px-[5%]">
        <img src="assets/images/2-pieces.png" className="w-full " />
      </div>
      <div className="w-full absolute top-0 left-0 right-0 z-20 px-[5%]">
        <img src="assets/images/2-pieces.png" className="w-full " />
      </div>
      <div className="w-full min-h-[500px] absolute overflow-hidden flex justify-end items-center">
        <div className="bg-[#00ffff55] size-[300px] rounded-full blur-3xl -mr-[150px]"></div>
      </div>

      <div className="flex w-full items-center justify-center relative">
        <span className="vp absolute mx-auto py-4 flex border w-[80%] min-h-[50%] z-20 bg-[#ff00ff71] md:bg-[#ff00ff71] blur-3xl leading-none text-[9.5vw] box-content text-transparent text-center select-none">
          Contact Us
        </span>
        <h1 className="vp relative top-0 h-auto py-4 bg-[#FF00FF] bg-clip-text text-center leading-none text-[40px] md:text-[6vw] text-transparent w-full select-auto ">
          AI and automation for
          <br /> Games Sudios
        </h1>
      </div>
      <p className="text-center text-white w-[70%] myfont-2">
        Powerful, decentralized AI and automation tools built for Web3 game
        studios by Beamit AI are revolutionizing 3D asset creation and process
        automation. Slash delivery times, reduce costs, and streamline your
        workflows, bringing your ideas to life and delivering them to your
        players faster than ever before.
      </p>
      <button>
        <img src="assets/images/get-in-touch.png" className="-m-5" />
      </button>
    </div>
  );
}

export default ContactBanner;
