'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function Skills() {
  const skills = [
    { src: '/tail.png', alt: 'Tailwind CSS', label: 'Tailwind CSS' },
    { src: '/react.png', alt: 'React', label: 'React.js' },
    { src: '/fire.png', alt: 'Firebase', label: 'Firebase' },
    { src: '/framer.png', alt: 'Framer Motion', label: 'Framer Motion' },
    { src: '/github.png', alt: 'GitHub', label: 'GitHub' },
    { src: '/java.png', alt: 'Java', label: 'Java' },
    { src: '/javascript.png', alt: 'JavaScript', label: 'JavaScript' },
    { src: '/nextj.png', alt: 'Next.js', label: 'Next.js' },
    { src: '/figma.png', alt: 'Figma', label: 'Figma' },
  ];

  return (
    <div className="bg-black h-auto py-10 scroll-smooth m-0">
      {/* Header Section */}
      <motion.div
        className="relative bg-black flex justify-center items-center py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="absolute text-[14vw] md:text-[9vw] mt-[4vh] md:mt-0 font-bold text-white opacity-10 select-none">
          Skills
        </h1>
        <div className="relative z-10 text-center">
          <h2 className="text-[8vw] md:text-[4vw] text-white font-bold">Skills</h2>
        </div>
      </motion.div>

      {/* Skills Section */}
      <div className="flex flex-col space-y-10 px-4 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group flex flex-col items-center transition-transform duration-300 hover:scale-150"
            >
              <Image
                src={skill.src}
                alt={skill.alt}
                height={100}
                width={4000}
                className="h-[10vh] md:h-[12vh] lg:h-[12vh] w-auto object-contain"
              />
              <p className="mt-2 text-white text-sm md:text-base text-center">{skill.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
