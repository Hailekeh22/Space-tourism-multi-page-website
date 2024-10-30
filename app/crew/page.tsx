"use client"
import { useState } from "react";
import Nav from "../components/Nav"
import { useCrewContext } from "@/context/crewContext";


const page = () => {

  const { crewMember, changeCrew } = useCrewContext();


  const updateCrew = (a:number) => {
    changeCrew(a);
  }



  return (
    <div className=" max-w-screen-2xl min-h-screen mx-auto h-auto pb-12 bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover">
      <Nav />

      <div className=" w-full flex py-8 items-center justify-center md:px-20 md:py-14 lg:px-36 lg:pb-14 md:justify-start">
        <h2 className=" text-white font-barrowRegular tracking-widest lg:text-2xl">
          <span className="pr-4 text-white/40">02</span>MEET YOUR CREW
        </h2>
      </div>

      <div className="flex flex-col items-center lg:flex-row h-[700px] lg:h-[631px] px-5 lg:justify-between md:px-20 lg:px-36">
        <div className=" basis-1/2 flex lg:pt-36 lg:h-full flex-col justify-between">
          <div>
            <h2 className=" font-bellifair text-[20px] lg:text-[2rem] lg:mb-2 text-center lg:text-start text-white/70">
              {crewMember.job}
            </h2>
            <h3 className=" font-bellifair text-[30px] lg:text-[56px] mb-6 text-center lg:text-start text-white">
              {crewMember.name}
            </h3>
            <p className=" font-barrowRegular text-center lg:text-start mb-2 text-[18px] text-white/80 tracking-widest">
              {crewMember.description}
            </p>
          </div>
          <div className=" lg:mt-auto py-5 mb-2 lg:mb-0 lg:py-0 flex gap-8 justify-center lg:justify-start">
            <input
              className="appearance-none cursor-pointer w-[15px] h-[15px] bg-slate-500 rounded-full checked:bg-white"
              type="radio"
              name="crew"
              onChange={() => updateCrew(0)}
              defaultChecked
            />
            <input
              className="appearance-none cursor-pointer w-[15px] h-[15px] bg-slate-500 rounded-full checked:bg-white"
              type="radio"
              name="crew"
              onChange={() => updateCrew(1)}
            />
            <input
              className="appearance-none cursor-pointer w-[15px] h-[15px] bg-slate-500 rounded-full checked:bg-white"
              type="radio"
              name="crew"
              onChange={() => updateCrew(2)}
            />
            <input
              className="appearance-none cursor-pointer w-[15px] h-[15px] bg-slate-500 rounded-full checked:bg-white"
              type="radio"
              name="crew"
              onChange={() => updateCrew(3)}
            />
          </div>
        </div>
        <div className=" relative duration-300 ease-in-out">
          <img className=" h-full" src={crewMember.image} alt="" />
          <span className=" absolute bottom-0 bg-gradient-to-t from-[#0B0E17] via-[#0B0E17]/20 to-blue-50/0 w-full h-[30%]"></span>
        </div>
      </div>
    </div>
  );
}

export default page