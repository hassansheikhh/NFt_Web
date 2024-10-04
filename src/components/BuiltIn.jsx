import React from "react";
import Marquee from "./layouts/Marquee";
import GlowingEffect from "./layouts/GlowingEffect";

function BuiltIn() {
  return (
    <div className="relative">
      <GlowingEffect align={false} innerClass={"mt-20 md:mt-32"} />
      <div className="grid lg:grid-cols-3 px-[6%]">
        <div className="flex flex-col gap-4 justify-center text-white">
          {/*image*/}
          <img src="assets/images/ellipse.png" className="absolute -left-32" />
          {/* <h1 className="text-[11vw]">YOO5</h1> */}
          <div className="flex gap-4">
            <div className="relative myfont-2">
              <img src="assets/images/bg-green.png" />
              <p className="absolute top-3 left-7 z-10">0.32 ETH</p>
            </div>
            <div className="relative myfont-2">
              <img src="assets/images/bg-green.png" />
              <p className="absolute top-3 left-7 z-10">0.32 ETH</p>
            </div>
          </div>
          <p className="myfont-2">
            Beamit AI comes with built in IP management. Our Proof of Provenance
            smart contracts change the way we monetize our IP, how metaverses
            and games incentivize IP holders and aims to become an integral part
            of the metaverse economy.
          </p>
          <div className="myfont-2">
            Beamit AI PoP smart contracts add utility to the open metaverse for
            the IP holders of the 3D avatars originals:
            <li>Verify ownership and originality</li>
            <li>permission and access management</li>
            <li>Collection affiliation (for collaborative gaming)</li>
            <li>Targeted ads (programmable by user)</li>
            <li>And much more yet to discover</li>
          </div>
          <div className="w-full flex items-center justify-between">
            <button>
              <img src="assets/images/Group 141.png" className="-m-10" />
            </button>
            <img src="assets/images/heart.png" />
          </div>
        </div>
        <div className="relative">
          <img
            src="assets/avatar/avatar07.png"
            className="mb-[-100px] relative z-10"
          />
          <img src="assets/images/ellipse.png" className="absolute top-0" />
        </div>
        <div className="flex flex-col justify-center lg:mt-0 mt-20">
          <div className="flex w-full items-center justify-center ">
            <span className="left-0 vp absolute mx-auto py-4 flex border w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl leading-none  text-[8.5vw] box-content text-transparent text-center select-none">
              Built In IP Management
            </span>
            <h1 className="vp relative top-0 w-fit h-auto py-4 justify-center flex bg-[#FF00FF] items-center bg-clip-text text-[7vw] lg:text-[5.5vw] text-transparent select-auto">
              Built In IP Management
            </h1>
          </div>
        </div>
      </div>
      <div className="lg:-mt-24">
        <Marquee />
      </div>
    </div>
  );
}

export default BuiltIn;
