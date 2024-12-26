"use client";
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaReddit } from "react-icons/fa";
import { motion } from 'framer-motion';

export default function Social() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // This ensures the animation only runs client-side
  }, []);

  if (!isClient) return null; // Prevent rendering the component until it's client-side

  return (
    <div>
      <motion.section
        className="relative bg-black flex justify-center items-center py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="absolute text-[9vw] md:text-[6vw] mt-[4vh] md:mt-10 font-bold text-white opacity-10 select-none">
          Contact  & Socials
        </h1>
        <div className="relative z-10 text-center">
          <h2 className="text-[8vw] md:text-[4vw] text-white font-bold">Contact</h2>
        </div>
      </motion.section>
      <StyledWrapper>
        <div className=' '>
          <ul className="wrapper">
            <li className="icon twitter">
              <span className="tooltip">Twitter</span>
              <FaTwitter />
            </li>
            <li className="icon instagram">
              <span className="tooltip">Instagram</span>
              <FaInstagram />
            </li>
            <li className="icon linkedin">
              <span className="tooltip">LinkedIn</span>
              <FaLinkedin />
            </li>
            <li className="icon github">
              <span className="tooltip">GitHub</span>
              <FaGithub />
            </li>
            <li className="icon reddit">
              <span className="tooltip">Reddit</span>
              <FaReddit />
            </li>
          </ul>
        </div>
      </StyledWrapper>
    </div>
  );
}

const StyledWrapper = styled.div`
  .wrapper {
    display: inline-flex;
    list-style: none;
    height: 120px;
    width: 100%;
    padding-top: 40px;
    font-family: "Poppins", sans-serif;
    justify-content: center;
  }

  .wrapper .icon {
    position: relative;
    background: #fff;
    border-radius: 50%;
    margin: 20px;
    width: 50px;
    height: 50px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip {
    position: absolute;
    top: 0;
    font-size: 14px;
    background: #fff;
    color: #fff;
    padding: 5px 8px;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    opacity: 0;
    pointer-events: none;
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .tooltip::before {
    position: absolute;
    content: "";
    height: 8px;
    width: 8px;
    background: #fff;
    bottom: -3px;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
    transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  .wrapper .icon:hover .tooltip {
    top: -45px;
    opacity: 1;
    visibility: visible;
    pointer-events: auto;
  }

  .wrapper .icon:hover span,
  .wrapper .icon:hover .tooltip {
    text-shadow: 0px -1px 0px rgba(0, 0, 0, 0.1);
  }

  .wrapper .twitter:hover,
  .wrapper .twitter:hover .tooltip,
  .wrapper .twitter:hover .tooltip::before {
    background: #1da1f2;
    color: #fff;
  }

  .wrapper .instagram:hover,
  .wrapper .instagram:hover .tooltip,
  .wrapper .instagram:hover .tooltip::before {
    background: #e4405f;
    color: #fff;
  }

  .wrapper .linkedin:hover,
  .wrapper .linkedin:hover .tooltip,
  .wrapper .linkedin:hover .tooltip::before {
    background: #0077b5;
    color: #fff;
  }

  .wrapper .github:hover,
  .wrapper .github:hover .tooltip,
  .wrapper .github:hover .tooltip::before {
    background: #4b5563; /* Tailwind's gray-400 */
    color: #fff;
  }

  .wrapper .reddit:hover,
  .wrapper .reddit:hover .tooltip,
  .wrapper .reddit:hover .tooltip::before {
    background: #ff4500;
    color: #fff;
  }
`;

