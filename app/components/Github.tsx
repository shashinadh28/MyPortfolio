"use client";
import { Kanit } from "next/font/google";
import Button from './Button';  // Import the Button component

const kan = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
});

export default function Github() {
  return (
    <div className="bg-black h-screen scroll-smooth m-0">
      <div
        className="relative mt-36 w-full h-[25rem] bg-cover bg-center"
        style={{ backgroundImage: "url('/bg_1.jpg')" }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-20 text-white text-4xl">
          <span
            className={`${kan.className} font-bold tracking-wide shadow-2xl`}
          >
            Find more projects on my Github
          </span>
        </div>
        
        {/* Button positioned below the text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1">
          <Button />
        </div>
      </div>
    </div>
  );
}
