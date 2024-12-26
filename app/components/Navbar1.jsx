'use client';
import { useState } from "react";
import styled from "styled-components";
import { Rubik, Passion_One } from "next/font/google";

const passion = Passion_One({
  weight: ["400", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});
const rubik = Rubik({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

const Checkbox = ({ onClick }) => {
  return (
    <StyledWrapper>
      <label className="burger" htmlFor="burger">
        <input type="checkbox" id="burger" onClick={onClick} />
        <span />
        <span />
        <span />
      </label>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .burger {
    position: relative;
    width: 30px; /* Reduced width */
    height: 20px; /* Reduced height */
    background: transparent;
    cursor: pointer;
    display: block;
  }

  .burger input {
    display: none;
  }

  .burger span {
    display: block;
    position: absolute;
    height: 3px; /* Reduced line thickness */
    width: 100%;
    background: #ffbc38; /* Menu line color */
    border-radius: 9px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: 0.25s ease-in-out;
  }

  .burger span:nth-of-type(1) {
    top: 0px;
    transform-origin: left center;
  }

  .burger span:nth-of-type(2) {
    top: 50%;
    transform: translateY(-50%);
    transform-origin: left center;
  }

  .burger span:nth-of-type(3) {
    top: 100%;
    transform-origin: left center;
    transform: translateY(-100%);
  }

  .burger input:checked ~ span:nth-of-type(1) {
    transform: rotate(45deg);
    top: 0px;
    left: 3px; /* Adjust for smaller icon */
  }

  .burger input:checked ~ span:nth-of-type(2) {
    width: 0%;
    opacity: 0;
  }

  .burger input:checked ~ span:nth-of-type(3) {
    transform: rotate(-45deg);
    top: 20px; /* Adjust for smaller icon */
    left: 3px; /* Adjust for smaller icon */
  }
`;


export default function Navbar1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="bg-black px-6 md:px-20 md:py-8 py-4">
      {/* Navbar Container */}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className={`${passion.className} text-white font-bold text-[4vh]`}>
          Durga Shashinadh
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-16 text-[17px]">
          <div
            className={`${rubik.className} font-medium relative group cursor-pointer text-[#ffbc38]`}
          >
            Home
            <span className="absolute left-0 bottom-0 h-[2px] w-full bg-[#ffbc38]"></span>
          </div>
          <div
            className={`${rubik.className} font-medium relative group cursor-pointer text-white`}
          >
            About
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#ffbc38] transition-all duration-300 group-hover:w-full"></span>
          </div>
          <div
            className={`${rubik.className} font-medium relative group cursor-pointer text-white`}
          >
            Projects
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#ffbc38] transition-all duration-300 group-hover:w-full"></span>
          </div>
          <div
            className={`${rubik.className} font-medium relative group cursor-pointer text-white`}
          >
            Contact
            <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#ffbc38] transition-all duration-300 group-hover:w-full"></span>
          </div>
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="md:hidden">
          <Checkbox onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>

      {/* Mobile Links */}
      <div
        className={`md:hidden flex flex-col items-center bg-black transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen ? "max-h-screen opacity-100 scale-y-100" : "max-h-0 opacity-0 scale-y-0"
        }`}
      >
        <div
          className={`${rubik.className} font-medium text-[#ffbc38] cursor-pointer my-4 text-[22px]`}
        >
          Home
        </div>
        <div
          className={`${rubik.className} font-medium text-white hover:text-[#ffbc38] cursor-pointer my-4 text-[22px]`}
        >
          About
        </div>
        <div
          className={`${rubik.className} font-medium text-white hover:text-[#ffbc38] cursor-pointer my-4 text-[22px]`}
        >
          Projects
        </div>
        <div
          className={`${rubik.className} font-medium text-white hover:text-[#ffbc38] cursor-pointer my-4 text-[22px]`}
        >
          Contact
        </div>
      </div>
    </div>
  );
}
