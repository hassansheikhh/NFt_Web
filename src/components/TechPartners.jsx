import React from "react";
import GlowingEffect from "./layouts/GlowingEffect";

function TechPartners() {
  const data = [
    { title: "Coinweb - Interoperability", src: "assets/images/card-1.png" },
    { title: "Ordaazar - Launchpad", src: "assets/images/card-2.png" },
    { title: "Featured on NFT Bridges", src: "assets/images/card-6.png" },
    { title: "Blender", src: "assets/images/card-7.png" },
    { title: "Unreal Engine", src: "assets/images/card-5.svg" },
  ];
  return (
    <div className="relative">
      <GlowingEffect
        align={false}
        innerClass={"mt-20 md:mt-32"}
        newClass={"max-md:h-[500px]"}
      />
      <div className="px-[3%] lg:px-[6%] py-12 ">
        <div className="flex w-full items-center justify-center">
          <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#ff00ff71] md:bg-[#ff00ff2f] blur-3xl text-[40px] md:text-[7.5vw] text-transparent text-center select-none">
            Tech Partners & what
            <br />
            Press
          </span>
          <h1 className="vp relative top-0 w-fit h-auto py-4 justify-center flex bg-[#FF00FF] items-center bg-clip-text text-[40px] md:text-[6.5vw] text-transparent text-center select-auto">
            Technology Partners & Integrations
          </h1>
        </div>
        <div className="grid md:grid-cols-6 gap-5 md:gap-3 lg:gap-5">
          {data?.map((item, index) => (
            <div
              key={index}
              className={`
                ${index == 3 ? "md:col-start-2 md:col-end-4" : "md:col-span-2"} 
                ${index == 4 ? "md:col-start-4 md:col-end-6" : "md:col-span-2"} 
              bg-gradient-to-r w-full from-[#FFFFFF33] to-[#171717] flex flex-col justify-center items-center py-[4vw] md:py-5 lg:py-[4vw] border border-[#FF00FF] rounded-[15px]`}
            >
              <div>
                <img
                  src={item.src}
                  className={`${
                    index == 3 ? "max-w-[300px]" : "max-w-[200px]"
                  } w-full `}
                />
              </div>
              <p className="w-full text-center mt-5 text-white text-[18px] myfont-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TechPartners;
