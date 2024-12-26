'use client';

import { motion } from 'framer-motion';

export default function Skills() {
  return (
    <div>
      <div className=" bg-black h-auto scroll-smooth ">
        <motion.div
          className="relative bg-black flex justify-center items-center pt-[10rem] py-10"
          initial={{ opacity: 0, y: 50 }} // Animation starts invisible and down
          whileInView={{ opacity: 1, y: 0 }} // Animates to visible and original position
          transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth animation with easeInOut
          viewport={{ once: true, amount: 0.5 }} // Animates when 50% of the element is in view
        >
          {/* Background Text */}
          <h1 className="absolute text-[14vw] md:text-[9vw] mt-[4vh] md:mt-0 font-bold text-white opacity-10 select-none">
            Skills
          </h1>

          {/* Foreground Text */}
          <div className="relative z-10 text-center">
            <h2 className="text-[8vw] md:text-[4vw] text-white font-bold">
              Skills
            </h2>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
