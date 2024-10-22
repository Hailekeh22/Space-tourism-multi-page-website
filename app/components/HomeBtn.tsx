"use client";
import { useRouter } from "next/navigation";

const HomeBtn = () => {

  const router = useRouter();
  const toDestination = () => {
    router.push("/destination");
  };


  return (
    <button onClick={toDestination} className="relative w-[10rem] h-[10rem] md:h-[18rem] md:w-[18rem] rounded-full text-2xl font-bellifair bg-white hover:bg-white/80 transition-all duration-300 group">
      EXPLORE
      <span className="absolute inset-0 w-full h-full bg-white/30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 ease-in-out"></span>
    </button>
  );
};


export default HomeBtn;
