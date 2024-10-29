"use client"
import { useDestinationContext } from "@/context/destinationContext";
import Nav from "../components/Nav";


const destinations = [
  {
    name:"MOON",
  },
  {
    name:"MARS",
  },
  {
    name:"EUROPA",
  },
  {
    name:"TITAN",
  },
]

const page = () => {

const {destination, changeDestination} = useDestinationContext();


  return (
    <div className=" max-w-screen-2xl min-h-screen md:h-[850px] mx-auto bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-cover">
      <Nav />

      <div className=" w-full flex items-center justify-center md:px-20 md:py-14 lg:px-36 lg:pb-14 md:justify-start">
        <h2 className=" text-white font-thin lg:text-2xl">
          <span className="pr-4 text-white/40">01</span>PICK YOUR DESTINATION
        </h2>
      </div>
      <div className=" lg:flex md:px-20 lg:px-32">
        <div className=" basis-[50%] ">
          <div className=" py-10 w-full flex justify-center">
            <img
              className="w-[150px] h-[150px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px]"
              src={destination?.imgSource}
              alt="destinationImg"
            />
          </div>
        </div>

        <div className="basis-[50%] lg:p-12">
          <div className="w-full flex pt-4 justify-center lg:justify-start items-center">
            <div className=" mb-5 ">
              <ul className=" flex gap-6">
                {destinations.map((item, index) => (
                  <li className=" text-white pb-1 border-b-4 cursor-pointer border-b-white font-bellifair" onClick={() => changeDestination(item.name)} key={index}>
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="w-full flex flex-col items-center justify-center lg:items-start lg:justify-start ">
            <h1 className=" text-white text-[2.5rem] md:text-[6rem] lg:text-[3.5rem] font-bellifair">
              {destination?.name}
            </h1>
            <p className=" px-4 text-center lg:text-start lg:px-0 text-[1.5rem] lg:text-[1.2rem] font-barrow text-white/70">
              {destination?.description}
            </p>
            <div className="w-full p-4 md:px-0 md:mt-4">
              <div className="h-[2px] bg-white/40"></div>
            </div>

            <div className=" flex flex-col w-full md:flex-row items-center justify-center md:justify-between">
              <div className="flex flex-col items-center lg:items-start pb-2 md:pb-0">
                <h3 className=" text-white/70 font-bellifair text-2xl lg:text-lg">
                  AVG. DISTANCE
                </h3>
                <p className=" text-white font-bellifair text-[2.5rem] lg:text-[2rem]">
                  {destination?.distance}
                </p>
              </div>
              <div className="flex flex-col items-center ">
                <h3 className=" text-white/70 font-bellifair text-2xl lg:text-lg">
                  EST. TRAVEL TIME
                </h3>
                <p className=" text-white font-bellifair text-[2.5rem] lg:text-[2rem]">
                  {destination?.avgTime}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page