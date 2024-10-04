import React from "react";
import GlowingEffect from "../layouts/GlowingEffect";

function CoolMetaverse() {
  return (
    <div className="relative pt-20 pb-10">
      <GlowingEffect align={true} innerClass={"mt-32"} newClass={""} />
      {/* <div className="flex w-full items-center justify-center relative">
        <span className="vp absolute mx-auto py-4 flex border w-[80%] min-h-[50%] z-20 bg-[#ff00ff71] md:bg-[#ff00ff71] blur-3xl leading-none text-[6.5vw] box-content text-transparent text-center select-none">
          wah wah
        </span>
        <h1 className="vp relative top-0 h-auto py-4 bg-[#FF00FF] bg-clip-text text-center text-[24px] md:text-[5.5vw] text-transparent w-full select-auto md:whitespace-nowrap">
          {"What's"} Cool About The OG
          <br />
          Metaverse League
        </h1>
      </div> */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-5 px-[5%] text-white">
        <div className="relative flex flex-col justify-between items-center pb-10 px-5">
          <img
            src="assets/images/icon1.png"
            className="relative z-10 w-[50%] -top-12"
          />
          <img
            src="assets/images/cool-card.png"
            className="absolute w-full h-full"
          />
          <h1 className="relative z-10 text-[24px] -mt-10 text-[#00ffff] text-center">
            NFTs Come to Life
          </h1>
          <p className="relative z-10 text-[15px] myfont-2 text-center mt-5">
            Take your favorite NFT PFP and turn it into a fully playable 3D
            avatar and dominate with your community in multiple games and
            metaverse experiences.
          </p>
        </div>
        <div className="relative flex flex-col justify-between items-center pb-10 px-5">
          <img
            src="assets/images/icon2.png"
            className="relative z-10 w-[50%] -top-12"
          />
          <img
            src="assets/images/cool-card.png"
            className="absolute w-full h-full"
          />
          <h1 className="relative z-10 text-[24px] -mt-10 text-[#00ffff] text-center">
            Quests Across the Metaverse
          </h1>
          <p className="relative z-10 text-[15px] myfont-2 text-center mt-5">
            Every season communities will compete in quests spanning different
            games, chains and platforms.
          </p>
        </div>
        <div className="relative flex flex-col justify-between items-center pb-10 px-5">
          <img
            src="assets/images/icon3.png"
            className="relative z-10 w-[50%] -top-12"
          />
          <img
            src="assets/images/cool-card.png"
            className="absolute w-full h-full"
          />
          <h1 className="relative z-10 text-[24px] -mt-10 text-[#00ffff] text-center">
            Huge Prizes and Rewards
          </h1>
          <p className="relative z-10 text-[15px] myfont-2 text-center mt-5">
            Compete for Beamit AI $BIT governance tokens, exclusive NFTs, and
            more. Plus, players will have the chance to win additional rewards.
          </p>
        </div>
        <div className="relative flex flex-col justify-between items-center pb-10 px-5">
          <img
            src="assets/images/icon4.png"
            className="relative z-10 w-[50%] -top-12"
          />
          <img
            src="assets/images/cool-card.png"
            className="absolute w-full h-full"
          />
          <h1 className="relative z-10 text-[24px] -mt-10 text-[#00ffff] text-center">
            Cross-Platform, Cross-Chain
          </h1>
          <p className="relative z-10 text-[15px] myfont-2 text-center mt-5">
            EVM, Aptos, Avalanche, Solana & many more: Beamit.AI OG League
            connects NFT communities, games, and chains like never before.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CoolMetaverse;
