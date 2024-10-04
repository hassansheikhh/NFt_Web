import Contact from "@/components/Contact";
import About from "@/components/contact us/About";
import ContactBanner from "@/components/contact us/ContactBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

function Second() {
  return (
    <div className="bg-black max-w-[100%] overflow-x-hidden">
      <Header />
      <ContactBanner />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Second;
