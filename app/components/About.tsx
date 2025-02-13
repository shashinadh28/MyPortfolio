"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button className="button">
        <span className="button_lg">
          <span className="button_sl" />
          <span className="button_text">Download Now</span>
        </span>
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .button {
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    color: #0f1923;
    cursor: pointer;
    position: relative;
    padding: 8px;
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;
    transition: all .15s ease;
  }

  .button::before,
  .button::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    left: 0;
    height: calc(50% - 5px);
    border: 1px solid #7D8082;
    transition: all .15s ease;
  }

  .button::before {
    top: 0;
    border-bottom-width: 0;
  }

  .button::after {
    bottom: 0;
    border-top-width: 0;
  }

  .button:active,
  .button:focus {
    outline: none;
  }

  .button:active::before,
  .button:active::after {
    right: 3px;
    left: 3px;
  }

  .button:active::before {
    top: 3px;
  }

  .button:active::after {
    bottom: 3px;
  }

  .button_lg {
    position: relative;
    display: block;
    padding: 10px 20px;
    color: #fff;
    background-color: #0f1923;
    overflow: hidden;
    box-shadow: inset 0px 0px 0px 1px transparent;
  }

  .button_lg::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 2px;
    height: 2px;
    background-color: #0f1923;
  }

  .button_lg::after {
    content: '';
    display: block;
    position: absolute;
    right: 0;
    bottom: 0;
    width: 4px;
    height: 4px;
    background-color: #0f1923;
    transition: all .2s ease;
  }

  .button_sl {
    display: block;
    position: absolute;
    top: 0;
    bottom: -1px;
    left: -8px;
    width: 0;
    background-color: #ff4655;
    transform: skew(-15deg);
    transition: all .2s ease;
  }

  .button_text {
    position: relative;
  }

  .button:hover {
    color: #0f1923;
  }

  .button:hover .button_sl {
    width: calc(100% + 15px);
  }

  .button:hover .button_lg::after {
    background-color: #fff;
  }
`;

export default function About() {
  return (
    <div className="bg-black text-white h-auto" >
      <section >
        {/* About Me Section */}
        <motion.section  id="about"
          className="relative bg-black flex justify-center items-center py-10"
          initial={{ opacity: 0, y: 50 }} // Animation starts invisible and down
          whileInView={{ opacity: 1, y: 0 }} // Animates to visible and original position
          transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth animation with easeInOut
          viewport={{ once: true, amount: 0.5 }} // Animates when 50% of the element is in view
        >
          {/* Background Text */}
          <h1 className="absolute text-[10vw] font-bold text-white opacity-10 select-none">
            About
          </h1>
          {/* Foreground Text */}
          <div className="relative z-10 text-center">
            <h2 className="text-[8vw]  md:text-[4vw] font-bold">About Me</h2>
          </div>
        </motion.section>
        {/* Main Content */}
        <div className="flex flex-col md:flex-row items-center md:ml-20 md:items-start gap-8 px-4 sm:px-8 lg:px-20 py-1">
          {/* Left Section: Image and Details */}
          <motion.div
            className="flex flex-col items-center md:items-start gap-5 w-full md:w-1/3"
            initial={{ opacity: 0, x: -100 }} // Animation starts invisible and to the left
            whileInView={{ opacity: 1, x: 0 }} // Animates to visible and original position
            transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth animation with easeInOut
            viewport={{ once: true, amount: 0.5 }} // Animates when 50% of the element is in view
          >
            <Image
              src={"/aboutme.png"}
              alt={"About Me"}
              width={4000}
              height={100}
              className="h-[40vw] w-[40vw] md:h-[13vw] md:w-[13vw] max-w-xs object-cover rounded-md"
            />
            <div className="text-gray-400 text-center md:text-left mb-20">
              <p>
                <span className="font-bold text-white">Name:</span> Durgashashinadh
              </p>
              <p>
                {/* <span className="font-bold text-white">Job Role:</span> Front End Developer */}
              </p>
              <p>
                <span className="font-bold text-white">Residence:</span> Hyderabad, India
              </p>
            </div>
          </motion.div>
          {/* Right Section: Paragraph */}
          <motion.div
            className="text-gray-400 text-base md:text-lg max-w-full md:max-w-[60%] leading-relaxed "
            initial={{ opacity: 0, x: 100 }} // Animation starts invisible and to the right
            whileInView={{ opacity: 1, x: 0 }} // Animates to visible and original position
            transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth animation with easeInOut
            viewport={{ once: true, amount: 0.5 }} // Animates when 50% of the element is in view
          >
            <p>
            Hello, my name is Durgashashinadh. I&apos;m a full-stack developer, UI developer, and data analyst with a 
            deep passion for building seamless digital experiences. My expertise spans front-end and back-end development, 
            crafting intuitive and aesthetically appealing user interfaces with React.js, Tailwind CSS, and Framer Motion,
             while also managing back-end logic and databases for scalable applications.
With a strong foundation in HTML, CSS, JavaScript, and Python, I bring ideas to life through clean, functional, and optimized 
code. My experience with Figma sharpens my design sense, ensuring smooth design-to-development workflows. Additionally, my skills 
in SQL, data visualization, and analytics allow me to derive actionable insights from complex datasets, enhancing decision-making processes.
            </p>
            <p className="mt-4">
            I&apos;m a quick learner and problem solver, eager to build impactful projects that combine creativity, functionality, and data-driven solutions.
             I thrive in collaborative environments, where I can contribute my technical expertise while constantly learning and evolving.
            </p>
          </motion.div>
        </div>
        {/* resume start */}
        <motion.section
          className="relative bg-black  flex justify-center items-center py-10"
          initial={{ opacity: 0, y: 50 }} // Animation starts invisible and down
          whileInView={{ opacity: 1, y: 0 }} // Animates to visible and original position
          transition={{ duration: 1.2, ease: "easeInOut" }} // Smooth animation with easeInOut
          viewport={{ once: true, amount: 0.5 }} // Animates when 50% of the element is in view
        >
          {/* Background Text */}
          <h1 className="absolute text-[8vw]  font-bold text-white opacity-10 select-none">
            Resume
          </h1>
          {/* Foreground Text */}
          <div className="relative z-10 text-center">
            <h2 className="text-[8vw] md:text-[3vw] font-bold">Resume </h2>
          </div>
        </motion.section>
        {/* button */}
        <div className="flex justify-center py-5">
          <a href="/Durgashashinadh_resumee.pdf" download><Button /></a>
        </div>
        {/* resume end */}
      </section>
    </div>
  );
}
