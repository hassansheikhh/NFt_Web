import React from "react";
import GlowingEffect from "./layouts/GlowingEffect";
import MyButton from "./layouts/MyButton";

function Banner() {
  return (
    <div className="w-screen relative py-6">
      <div className="relative w-full">
        {/* <GlowingEffect align={true} innerClass={"mt-16 md:mt-32"} /> */}

        <div className="w-full flex flex-col md:flex-row items-center sm:mt-10 justify-between">
          <div className="relative md:pl-[6%] w-full md:w-[43%] h-full flex flex-col items-center md:items-start pb-5 md:pb-0">
            <h2 className="text-[#00ffFF] text-[28px] text-center md:text-start w-[90%] sm:w-[62%] md:w-full md:text-[28px] lg:text-[32px] xl:text-[42px]">
              The interdimensional Teleport Device for the Open Metaverse.
            </h2>
            <h2 className="text-[#ff00FF] text-center md:text-start mt-5 w-[90%] sm:w-[60%] md:w-full text-[14px] md:text-[20px] xl:text-[26px]">
              Mint 3D Avatars within seconds from your NFT PFP or real image.
            </h2>
            <MyButton
              text={"Join Wishlist"}
              extraClass={"tracking-wider mt-5 xl:text-[20px]"}
            />
            {/* <div className="ml-[-40px]">
              <button className="flex justify-center items-center mt-5">
                <img src="assets/images/waitlist.png" className="-m-10" />
              </button>
            </div> */}
          </div>
          <div className="md:w-[65%] flex justify-center items-center">
            <img src="assets/images/final-main-banner.png" className="w-[85%]" />
          </div>
          
          {/* <div className="relative w-full flex justify-center items-end mt-10 md:mt-0">
            <div className="relative flex items-end justify-center space-x-[-210px]">
              <div className="relative flex flex-col items-center z-10">
                <img
                  src="assets/images/beamit-ai-render-player-style2.png"
                  alt="Avatar 1"
                  className="w-[300px] md:w-[340px] lg:w-[380px] top-[-180px]"
                />
                <img
                  src="assets/images/pink-circle-2.png"
                  alt="Avatar 1"
                  className="absolute sm:w-[180px] md:w-[220px] lg:w-[220px] top-[220px] sm:top-[220px] md:top-[360px] lg:top-[360px] z-[-1]"
                />
                <div className="absolute top-[160px] left-[50px] text-[#EA3CFF] myfont-2 text-[10px] md:text-[14px] lg:text-[16px] bg-[none] px-2 py-1 text-center z-[-1] leading-tight">
                  Ready 2 play <br />
                  <span className="text-[#5CFEFF] text-[16px] md:text-[20px] lg:text-[22px] font-bold leading-tight">
                    90 sec.
                  </span>
                  <img
                    src="assets/images/banner-v.png"
                    className="w-[330px] h-[60px] absolute top-[-5px] left-[-5px] z-[-1]"
                  />
                </div>
              </div>

              <div className="relative flex flex-col items-center z-20 top-[100px]">
                <img
                  src="assets/images/beamit-ai-render-penguin.png"
                  alt="Penguin Avatar"
                  className="w-[280px] md:w-[320px] lg:w-[340px]"
                />
                <img
                  src="assets/images/pink-circle-2.png"
                  alt="Avatar 1"
                  className="absolute w-[220px] md:w-[240px] lg:w-[180px] top-[320px] z-[-1]"
                />
                <div className="absolute top-[240px] left-[-40px] text-[#EA3CFF] myfont-2 text-[10px] md:text-[14px] lg:text-[16px] bg-[none] px-2 py-1 text-center z-[-1] clip-top-left leading-tight">
                  Proof of <br />
                  <span className="text-[#5CFEFF] text-[18px] md:text-[20px] lg:text-[22px] font-bold leading-tight">
                    Provenance
                  </span>
                  <img
                    src="assets/images/banner-v.png"
                    className="w-[330px] h-[60px] absolute top-[-2px] left-[-2px] z-[-1]"
                  />
                </div>
              </div>

              <div className="relative flex flex-col items-center z-10 ">
                <img
                  src="assets/images/beamit-ai-render-ninja-1.png"
                  alt="Avatar 3"
                  className="w-[280px] md:w-[320px] lg:w-[340px]"
                />
                <img
                  src="assets/images/pink-circle-2.png"
                  alt="Avatar 1"
                  className="absolute w-[220px] md:w-[240px] lg:w-[180px] top-[310px] z-[-1]"
                />

                <div className="absolute top-[180px] left-[240px] w-[50%] text-[#EA3CFF] myfont-2 text-[10px] md:text-[14px] lg:text-[16px] bg-[none] px-2 py-1 text-center z-[-1] clip-top-left leading-tight">
                  Built in
                  <br />
                  <span className="text-[#5CFEFF] text-[18px] md:text-[20px] lg:text-[22px] font-bold leading-tight">
                    IP Protection
                  </span>
                  <img
                    src="assets/images/banner-v.png"
                    className="w-[330px] h-[60px] absolute top-[-2px] left-[-2px] z-[-1]"
                  />
                </div>
              </div>
              <div className="relative flex flex-col items-center z-10 top-[210px] ">
                <div className="flex">
                  <img
                    src="assets/images/Vector3_3.png"
                    alt="Avatar 3"
                    className="h-[220px]"
                  />
                  <img
                    src="assets/images/Vector4_3.png"
                    alt="Avatar 1"
                    className="w-[300px] h-[220px]"
                  />
                  <div className="absolute top-[90px] left-[-60px] text-[#EA3CFF] myfont-2 text-[20px] md:text-[22px] lg:text-[28px] -rotate-90 font-bold">
                    <span className="text-[#00ffff]">+3D </span>Assets
                  </div>
                  <img
                    src="assets/images/green-car-lines.png"
                    alt="Avatar 1"
                    className="absolute top-[-80px] left-[40px] w-[80%] rotate-12"
                  />
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Banner;
