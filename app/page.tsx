import Image from "next/image";
import Navbar1 from "./components/Navbar1";
import Hero from "./components/Hero1";
import { FaHome } from "react-icons/fa";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";


export default function Home() {
  return (
    <div>
      <div className=" bg-black h-screen scroll-smooth ">
 
      <Navbar1/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      </div>
      
    </div>
  );
}
