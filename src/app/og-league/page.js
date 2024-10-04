import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CoolMetaverse from "@/components/og/CoolMetaverse";
import GetInvolved from "@/components/og/GetInvolved";
import MaximumBenefits from "@/components/og/MaximumBenefits";
import Mint from "@/components/og/Mint";
import OgBanner from "@/components/og/OgBanner";
import Own from "@/components/og/Own";
import StayConnected from "@/components/og/StayConnected";
import WebAndGaming from "@/components/og/WebAndGaming";
import React from "react";

function OgLeague() {
  return (
    <div className="bg-black max-w-[100%] overflow-x-hidden">
      
      <OgBanner />
      <MaximumBenefits />
      <CoolMetaverse />
      <Mint />
      <WebAndGaming />
      <Own />
      <GetInvolved />
      <StayConnected />
      <Contact />
      <Footer />
    </div>
  );
}

export default OgLeague;
