import React from "react";

function MyButton({ text, extraClass }) {
  return (
    <>
      <button
        className={`${
          extraClass ? extraClass : ""
        } relative h-[38px] w-fit px-5`}
      >
        <div className="absolute w-full h-full bg-[#00ffff] blur-3xl "></div>
        <img
          src="assets/images/button-bg.png"
          className="absolute top-0 left-0 h-full w-full "
        />
        <p className="relative z-10 text-white myfont-2 whitespace-nowrap ">{text}</p>
      </button>
    </>
  );
}

export default MyButton;
