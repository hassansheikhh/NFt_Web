import React from "react";
import GlowingEffect from "./layouts/GlowingEffect";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";
import { FaMedium } from "react-icons/fa";
import MyButton from "./layouts/MyButton";

function Footer() {
  return (
    <div className="relative">
      <GlowingEffect align={false} innerClass={"mt-32"} />
      <div className="px-[7%] pt-10 border-t">
        <div className="flex w-full items-center justify-center pb-10">
          <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl leading-none  text-[8.5vw] box-content text-transparent text-center select-none">
            Join the NFT Revolution
          </span>
          <h1 className="vp relative top-0 w-fit h-auto py-4 justify-center flex bg-[#FF00FF] items-center bg-clip-text text-[38px] lg:text-[7vw] text-transparent text-center select-auto">
            Join the NFT Revolution
          </h1>
        </div>
        {/* <div className="flex justify-center gap-[5%]">
          {/* <div className="min-w-[200px] hidden lg:flex justify-center items-center ">
            <img src="assets/images/icon-twitter.png" />
          </div> 
          <button className="relative hidden lg:flex justify-center items-center min-w-[90px]">
            <img
              src="assets/images/back-black.png"
              className="w-full absolute z-20"
            />
            <FaXTwitter className="text-[#ff00ff] text-[22px] md:text-[32px] w-full relative z-20" />
          </button>
          {/* <p className="text-white text-center myfont-2 text-[14px] lg:text-[18px]">
            Lorem ipsum dolor sit amet consectetur. Lorem in volutpat eget
            pulvinar cursus egestas donec. Quam ornare amet id in viverra non
            massa id. Donec a mi at cras ullamcorper purus lobortis pellentesque
            dignissim. Tellus aliquam pellentesque.
          </p> 
          <button className="relative hidden lg:flex justify-center items-center min-w-[90px]">
            <img
              src="assets/images/back-black.png"
              className="w-full absolute z-20"
            />
            <FaDiscord className="text-[#ff00ff] text-[22px] md:text-[32px] w-full relative z-20" />
          </button>
          <button className="relative hidden lg:flex justify-center items-center min-w-[90px]">
            <img
              src="assets/images/back-black.png"
              className="w-full absolute z-20"
            />
            <FaMedium className="text-[#ff00ff] text-[22px] md:text-[32px] w-full relative z-20" />
          </button>
        </div> */}
        <div className="grid grid-cols-3 px-10 py-5">
          {/* <img src="assets/images/icon-twitter.png" /> */}
          <button className="relative flex justify-center items-center h-[50px] md:h-[80px]">
            <img
              src="assets/images/back-black.png"
              className="max-w-full absolute max-h-full"
            />
            <FaXTwitter className="text-[#ff00ff] text-[22px] md:text-[32px] w-full relative z-10" />
          </button>
          <button className="relative flex justify-center items-center h-[50px] md:h-[80px]">
            <img
              src="assets/images/back-black.png"
              className="max-w-full absolute max-h-full"
            />
            <FaDiscord className="text-[#ff00ff] text-[22px] md:text-[32px] w-full relative z-10" />
          </button>
          <button className="relative flex justify-center items-center h-[50px] md:h-[80px]">
            <img
              src="assets/images/back-black.png"
              className="max-w-full absolute max-h-full"
            />
            <FaMedium className="text-[#ff00ff] text-[22px] md:text-[32px] w-full relative z-10" />
          </button>
          {/* <img src="assets/images/icon-insta.png" /> */}
        </div>
        <div className="flex justify-center  mt-5 px-[4%]">
          <MyButton text={"Join Now"} />
        </div>
        <div className="flex justify-between items-center">
          <div>
            <img
              src="assets/images/new-logo.png"
              className="max-w-[120px] sm:max-w-[150px] lg:max-w-[170px] xl:max-w-[190px]"
            />
          </div>
          <ul className="text-white myfont-2 lg:flex gap-7 text-[14px] hidden relative z-30">
            <a
              className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer"
              href="/"
            >
              Home
            </a>
            <li className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer">
              Join Ambassador Program
            </li>
            <li className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer">
              Alphamint
            </li>
            <li className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer">
              Whitepaper
            </li>
            <a
              className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer"
              href="/b2b"
            >
              B2B
            </a>
            <a
              className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer"
              href="/og-league"
            >
              OG League
            </a>
            <li className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer">
              白書
            </li>
          </ul>
          <img src="assets/images/icon-1.png" className="max-md:w-[70px]" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
