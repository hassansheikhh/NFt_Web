import React from "react";

function StayConnected() {
  return (
    <div className="px-[8%] flex flex-col md:flex-row text-white mt-10 sm:mt-0">
      <div className="w-full md:w-[50%]">
        <div className="flex w-full items-center justify-center ">
          <span className="vp absolute mx-auto py-4 flex border sm:w-fit bg-[#00FFFF66] md:bg-[#00ffff57] blur-3xl leading-none text-[6.5vw] md:left-[10%] box-content text-transparent select-none">
            What a
          </span>
          <span className="vp absolute mx-auto py-4 flex border w-[70%] sm:w-fit bg-[#ff00ff7d] md:bg-[#ff00ff43] blur-3xl leading-none text-[9.5vw] md:left-[30%] box-content text-transparent select-none">
            Offer
          </span>
          <h1 className="vp relative top-0 h-auto py-4 text-center md:text-start bg-[#FF00FF] bg-clip-text text-[40px] md:text-[5vw] text-transparent w-full select-auto ">
            STAY CONNECTED
          </h1>
        </div>
        <p className="myfont-2">
          Follow us on Twitter, Discord, and all our social channels for the
          latest updates, announcements, and behind-the-scenes looks at the
          league.
        </p>
      </div>
      <div className="w-full md:w-[50%] md:flex gap-5 h-fit">
        <img src="assets/images/d.png" className="md:w-[250px] h-fit"/>
        <img src="assets/images/t.png" className="md:w-[250px] md:mt-[100px]" />
      </div>
    </div>
  );
}

export default StayConnected;
