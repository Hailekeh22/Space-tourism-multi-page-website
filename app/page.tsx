import Image from "next/image";
import Nav from "./components/Nav";


export default function Home() {
  return (
    <div className=" max-w-screen-2xl mx-auto bg-home-mobile md:bg-home-tablet lg:bg-home-desktop bg-cover h-[100vh] md:h-[1024px]">
      <Nav />
    </div>
  );
}
