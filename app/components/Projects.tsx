'use client';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .cards {
    display: flex;
    flex-direction: row;
    gap: 15px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .cards .card {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    height: 300px;
    width: 450px;
    border-radius: 10px;
    overflow: hidden;
    cursor: pointer;
    transition: 400ms;

    @media (max-width: 768px) {
      width: 90%;
      height: 250px;
    }

    @media (max-width: 480px) {
      width: 100%;
      height: 200px;
    }
  }

  .cards .card img {
    height: 250px;
    width: 100%;
    object-fit: cover;
    border-radius: 10px;

    @media (max-width: 768px) {
      height: 200px;
    }

    @media (max-width: 480px) {
      height: 150px;
    }
  }

  .cards .card:hover {
    transform: scale(1.1);
  }

  .cards:hover > .card:not(:hover) {
    filter: blur(10px);
    transform: scale(0.9);
  }

  .cards .card .text-overlay {
    position: relative;
    margin-bottom: 10px;
    color: white;
    font-size: 2rem;
    font-weight: bold;
    opacity: 0;
    transition: opacity 400ms;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  }

  .cards .card:hover .text-overlay {
    opacity: 1;
  }
`;

export default function Projects() {
  return (
    <div className="bg-black py-10 " id='projects'>
      {/* Title Section */}
      <motion.section
        className="relative bg-black flex justify-center items-center py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: 'easeInOut' }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="absolute text-[14vw] md:text-[10vw] mt-[4vh] md:mt-0 font-bold text-white opacity-10 select-none">
          Projects
        </h1>
        <div className="relative z-10 text-center">
          <h2 className="text-[8vw] md:text-[4vw] text-white font-bold">Projects</h2>
        </div>
      </motion.section>

      {/* Cards Section */}
      <StyledWrapper className="bg-black flex justify-center mt-10">
        <div className="cards">
          {/* CoffeeBucks project linked to its GitHub repository */}
          <a
            href="https://github.com/shashinadh28/CoffeeBucks"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div className="text-overlay">CoffeeBucks</div>
            <img src="/coffeebucks.png" alt="Project 1" />
          </a>

          {/* WeCure project linked to its GitHub repository */}
          <a
            href="https://github.com/shashinadh28/wecure"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div className="text-overlay">WeCure</div>
            <img src="/weCure.png" alt="Project 2" />
          </a>

          {/* MRKT.AI project linked to its GitHub repository */}
          <a
            href="https://github.com/shashinadh28/MRKT.AI"
            target="_blank"
            rel="noopener noreferrer"
            className="card"
          >
            <div className="text-overlay">MRKT.AI</div>
            <img src="/mrkt.ai.png" alt="Project 3" />
          </a>
        </div>
      </StyledWrapper>
    </div>
  );
}
