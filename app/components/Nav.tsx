"use client"; 
import { usePathname } from "next/navigation";

const links = [
  {
    text: "00 HOME",
    link: "/",
  },
  {
    text: "01 DESTINATION",
    link: "/destination",
  },
  {
    text: "02 CREW",
    link: "/crew",
  },
  {
    text: "03 TECHNOLOGY",
    link: "/technology", 
  },
];

const Nav = () => {
  const path = usePathname(); 

  return (
    <div className="relative w-full flex items-center justify-between py-6 md:py-0 lg:py-6">
      <div className="pl-6 lg:pl-12">
        <img src="logo.svg" alt="logo" />
      </div>

      <div
        className="absolute hidden lg:block z-10 top-[50%] right-[44%] h-[1px] bg-white/30 
                xll:w-[710px] xll:right-[44%] lg:w-[350px] lg:right-[55%] md:w-[300px] sm:w-[200px]"
      ></div>

      <div className="pl-6 hidden bg-white/5 backdrop-blur-2xl w-[600px] lg:w-[704px] pl-30 md:flex items-center">
        <div className="ml-auto px-2 lg:px-6">
          <ul className="flex items-center gap-16 justify-end">
            {links.map((item, index) => {
              const isActive = path === item.link;

              return (
                <li
                  className={`text-white font-barrow text-xl py-6 border-b-4 ${
                    isActive ? "border-b-white" : "border-transparent"
                  } border-transparent hover:border-b-white duration-500 ease-in-out`}
                  key={index}
                >
                  <a className=" h-full" href={item.link}>
                    {item.text}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
