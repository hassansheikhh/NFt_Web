import React from "react";
import GlowingEffect from "../layouts/GlowingEffect";

function Mint() {
  return (
    <div className="relative">
      <GlowingEffect align={false} innerClass={"mt-28 h-[40%]"} newClass={""} />
      <div className="py-10 text-white px-[6%]">
        <h2 className="text-[24px] md:text-[2vw]">
          <span className="text-[#00FFFF]">Easy</span> Step
        </h2>
        <div className="flex w-full items-center justify-center py-5">
          <h1 className="vp relative top-0 w-[100%] h-auto py-4 bg-[#FF00FF] items-center bg-clip-text text-[36px] md:text-[6.5vw] lg:text-[4.5vw] text-transparent text-center md:text-start select-auto">
            How to become the OG
          </h1>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2">
          <div className=" gap-2 flex sm:justify-start items-center">
            <img src="assets/images/one.png" />
            <h2 className="text-[20px] md:text-[1.3vw] whitespace-nowrap">
              Join OG League
              <br />
              Whitelist now
            </h2>
          </div>
          <div className=" gap-2 flex sm:justify-start items-center">
            <img src="assets/images/two.png" />
            <h2 className="text-[20px] md:text-[1.3vw] whitespace-nowrap">
              Login, follow Beamit
              <br />
              AI + OG League
            </h2>
          </div>
          <div className=" gap-2 flex sm:justify-start items-center">
            <img src="assets/images/three.png" />
            <h2 className="text-[20px] md:text-[1.3vw] whitespace-nowrap">
              Pick the NFT
              <br />
              community to play for
            </h2>
          </div>
          <div className=" gap-2 flex sm:justify-start items-center">
            <img src="assets/images/four.png" />
            <h2 className="text-[20px] md:text-[1.3vw] whitespace-nowrap">
              Play the OG League
              <br />
              and win
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mint;
