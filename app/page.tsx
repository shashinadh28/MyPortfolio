import Hero from "./components/Hero1";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Social from "./components/Social";
import Contacts from "./components/Contacts";
import Navbar1 from "./components/Navbar1";
import Github from "./components/Github";


export default function Home() {
  return (
    <div>
      <div className=" bg-black h-screen scroll-smooth ">
 
      <Navbar1/>
      <Hero/>
      <About/>
      <Projects/>
      <Skills/>
      <Github/>
      <Social/>
      <Contacts/>
      {/* <Terms/> */}
      </div>
      
    </div>
  );
}
