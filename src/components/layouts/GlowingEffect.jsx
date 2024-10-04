import React from "react";

function GlowingEffect({ align, newClass, innerClass }) {
  return (
    <div
      className={`${
        newClass ? newClass : ""
      } w-[100%] overflow-x-hidden h-full absolute top-0 flex ${
        align ? "justify-end" : ""
      }`}
    >
      <div
        className={`${
          innerClass ? innerClass : ""
        } 
        ${align?"mr-[-10%]":"ml-[-10%]"}
        bg-[#00ffff4e] blur-3xl h-[50%] rounded-l-full w-[35%]`}
      ></div>
    </div>
  );
}

export default GlowingEffect;
