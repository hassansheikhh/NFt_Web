import React from "react";
import GlowingEffect from "../layouts/GlowingEffect";

function WebAndGaming() {
  return (
    <div className="relative">
      <GlowingEffect
        align={true}
        innerClass={"!mb-32"}
        newClass={"!h-[100%] !bottom-0 !items-end"}
      />
      <div className="text-white px-[8%]">
        <div className="flex flex-col md:flex-row-reverse items-center gap-5 text-[14px] lg:text-[16px] lg:gap-10 py-5">
          <div className="w-full md:w-[55%]">
            <div className="flex w-full items-center justify-center ">
              <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#00FFFF66] md:bg-[#00ffff57] blur-3xl leading-none text-[6.5vw] md:right-[10%] box-content text-transparent select-none">
                What a
              </span>
              <span className="vp absolute mx-auto py-4 flex border w-[70%] sm:w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl leading-none text-[9.5vw] md:right-[30%] box-content text-transparent select-none">
                Offer
              </span>
              <h1 className="vp relative top-0 h-auto py-4 text-center md:text-start bg-[#FF00FF] bg-clip-text text-[40px] md:text-[5vw] text-transparent w-full select-auto ">
                A league for Web3 OGs and gamers
              </h1>
            </div>
            <p className="myfont-2">
              At the center of the OGL by Beamit AI there is collaboration, fun
              and IP utilization. Kicking off the first season will onboard a
              selection of OG NFT communities that are ready to explore the
              metaverse realm - pioneers and explorers to build a decentralized
              future of ai driven metaverse realization. Merging digital
              identities in a new economy with ownership, freedom, a sense for
              community and technology as pillars.
            </p>
            <p className="myfont-2 mt-6">
              Competing in these categories, NFT communities will form a
              leaderboard of OG mentality and explorative mindsets:
            </p>
            <ul className="mt-3 myfont-2 pl-3 ">
              <li className="mt-3 flex items-center gap-2 text-[#FF00FF]">
                <div className="size-1 rounded-full bg-[#FF00FF]"></div>
                <p>Completing experiences & quests</p>
              </li>
              <li className="mt-3 flex items-center gap-2 text-[#FF00FF]">
                <div className="size-1 rounded-full bg-[#FF00FF]"></div>
                <p>3d-fication</p>
              </li>
              <li className="mt-3 flex items-center gap-2 text-[#FF00FF]">
                <div className="size-1 rounded-full bg-[#FF00FF]"></div>
                <p>Social media activity</p>
              </li>
              <li className="mt-3 flex items-center gap-2 text-[#FF00FF]">
                <div className="size-1 rounded-full bg-[#FF00FF]"></div>
                <p>Collaboration of NFT communities</p>
              </li>
            </ul>
            <p className="myfont-2 mt-6">
              There is much at stake: We are building an ai driven metaverse
              made and owned by its users. Therefore the Beamit AI $BIT
              governancetoken will be at stake. Because we want you to decide
              the direction we will be taking.
            </p>
          </div>
          <div className="w-full sm:w-[80%] md:w-[45%] h-fit flex justify-end relative z-20">
            <img src="assets/avatar/avatar01.png" className="w-full" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default WebAndGaming;
