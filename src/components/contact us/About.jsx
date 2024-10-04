import React from "react";
import GlowingEffect from "../layouts/GlowingEffect";
import MyButton from "../layouts/MyButton";

function About() {
  return (
    <div className="text-white font-light">
      <div className="relative">
        <GlowingEffect
          align={false}
          innerClass={"mt-32"}
          newClass={"!h-[60%]"}
        />
        <div className="px-[4%] lg:px-[7%] xl:px-[8%] flex flex-col md:flex-row items-center gap-5 text-[14px] lg:text-[16px] lg:gap-10 py-5">
          <div className="w-full md:w-[55%]">
            <div className="flex w-full items-center justify-center ">
              <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#00FFFF66] md:bg-[#00ffff57] blur-3xl leading-none text-[9.5vw] left-[0%] box-content text-transparent select-none">
                What a
              </span>
              <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl leading-none text-[9.5vw] left-[30%] box-content text-transparent select-none">
                Offer
              </span>
              <h1 className="vp relative top-0 h-auto py-4 text-center md:text-start bg-[#FF00FF] bg-clip-text text-[40px] md:text-[3.5vw] text-transparent w-full select-auto ">
                Turbocharge your Games Production Process
              </h1>
            </div>
            <p className="myfont-2">
              At Beamit AI, our mission is to empower game studios with
              cutting-edge solutions that transform great ideas into immersive
              gaming experiences. We offer a suite of services designed to help
              you exceed player expectations:
            </p>
            <ul className="mt-3 myfont-2 pl-3 ">
              <li className="mt-3 lg:mt-5 flex gap-2">
                <div className="size-1 rounded-full mt-2 lg:mt-3 bg-white"></div>
                <p>
                  3D Asset Generation: Create stunning, high-quality assets in
                  record time.
                </p>
              </li>
              <li className="mt-3 lg:mt-5 flex gap-2">
                <div className="size-1 rounded-full mt-2 lg:mt-3 bg-white"></div>
                <p>
                  3D Avatar Creation: Generate metaverse-ready avatars with
                  precision and speed.
                </p>
              </li>
              <li className="mt-3 lg:mt-5 flex gap-2">
                <div className="size-1 rounded-full mt-2 lg:mt-3 bg-white"></div>
                <p>
                  Process Automation: Automate repetitive tasks to focus on
                  creativity and innovation.
                </p>
              </li>
              <li className="mt-3 lg:mt-5 flex gap-2">
                <div className="size-1 rounded-full mt-2 lg:mt-3 bg-white"></div>
                <p>
                  Batch Conversions & Production Pipelines: Optimize workflows
                  with seamless batch processing for redundant production steps.
                </p>
              </li>
              <li className="mt-3 lg:mt-5 flex gap-2">
                <div className="size-1 rounded-full mt-2 lg:mt-3 bg-white"></div>
                <p>
                  And much more: Tailored solutions to meet the unique needs of
                  your studio.
                </p>
              </li>
            </ul>
            <div>
              <MyButton extraClass={"mt-5"} text={"Contact us now"}/>
              {/* <img src="assets/images/contact-page.png" className="-mx-10" /> */}
            </div>
          </div>
          <div className="w-full sm:w-[80%] md:w-[45%] h-fit flex justify-end relative z-20">
            <img src="assets/images/beamitai-b2b.png" className="w-full" />
          </div>
        </div>
      </div>
      <div className="relative">
        <GlowingEffect align={true} innerClass={"mt-32"} newClass={""} />
        <div className="px-[4%] lg:px-[7%] xl:px-[8%] flex flex-col md:flex-row-reverse items-center gap-5 text-[14px] lg:text-[16px] lg:gap-10 py-5">
          <div className="w-full md:w-[55%]">
            <div className="flex w-full items-center justify-center relative">
              <span className="vp absolute mx-auto flex border w-full md:w-fit bg-[#00FFFF66] md:bg-[#00ffff57] blur-3xl leading-none text-[6.5vw] md:right-[10%] box-content text-transparent select-none">
                What a
              </span>
              <span className="vp absolute mx-auto flex border w-full md:w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl leading-none text-[9.5vw] md:right-[30%] box-content text-transparent select-none">
                Offer
              </span>
              <h1 className="vp relative top-0 h-auto text-center md:text-start bg-[#FF00FF] bg-clip-text text-[40px] md:text-[4vw] text-transparent w-full select-auto ">
                Advanced AI and automation tools
              </h1>
            </div>
            <p className="myfont-2">
              At the core of our service are four AI models, integrated to make
              Beamit AI the global leader in 3D asset and avatar generation.
              These technologies allow us to drastically reduce production costs
              while accelerating time-to-market for our clients. Our AI
              solutions are designed to empower your team, helping you deliver
              the highest quality assets at unmatched speeds.
            </p>
            <p className="myfont-2 mt-6">
              The results our AI models and automation tools provide are fully
              compatible with the most popular game design tools and engines,
              including Unity, Unreal Engine, Blender, Autodesk Maya, 3ds Max,
              and Substance Painter, ensuring seamless integration into your
              workflows.”
            </p>
          </div>
          <div className="w-full sm:w-[80%] md:w-[45%] h-fit flex justify-end relative z-20">
            <img
              src="assets/images/beamit-ai-unity-b2b-studios.png"
              className="w-full"
            />
          </div>
        </div>
      </div>
      {/* <div className="relative">
        <GlowingEffect
          align={false}
          innerClass={"mt-32 !h-[20%]"}
          newClass={""}
        />
        <div className="px-[4%] lg:px-[7%] xl:px-[8%] flex flex-col md:flex-row items-center gap-5 text-[14px] lg:text-[16px] lg:gap-10 py-5">
          <div className="w-full md:w-[55%]">
            <div className="flex w-full items-center justify-center relative">
              <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#00FFFF66] md:bg-[#00ffff57] blur-3xl leading-none text-[9.5vw] left-[-10%] top-[100px] box-content text-transparent select-none">
                What a
              </span>
              <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl leading-none text-[9.5vw] left-[20%] box-content text-transparent select-none">
                loremipasa
              </span>
              <h1 className="vp relative top-0 h-auto py-4 text-center md:text-start bg-[#FF00FF] bg-clip-text text-[40px] md:text-[5vw] text-transparent w-full select-auto whitespace-nowrap">
                Our Expertise
              </h1>
            </div>
            <p className="myfont-2">
              We pride ourselves on offering superior service, combining deep
              expertise in gaming, Web3, and AI to deliver results that help
              studios stay ahead of the competition.
            </p>
          </div>
          <button className="w-full sm:w-[80%] md:w-[45%] h-fit flex justify-end relative z-20">
            <img src="assets/images/contact-3.png" className="w-full" />
          </button>
        </div>
      </div> */}
      <div className="relative">
        <GlowingEffect align={true} innerClass={"mt-32"} newClass={""} />
        <div className="px-[4%] lg:px-[7%] xl:px-[8%] flex flex-col md:flex-row items-center gap-5 text-[14px] lg:text-[16px] lg:gap-10 py-5">
          <div className="w-full md:w-[55%]">
            <div className="flex w-full items-center justify-center ">
              <span className="vp absolute mx-auto py-4 flex border w-fit bg-[#ff00ff71] md:bg-[#ff00ff43] blur-3xl leading-none text-[9.5vw] md:right-[30%] box-content text-transparent select-none">
                Offer
              </span>
              <h1 className="vp relative top-0 h-auto py-4 text-center md:text-start bg-[#FF00FF] bg-clip-text text-[40px] md:text-[4vw] text-transparent w-full select-auto ">
                Tailored Production Tools for Game Studios
              </h1>
            </div>
            <p className="myfont-2">
              At Beamit AI, we provide personalized, end-to-end support designed
              to elevate your game studio’s success. Our solutions are tailored
              to meet your unique needs, offering seamless integration of AI
              tools into your workflows. From initial consultation to ongoing
              support, our team works closely with you to optimize 3D asset
              generation, avatar creation, and process automation. We deliver
              continuous assistance, training, and troubleshooting to ensure
              your studio maximizes the potential of our cutting-edge
              technology, accelerating your projects and exceeding player
              expectations.
            </p>
            <p className="myfont-2 text-[24px]">
              Ready to experience superior service?
              <br /> Contact us today!
            </p>
          </div>
          <button className="w-full sm:w-[80%] md:w-[45%] h-fit flex justify-end relative z-20">
            <img
              src="assets/images/beamit-ai-studios-gaming.png"
              className="w-full"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
