import React from "react";
import GlowingEffect from "./layouts/GlowingEffect";

function MetaVerse() {
  const data = [
    { title: "Monaverse", heading: "Caps", src: "assets/images/beamit-ai-render-player-style2.png" },
    { title: "Oncyber", heading: "Hood", src: "assets/images/beamit-ai-render-penguin.png" },
    { title: "Dverso.io", heading: "Shine", src: "assets/images/beamit-ai-render-ninja-1.png" },
  ];
  return (
    <div className="relative">
      <GlowingEffect align={true} newClass={"!h-[40%]"} />
      <GlowingEffect
        align={false}
        newClass={"!h-[40%] !top-[45%]"}
        innerClass={"!mt-24"}
      />
      <div className="px-[6%] pt-20 md:pt-40 ">
        <div className=" flex w-full items-center justify-center overflow-hidden">
          <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl leading-none  text-[8.5vw] box-content text-transparent text-center select-none">
            Metaverse integrations
          </span>

          <h1 className="vp relative top-0 w-fit h-auto py-4 justify-center flex bg-[#FF00FF] items-center bg-clip-text text-[38px] md:text-[6.4vw] text-transparent text-center select-auto md:whitespace-nowrap">
            Metaverse integrations
          </h1>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between text-white gap-8 myfont-2">
          <div>
            {/* <h2 className="text-[20px]">Built-In IP Management</h2> */}
            <p className="text-[18px] myfont-2 text-[#00ffff]">
              Beamit AI 3D avatars are designed to get beamied into any
              integrated metaverse or game. At early stage, our avatars are
              already compatible with a number of selected projects.
            </p>
          </div>
          {/* <button className="min-w-[180px] mb-10 md:mb-0">
            <img src="assets/images/button-2.png" className="w-full" />
          </button> */}
        </div>
        <div className="grid md:grid-cols-3 text-white mt-8 md:mt-32">
          {data?.map((item, index) => (
            <div key={index} className="flex flex-col items-center ">
              {/* <h1 className="text-center text-[50px] sm:text-[54px] md:text-[9vw]">
                {item.heading}
              </h1> */}
              <div className="relative w-[80%]">
                <img src="assets/images/card-bg.png" className="w-full" />
                <div
                  className={`absolute top-0 right-0 bottom-0 left-0 flex flex-col justify-between items-center `}
                >
                  <div className="flex items-center justify-between mt-8 pl-[6%] pr-[10%] md:px-4 text-[18px] w-full">
                    <h2>{item.title}</h2>
                    <div>
                      <img src="assets/images/heart.png" />
                    </div>
                  </div>
                  <div
                    className={`${
                      index !== 2 ? "pb-5" : "pb-10"
                    } w-full flex items-center justify-center`}
                  >
                    <img src={item.src} className="w-[100%]" />
                  </div>
                </div>
              </div>
              <div className="relative flex justify-end w-full">
                <img src="assets/images/icon-1.png" className="-mt-7" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MetaVerse;
