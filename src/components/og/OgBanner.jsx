import React from "react";
import Header from "../Header";
import MyButton from "../layouts/MyButton";

function OgBanner() {
  return (
    <div
      style={{
        backgroundImage: `url(assets/images/ogleague-banner.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative flex flex-col items-center min-h-screen pt-5 pb-16"
    >
      <Header />
      <div className="absolute top-0 right-0 bottom-0 left-0 bg-[#0000007d]"></div>
      {/* <div className="w-full absolute top-0 left-0 right-0 z-20 px-[5%]">
        <img src="assets/images/2-pieces.png" className="w-full " />
      </div>
      <div className="w-full absolute top-0 left-0 right-0 z-20 px-[5%]">
        <img src="assets/images/2-pieces.png" className="w-full " />
      </div> */}
      <div className="w-full min-h-[500px] absolute z-10 overflow-hidden flex justify-end items-center">
        <div className="bg-[#00ffff55] size-[300px] rounded-full blur-3xl -mr-[150px]"></div>
      </div>

      <div className="relative z-10 mt-[5vw] w-full flex justify-center items-center">
        <img src="assets/images/ogleague.png" className="w-[60%] sm:w-[50%] md:w-[30%]" />
      </div>
      {/* <div className="flex w-full items-center justify-center relative z-10">
        <span className="vp absolute mx-auto py-4 flex border w-[80%] min-h-[50%] z-20 bg-[#ff00ff38] blur-3xl leading-none text-[7.5vw] box-content text-transparent text-center select-none">
          Contact Us
        </span>
        <h1 className="vp relative top-0 h-auto py-4 bg-[#FF00FF] bg-clip-text text-center text-[40px] md:text-[8vw] text-transparent w-full select-auto lg:whitespace-nowrap">
          OG League
        </h1>
      </div> */}
      <h2 className="relative z-10 text-[#00ffff] md:text-[2vw] text-center">
        NFT communities conquering the open metaverse
      </h2>
      <MyButton text={"Join Now"} extraClass={"mt-10"} />
    </div>
  );
}

export default OgBanner;
