"use client"; 
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  const [drawer, setDrawer] = useState(false);


  const toggleDrawer = (a:boolean) => {
    setDrawer(a);
  }

  return (
    <div className="relative w-full flex items-center justify-between py-6 md:py-0 lg:py-8">
      <div className="pl-6 lg:pl-12">
        <img className="w-[40px] md:w-[48px]" src="logo.svg" alt="logo" />
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

      <div className=" pr-8 md:hidden lg:hidden">
        <a onClick={() => toggleDrawer(true)}>
          <img src="/icon-hamburger.svg" alt="menu" />
        </a>
      </div>

      {drawer && (
        <div className=" md:hidden duration-300 ease-in-out absolute z-10 right-0 top-0 w-[65%] h-[100vh] bg-white/5 backdrop-blur-xl">
          <div className="py-8 px-8">
            <a onClick={() => toggleDrawer(false)}>
              <img src="/icon-close.svg" className="ml-auto  w-6" alt="close" />
            </a>
          </div>
          <div className="w-full py-6 pl-6">
              <ul>
                {
                  links.map((item,index) => {
                  const isActive = path === item.link;

                    return (
                      <li key={index}
                        className={`relative font-barrow py-2 text-white text-3xl`}
                      >
                        <a href={item.link} className="block">
                          {item.text}
                        </a>
                        <span
                          className={`absolute right-0 top-1/4 h-1/2 w-[5px] ${
                            isActive ? "bg-white" : "bg-transparent"
                          }`}
                        />
                      </li>
                    );
                  })
                }
              </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
