"use client"
import Image from "next/image";
import Nav from "./components/Nav";
import HomeBtn from "./components/HomeBtn";


export default function Home() {



  return (
    <div className=" max-w-screen-2xl mx-auto bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover min-h-screen md:h-[850px]">
      <Nav />
      <div className=" w-full pt-10 md:pt-14 flex flex-col lg:flex-row lg:h-[55%] lg:pt-32 lg:pl-36">
        <div className=" flex flex-col items-center justify-center lg:items-start lg:mt-auto">
          <h2 className=" text-white font-bellifair pb-4 lg:pb-0 text-lg md:text-2xl">
            SO, YOU WANT TO TRAVEL TO
          </h2>
          <h2 className=" text-white font-bellifair text-[92px] md:text-[165px]">
            SPACE
          </h2>
          <h2 className=" text-white text-center lg:text-left font-thin text-lg md:text-2xl pt-4 lg:pt-0 pb-16 px-8 md:px-28 lg:px-0">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </h2>
        </div>

        <div className=" w-full flex items-center justify-center h-[310px] md:h-[450px] lg:mt-auto">
          <HomeBtn />
        </div>
      </div>
    </div>
  );
}
