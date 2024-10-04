import React from "react";
import GlowingEffect from "../layouts/GlowingEffect";

function MaximumBenefits() {
  return (
    <>
      <div className="flex flex-col items-center py-10 px-[5%]">
        <h2 className="relative z-10 text-[#00ffff] text-[20px] md:text-[4vw]">
          $BIT Token rewards + more
        </h2>
        <p className="text-center relative z-10 text-[#fff] w-[90%] sm:w-[75%] myfont-2">
          The world of NFTs is about to evolve: The Beamit.AI OG Metaverse
          League (OML) is the first-ever global competition for NFT communities,
          where players, collectors, and creators come together to battle for
          supremacy in the open metaverse. This isn’t just another league — it’s
          where 2D avatars turn into 3D metaverse legends, and where communities
          showcase the full power of their IP.
        </p>
      </div>
      <div className="relative">
        <GlowingEffect align={false} innerClass={"mt-32"} newClass={""} />
        <div className="px-[8%] text-white">
          <div className="flex flex-col md:flex-row items-center gap-5 text-[14px] lg:text-[16px] lg:gap-10 py-5">
            <div className="w-full md:w-[55%]">
              <div className="flex w-full items-center justify-center ">
                <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#00FFFF66] md:bg-[#00ffff57] blur-3xl leading-none text-[9.5vw] left-[0%] box-content text-transparent select-none">
                  What a
                </span>
                <span className="vp absolute mx-auto py-4 flex border w-[70%] sm:w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl leading-none text-[9.5vw] left-[20%] box-content text-transparent select-none">
                  Offer BBB BBBBBB BBBBBB
                </span>
                <h1 className="vp relative top-0 h-auto py-4 text-center md:text-start bg-[#FF00FF] bg-clip-text text-[40px] md:text-[5vw] text-transparent w-full select-auto ">
                  <p className="text-[36px] md:text-[4.8vw]">
                    The OG to benefit the most
                  </p>
                </h1>
              </div>
              <p className="myfont-2">
                The OG League rewards the pioneers of the open metaverse for
                being early. This is how it should be. Be early to represent
                your NFT community and receive the OG booster. The more will
                follow you the more you benefit.
              </p>
              <p className="myfont-2">
                In epic competitions the world has never seen before, the
                conquest of the metaverse is on - NFT communities unite to win
                for precious rewards.”
              </p>
              {/* <button>
              <img src="assets/images/contact-page.png" className="md:-mx-10" />
            </button> */}
            </div>
            <div className="w-full sm:w-[80%] md:w-[45%] h-fit flex justify-end relative z-20">
              <img
                src="assets/images/ogleague-metaverse-beamit-hands.jpg"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MaximumBenefits;
