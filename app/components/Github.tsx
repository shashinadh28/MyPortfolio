"use client";
import { Kanit } from "next/font/google";
import Button from "./Button"; // Import the Button component

const kan = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Github() {
  return (
    <div className="bg-black min-h-screen scroll-smooth m-0">
      <div
        className="relative mt-36 w-full h-[25rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg_1.jpg')" }}
      >
        {/* Text Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-20 text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center px-4">
          <span
            className={`${kan.className} font-bold tracking-wide shadow-2xl`}
          >
            Find more projects on my Github
          </span>
        </div>

        {/* Button */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-12 sm:translate-y-14">
          <Button />
        </div>
      </div>
    </div>
  );
}
