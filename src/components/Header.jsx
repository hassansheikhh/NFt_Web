"use client";
import React from "react";
import MyButton from "./layouts/MyButton";

function Header() {
  return (
    <header className="w-full relative z-50 px-5 sm:px-10 md:px-[8%] lg:px-[4%] l:px-[6%] py-5 lg:py-0">
      <div className="flex justify-between items-center">
        <a className="" href="/">
          <img
            src="assets/images/new-logo.png"
            className="max-w-[120px] sm:max-w-[150px] lg:max-w-[170px] xl:max-w-[190px]"
          />
        </a>
        <ul className="text-white myfont-2 lg:flex justify-evenly pl-5 text-[14px] w-full hidden">
          <a
            className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer"
            href="/"
          >
            Home
          </a>
          <li className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer">
            Join Ambassador Program
          </li>
          <li className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer">
            Alphamint
          </li>
          <li className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer">
            Whitepaper
          </li>
          <a
            className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer"
            href="/b2b"
          >
            B2B
          </a>
          <a
            className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer"
            href="/og-league"
          >
            OG League
          </a>
          <li className="text-[#00ffff] hover:text-[#ff00ff] cursor-pointer">
            白書
          </li>
        </ul>
        <div className="mr-[-20px] hidden lg:flex">
          {/* <button className="mt-2">
            {/* <img src="assets/images/header-button.png" />
          </button> */}
          <MyButton text={"Connect Wallet"} extraClass={"mt-2"} />
        </div>
        <div className="group p-2 lg:hidden">
          <button className="">
            <img src="assets/images/hamburger.png" className="lg:hidden flex" />
          </button>
          <ul className=" text-[#00FFFF] myfont-2 fixed top-0 h-screen flex flex-col items-center group-hover:px-5 py-10 right-0 bg-[black] z-30 w-0 duration-200 overflow-hidden group-hover:w-[70%] group-hover:md:w-[50%]">
            <div>
              {/* <img
                src="assets/images/ellipse.png"
                className="absolute w-full"
              /> */}
              <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#ff00ff25] blur-3xl leading-none text-[9.5vw] px-[7%] box-content text-transparent text-center select-none">
                Sidemenu <br />
                Sidemenu
                <br />
                <br />
                <br />
                Sidemenu <br />
                Sidemenu <br />
                Sidemenu <br />
                Sidemenu
              </span>
            </div>
            <a
              href="/"
              className="text-[#00ffff] hover:text-[#ff00ff] relative z-10 border-b py-2 w-full"
            >
              Home
            </a>
            <li className="text-[#00ffff] hover:text-[#ff00ff] relative z-10 border-b py-2 w-full">
              Join Ambassador Program
            </li>
            <li className="text-[#00ffff] hover:text-[#ff00ff] relative z-10 border-b py-2 w-full">
              Alphamint
            </li>
            <li className="text-[#00ffff] hover:text-[#ff00ff] relative z-10 border-b py-2 w-full">
              Whitepaper
            </li>
            <a
              className="text-[#00ffff] hover:text-[#ff00ff] relative z-10 border-b py-2 w-full"
              href="/b2b"
            >
              B2B
            </a>
            <a
              className="text-[#00ffff] hover:text-[#ff00ff] relative z-10 border-b py-2 w-full"
              href="/og-league"
            >
              OG League
            </a>
            <li className="text-[#00ffff] hover:text-[#ff00ff] relative z-10 border-b py-2 w-full">
              白書
            </li>
            <MyButton text={"Connect Wallet"} extraClass={"mt-4"} />
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;
