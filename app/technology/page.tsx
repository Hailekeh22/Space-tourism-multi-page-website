"use client"
import { useState, useEffect } from "react";
import Nav from "../components/Nav"
import { useTechnologyContext } from "@/context/technology";



const Page = () => {

  const { tech, changeTech } = useTechnologyContext();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1280); 
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className=" max-w-screen-2xl pb-16 min-h-screen mx-auto h-auto  bg-technology-mobile bg-cover md:bg-technology-tablet lg:bg-technology-desktop">
      <Nav />

      <div className=" w-full lg:w-auto mb-14 flex items-center justify-center md:px-20 md:py-14 lg:px-36 lg:pb-14 md:justify-start">
        <h2 className=" text-white font-barrowRegular tracking-widest lg:text-2xl">
          <span className="pr-4 text-white/40">03</span>SPACE LAUNCH 101
        </h2>
      </div>

      <div className="flex flex-col lg:pl-36 lg:flex-row w-full h-auto items-center">
        <div className="w-full basis-1/2 lg:order-2 h-auto mb-6 md:mb-12 lg:mb-0">
          {isLargeScreen ? (
            <img
              className=" w-full h-[500px] md:h-[600px]"
              src={tech.portraitImg}
              alt="tech images"
            />
          ) : (
            <img
              className=" w-full h-[258px] md:h-[375px]"
              src={tech.landScapeImg}
              alt="tech images"
            />
          )}
        </div>
        <div className=" flex basis-1/2 lg:order-1 px-6 md:px-36 lg:px-0 lg:pr-8 flex-col lg:flex-row items-center justify-center lg:mt-0">
          <div className="flex gap-3 mb-5 lg:flex-col lg:gap-6 lg:mr-8">
            <button
              onClick={() => changeTech(0)}
              className={
                tech.id == 1
                  ? "w-14 h-14 border-2 border-white rounded-full bg-white"
                  : "w-14 h-14 border-2 border-white rounded-full text-white"
              }
            >
              1
            </button>
            <button
              onClick={() => changeTech(1)}
              className={
                tech.id == 2
                  ? "w-14 h-14 border-2 border-white rounded-full bg-white"
                  : "w-14 h-14 border-2 border-white rounded-full text-white"
              }
            >
              2
            </button>
            <button
              onClick={() => changeTech(2)}
              className={
                tech.id == 3
                  ? "w-14 h-14 border-2 border-white rounded-full bg-white"
                  : "w-14 h-14 border-2 border-white rounded-full text-white"
              }
            >
              3
            </button>
          </div>
          <div className=" flex flex-col lg:items-start items-center">
            <h2 className="text-white/60 font-bellifair mb-2 text-[20px] md:text-[26px]">
              THE TERMINOLOGY...
            </h2>
            <h3 className="text-white font-bellifair text-[25px] md:text-[40px] mb-4">
              {tech.title}
            </h3>
            <p className="text-white/80 text-center lg:text-start tracking-widest md:text-[20px] font-barrowRegular">
              {tech.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page