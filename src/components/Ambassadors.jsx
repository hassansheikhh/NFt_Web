import React from "react";
import GlowingEffect from "./layouts/GlowingEffect";

function Ambassadors() {
  const data = [
    { title: "DJ Girin NFT", src: "assets/images/grid-1.png" },
    { title: "Bitmap News", src: "assets/images/grid-2.png" },
    { title: "1Sliver.sats", src: "assets/images/grid-3.png" },
    { title: "Goofy | OwO", src: "assets/images/grid-4.png" },
    { title: "Tommy 8", src: "assets/images/grid-5.png" },
    { title: "Taka Bitmap", src: "assets/images/grid-6.png" },
    { title: "Da Boy", src: "assets/images/grid-7.png" },
    { title: "Happyful.ton", src: "assets/images/grid-8.png" },
    { title: "Joao", src: "assets/images/grid-9.png" },
    { title: "Jikannians", src: "assets/images/grid-10.png" },
    { title: "Maureen Archibong", src: "assets/images/grid-11.png" },
    { title: "Goofy | OwO", src: "assets/images/grid-12.png" },
  ];
  return (
    <div className="relative">
      <GlowingEffect align={true} newClass={"!h-[40%]"} />
      <div className="px-[6%] py-12">
        <div className="flex w-full items-center justify-center">
          <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl leading-none  text-[40px] md:text-[8.5vw] box-content text-transparent text-center select-none">
            Beamit AI Ambassadors
          </span>

          <h1 className="vp relative top-0 z-10 w-fit h-auto py-4 justify-center flex bg-[#FF00FF] items-center bg-clip-text text-[40px] md:text-[6vw] md:px-[7%] text-transparent text-center select-auto">
            Beamit AI Ambassadors
          </h1>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
          {data?.map((item, index) => (
            <div className="w-full" key={index}>
              <div className="w-full">
                <img src={item.src} className="w-full" />
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

export default Ambassadors;
