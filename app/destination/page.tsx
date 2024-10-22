import Nav from "../components/Nav"


const destinations = [
  {
    name:"MOON",
    action:"showMoon"
  },
  {
    name:"MARS",
    action:"showMars"
  },
  {
    name:"EUROPA",
    action:"showEuropa"
  },
  {
    name:"TITAN",
    action:"showTitan"
  },
]

const page = () => {
  return (
    <div className=" max-w-screen-2xl min-h-screen md:h-[1024px] mx-auto bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop bg-cover">
      <Nav />

      <div className=" h-[85%]">
        <div className="flex items-center justify-center p-2">
          <h2 className=" text-white font-bellifair">
            <span className="pr-4 text-white/40">01</span>PICK YOUR DESTINATION
          </h2>
        </div>
        <div className=" py-10 w-full flex justify-center">
          <img
            className="w-[150px] h-[150px]"
            src="/image-moon.png"
            alt="destinationImg"
          />
        </div>

        <div className="w-full flex pt-4 justify-center items-center">
          <div>
            <ul className=" flex gap-6">
              {destinations.map((item, index) => (
                <li className=" text-white py-3 font-bellifair" key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="w-full flex flex-col items-center justify-center ">
          <h1 className=" text-white text-[2.5rem] font-bellifair">MOON</h1>
          <p className=" px-4 text-center text-[1.5rem] font-barrow text-white/70">
            See our planet as you’ve never seen it before. A perfect relaxing
            trip away to help regain perspective and come back refreshed. While
            you’re there, take in some history by visiting the Luna 2 and Apollo
            11 landing sites.
          </p>
          <div className="w-full p-4">
            <div className="h-[2px] bg-white/40"></div>
          </div>

          <div className=" flex flex-col items-center justify-center">
            <div className="flex flex-col items-center pb-2">
              <h3 className=" text-white/70 font-bellifair text-2xl">AVG. DISTANCE</h3>
              <p className=" text-white font-bellifair text-[2.5rem]">384,000 KM</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className=" text-white/70 font-bellifair text-2xl">EST. TRAVEL TIME</h3>
              <p className=" text-white font-bellifair text-[2.5rem]">3 DAYS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page