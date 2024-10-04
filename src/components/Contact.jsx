import React from "react";
import GlowingEffect from "./layouts/GlowingEffect";
// import MyButton from "./layout/button";

function Contact() {
  return (
    <div className="relative">
      <GlowingEffect
        align={true}
        newClass={"!h-[60%]"}
        innerClass={"!h-[30%] mt-28"}
      />
      <div className="px-[6%] py-12 pb-32">
        <div className="flex w-full items-center justify-center">
          <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl leading-none text-[9.5vw] px-[7%] box-content text-transparent text-center select-none">
            Contact Us
          </span>

          <h1 className="vp relative top-0 w-fit h-auto py-4 justify-center flex bg-[#FF00FF] items-center bg-clip-text text-[40px] md:text-[6.5vw] px-[7%] text-transparent text-center select-auto">
            Contact Us
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center md:gap-[5%] mt-10">
          <div className="md:w-[45%] relative flex items-center justify-center">
            <div className="absolute bg-[#00ffff37] blur-3xl w-full h-full rounded-xl"></div>
            <img
              src="assets/avatar/avatar08.png"
              className="relative z-10 w-[100%]"
            />
          </div>
          <div className="bg-gradient-to-r from-[#FFFFFF33] to-[#171717] p-[2.5vw] rounded-[20px] w-[100%] md:w-[55%]">
            <form className="flex flex-col w-full">
              <h2 className="text-[4vw] font-semibold text-[#00ffff]">
                Get In Touch Now!
              </h2>
              <input
                placeholder="Contact"
                className="border-[2.5px] border-[#808080a7] placeholder:font-semibold mt-5 p-5 py-6 rounded-xl bg-transparent w-full"
              />
              <input
                placeholder="Email"
                className="border-[2.5px] border-[#808080a7] placeholder:font-semibold mt-5 p-5 py-6 rounded-xl bg-transparent w-full"
              />
              <textarea
                placeholder="Message"
                className="border-[2.5px] border-[#808080a7] placeholder:font-semibold mt-5 p-5 py-6 rounded-xl bg-transparent w-full min-h-[210px]"
              />
              {/* <MyButton text={"Submit"} /> */}
              <button className="flex justify-start items-center h-[80px] w-fit">
                <img
                  src="assets/images/submit.png"
                  className="-mx-[20.5%] md:-my-12"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
