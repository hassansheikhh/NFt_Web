import React from "react";
import GlowingEffect from "../layouts/GlowingEffect";

function Own() {
  return (
    <div className="relative">
      <GlowingEffect
        align={false}
        innerClass={"mt-32 !h-[30%]"}
        newClass={"!h-[100%] !top-0 "}
      />
      <div className="relative z-10 flex justify-center items-center py-16">
        <img src="assets/images/kong.png" className="w-[90%]" />
      </div>
    </div>
  );
}

export default Own;
