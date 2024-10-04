import React from "react";
import GlowingEffect from "../layouts/GlowingEffect";
import MyButton from "../layouts/MyButton";

function GetInvolved() {
  return (
    <div className="relative">
      <GlowingEffect
        align={false}
        innerClass={"mt-28 h-[30%]"}
        newClass={"h-[33%] !items-start"}
      />
      <GlowingEffect
        align={true}
        innerClass={"mt-32 h-[30%] md:mt-[200px]"}
        newClass={"  top-[25%]"}
      />
      <GlowingEffect
        align={false}
        innerClass={"mb-28"}
        newClass={"!bottom-0 !items-end"}
      />
      <div className="px-[8%] text-white">
        <div className="flex flex-col md:flex-row items-center gap-5 text-[14px] lg:text-[16px] lg:gap-16 py">
          <div className="mt-0 w-full md:w-[55%]">
            <div className="flex w-full items-center justify-center ">
              <span className="vp absolute mx-auto py-4 flex border w-[70%] sm:w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl leading-none text-[9.5vw] md:left-[30%] box-content text-transparent select-none">
                Offer
              </span>
              <h1 className="vp relative top-0 h-auto py-4 text-center md:text-start bg-[#FF00FF] bg-clip-text text-[40px] md:text-[5vw] text-transparent w-full select-auto lg:whitespace-nowrap">
                Join Og League Now
              </h1>
            </div>
            <p className="myfont-2">
              <span className="text-[#00FFFF]">
                For NFT Communities & Players:
              </span>
              collaborate with your community and find unique ways to utilize
              and monetize your IP. Top-performing communities will earn massive
              rewards and establish themselves as leaders in the metaverse.
            </p>
            <MyButton text={"Join OG League now"} extraClass={"mt-5"} />
            {/* <button>
              <img src="assets/images/involved-button.png" className="-mx-12" />
            </button> */}
          </div>
          <div className="w-full sm:w-[80%] md:w-[45%] h-fit flex justify-end relative z-20">
            <img src="assets/images/involved-1.png" className="w-full" />
          </div>
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center gap-5 text-[14px] lg:text-[16px] lg:gap-16 py">
          <div className="mt-16 md:mt-0 w-full md:w-[55%]">
            <div className="flex w-full items-center justify-center ">
              <span className="vp absolute mx-auto py-4 flex border w-[70%] sm:w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl leading-none text-[9.5vw] md:left-[30%] box-content text-transparent select-none">
                Offer
              </span>
              <h1 className="vp relative top-0 h-auto py-4 text-center md:text-start bg-[#FF00FF] bg-clip-text text-[40px] md:text-[5vw] text-transparent w-full select-auto lg:whitespace-nowrap">
                Get Involved Now
              </h1>
            </div>
            <p className="myfont-2">
              <span className="text-[#FF00FF]">For Sponsors and Partners:</span>
              Reach a large, engaged, and growing Web3 audience by sponsoring
              the league. With in-game advertising, media partnerships, and
              direct community engagement, the BGG League is the ideal platform
              to connect with the future of gaming.
            </p>
            <MyButton text={"Get in touch nouw"} extraClass={"mt-5"} />

            {/* <button>
              <img src="assets/images/connect-button.png" className="-mx-12" />
            </button> */}
          </div>
          <div className="w-full sm:w-[80%] md:w-[45%] h-fit flex justify-end relative z-20">
            <img
              src="assets/images/ogleague-games-metaverse-experiences.jpg"
              className="w-full rounded-xl mt-4"
            />
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-5 text-[14px] lg:text-[16px] lg:gap-16 py">
          <div className="mt-16 md:mt-0 w-full md:w-[55%]">
            <p className="myfont-2">
              <span className="text-[#FF00FF]">For Games & Metaverses:</span>
              Ready to open up your Game or metaverse experience for thousands
              of players and communities? The OML & Beamit AI is now open for
              metaverse realms to host a quest.
            </p>
            <MyButton text={"Get in touch now"} extraClass={"mt-5"} />
            {/* <button>
              <img src="assets/images/get-in-touch.png" className="-mx-12" />
            </button> */}
          </div>
          <button className="w-full sm:w-[80%] md:w-[45%] h-fit flex justify-end relative z-20">
            <img src="assets/images/involved-3.png" className="w-full" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;
