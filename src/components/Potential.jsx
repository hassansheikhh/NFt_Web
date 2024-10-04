import React from "react";
import GlowingEffect from "./layouts/GlowingEffect";

function Potential() {
  return (
    <div className="max-[400px]:h-[600px] h-[650px] min-[480px]:min-h-[800px] md:h-auto relative ">
      <GlowingEffect align={true} innerClass={"mt-16 md:mt-32"} />
      <div className="flex w-full items-center justify-center pt-5">
        <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl text-[11vw] box-content text-transparent text-center select-none">
          Decentralized
        </span>
        <h1 className="vp relative top-0 w-fit h-auto py-4 justify-center flex bg-[#FF00FF] items-center bg-clip-text text-[8vw] text-transparent text-center select-auto">
          {/* Limited Potential */}
          Decentralized
        </h1>
      </div>
      <div className="relative w-full flex justify-center items-center text-white">
        <img
          src="assets/images/potential.png"
          className="w-full sm:w-[80%] -mt-[20vw]"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between px-[6%] items-center pt-32">
          <div className="text-[11px] sm:text-[14px] md:text-[16px] lg:text-[18px] absolute top-[100%] sm:top-[55vw] md:top-[25vw] w-[245px] sm:w-[315px] md:w-[360px] lg:w-[405px] left-10 z-20">
            <div className="relative top-0 right-0 bottom-0 left-0 z-20">
              <img src="assets/images/bg.png" className="relative w-full" />
              <img
                src="assets/images/bg.png"
                className="absolute top-0 z-0 w-full"
              />
              <p className="myfont-2 relative z-10 -mt-[150px] sm:-mt-[193px] md:-mt-[220px] lg:-mt-[250px] pl-5 sm:pl-7 md:pl-10 text-[#00ffff]">
                The decentralisation of Beamit AI puts the power to the users.
                Because we care about alignment with the right ones. That is why
                our early adopter reward program ensures, that the devs,
                creators and users (IP holders) take over the command bridge of
                our AI models, automation tools and ecosystem funds.
              </p>
            </div>
          </div>
          <div className="absolute top-[40vw] sm:top-[30vw] right-16">
            <div className="relative flex justify-end w-[100%] z-10">
              <button className="w-[50px] sm:w-[70px] md:w-auto">
                <img src="assets/images/icon-1.png" className="w-full" />
              </button>
            </div>
            <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] max-lg:leading-none leading-6 relative w-[160px] sm:w-[170px] md:w-[200px] lg:w-[240px] z-20">
              <div className="relative top-0 right-6 bottom-0 left-0 z-20">
                <img
                  src="assets/images/bg.png"
                  className="relative w-full max-sm:h-[70px]"
                />
                <img
                  src="assets/images/bg.png"
                  className="absolute top-0 z-0 w-full max-sm:h-[70px]"
                />
                <p className="myfont-2 relative z-10 -mt-[55px] sm:-mt-[80px] md:-mt-[90px] lg:-mt-[110px] pl-5 sm:pl-5 md:pl-7 lg:pl-9 text-[#00ffff]">
                  A decentralized AI, governed by its users
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Potential;
