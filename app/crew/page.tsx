import Nav from "../components/Nav"


const page = () => {
  return (
    <div className=" max-w-screen-2xl min-h-screen mx-auto h-[100vh] md:h-[850px] bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop bg-cover">
      <Nav />

      <div className=" w-full flex items-center justify-center md:px-20 md:py-14 lg:px-36 lg:pb-14 md:justify-start">
        <h2 className=" text-white font-barrowRegular tracking-widest lg:text-2xl">
          <span className="pr-4 text-white/40">02</span>MEET YOUR CREW
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row md:px-20 lg:px-32">
        <div>

        </div>
        <div>

        </div>
      </div>
    </div>
  );
}

export default page