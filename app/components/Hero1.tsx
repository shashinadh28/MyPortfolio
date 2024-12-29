"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import { Mulish } from "next/font/google";
import { Poppins } from "next/font/google";
import Link from "next/link";

const pop = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});
const mulish = Mulish({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Hero1() {
  const textRef = useRef<HTMLDivElement | null>(null);
  const typingRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    // Intersection Observer for slide-up animation
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && textRef.current) {
          textRef.current.classList.add("animate-slide-up");
        }
      },
      { threshold: 0.2 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Typing Animation Logic
    const typingTexts = ["Web Developer", "UI/UX Designer", "Problem Solver"];
    let currentIndex = 0;
    let charIndex = 0;
    let typingTimeout: NodeJS.Timeout;

    const type = () => {
      if (typingRef.current) {
        const currentText = typingTexts[currentIndex];
        typingRef.current.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
          setTimeout(() => {
            deleteText();
          }, 1000); // Wait before deleting
        } else {
          typingTimeout = setTimeout(type, 150);
        }
      }
    };

    const deleteText = () => {
      if (typingRef.current) {
        const currentText = typingTexts[currentIndex];
        typingRef.current.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          currentIndex = (currentIndex + 1) % typingTexts.length;
          setTimeout(() => {
            type();
          }, 500); // Wait before typing new word
        } else {
          typingTimeout = setTimeout(deleteText, 100);
        }
      }
    };

    type();

    return () => clearTimeout(typingTimeout);
  }, []);

  return (
    <div className="bg-black min-h-screen">
      <div className="flex flex-col md:flex-row md:pt-16 mt-28 md:mt-0 justify-evenly items-center px-6 md:px-0">
        {/* Text Section */}
        <div
          ref={textRef}
          className="flex flex-col space-y-6 text-center md:text-left opacity-0"
        >
          <div
            className={`${mulish.className} text-[#ffbc38] font-semibold text-lg tracking-widest`}
          >
            HELLO!
          </div>
          <div
            className={`${mulish.className} text-white font-black text-[8vh] md:text-[14vh] leading-tight`}
          >
            I&apos;m
            <span className="text-[#ffbc38]">
              Durga <br /> Shashinadh
            </span> 
          </div>

          {/* Typing Text Animation */}
          <div className="text-2xl font-semibold">
            <span
              id="typing-animation"
              ref={typingRef}
              className={`${pop.className} text-white font-semibold`}
            ></span>
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-10 pt-5 items-center">
          <Link href="https://github.com/shashinadh28" target="_blank" rel="noopener noreferrer">
      <div className="group relative cursor-pointer p-2 w-32 border bg-white rounded-full overflow-hidden text-black text-center font-semibold">
        <span className="translate-y-0 group-hover:-translate-y-12 group-hover:opacity-0 transition-all duration-300 inline-block">
          My Works
        </span>
        <div className="flex gap-2 text-stroke-black text-white bg-[#f5c360] z-10 items-center absolute left-0 top-0 h-full w-full justify-center translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 rounded-full group-hover:rounded-none">
          <span>My Works</span>
        </div>
      </div>
    </Link>
            <a href="/Durgashashinadh_Resume.pdf" download>
              <button className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-gradient-to-r from-[#fff9e5] to-[#fff4cc] border-2 border-[#e7cb6e] bg-transparent px-6 font-medium text-black transition-all duration-100 [box-shadow:5px_5px_rgb(231_203_110)] hover:translate-x-[3px] hover:translate-y-[3px] hover:[box-shadow:0px_0px_rgb(231_203_110)]">
                Download CV
              </button>
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-[20rem] h-[20rem] hidden md:block group">
  {/* Glowing Effect */}
  <div className="absolute inset-0 rounded-full blur-1xl transition-all duration-300 opacity-0 group-hover:opacity-60 group-hover:shadow-[0_0_50px_10px_rgba(255,189,57,1)]"></div>

  {/* Image */}
  <Image
    src={"/d3.png"}
    alt={"Hero Image"}
    height={100}
    width={4000}
    className="w-[20rem] h-[20rem] relative z-10 rounded-full object-cover"
  />
</div>

      </div>
    </div>
  );
}
