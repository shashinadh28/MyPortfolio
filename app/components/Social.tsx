"use client";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { FaTwitter, FaInstagram, FaLinkedin, FaGithub, FaReddit } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Social() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensures the animation only runs client-side
  }, []);

  if (!isClient) return null; // Prevent rendering the component until it's client-side

  return (
    <div>
      {/* Title Section */}
      <motion.section
        className="relative bg-black flex justify-center items-center py-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="absolute text-[9vw] md:text-[6vw] mt-[4vh] md:mt-10 font-bold text-white opacity-10 select-none">
          Contact & Socials
        </h1>
        <div className="relative z-10 text-center">
          <h2 className="text-[8vw] md:text-[4vw] text-white font-bold">Contact</h2>
        </div>
      </motion.section>

      {/* Social Icons Section */}
      <StyledWrapper>
        <div>
          <ul className="wrapper">
            {/* Twitter Icon */}
            <li className="icon twitter">
              <a
                href="https://x.com/Shashinadh28"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <span className="tooltip">Twitter</span>
                <FaTwitter />
              </a>
            </li>

            {/* Instagram Icon */}
            <li className="icon instagram">
              <a
                href="https://www.instagram.com/shashi_28_03?igsh=ZmkybzJxbHc4aTAx"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <span className="tooltip">Instagram</span>
                <FaInstagram />
              </a>
            </li>

            {/* LinkedIn Icon */}
            <li className="icon linkedin">
              <a
                href="https://www.linkedin.com/in/durgashashinadh-puvvala-625355320"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <span className="tooltip">LinkedIn</span>
                <FaLinkedin />
              </a>
            </li>

            {/* GitHub Icon */}
            <li className="icon github">
              <a
                href="https://github.com/shashinadh28"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <span className="tooltip">GitHub</span>
                <FaGithub />
              </a>
            </li>

            {/* Reddit Icon */}
            <li className="icon reddit">
              <a
                href="https://www.reddit.com/user/OverPresentation3331/"
                target="_blank"
                rel="noopener noreferrer"
                className="icon-link"
              >
                <span className="tooltip">Reddit</span>
                <FaReddit />
              </a>
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
    height: auto;
    width: 100%;
    padding-top: 40px;
    font-family: "Poppins", sans-serif;
    justify-content: center;
    flex-wrap: wrap; /* Allows wrapping for smaller screens */
  }

  .wrapper .icon {
    position: relative;
    background: #fff;
    border-radius: 50%;
    margin: 15px;
    width: 60px;
    height: 60px;
    font-size: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }

  /* Tooltip Styling */
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

  /* Tooltip Arrow Styling */
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

  /* Hover Effects for Tooltips */
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

  /* Social Media Hover Effects */
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
    background: #4b5563;
    color: #fff;
  }

  .wrapper .reddit:hover,
  .wrapper .reddit:hover .tooltip,
  .wrapper .reddit:hover .tooltip::before {
    background: #ff4500;
    color: #fff;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .wrapper {
      padding-top: 20px;
    }

    .wrapper .icon {
      width: 50px;
      height: 50px;
      font-size: 20px;
      margin: 10px;
    }

    .wrapper .tooltip {
      font-size: 12px;
    }
  }

  @media (max-width: 480px) {
    .wrapper {
      flex-direction: column;
      align-items: center;
    }

    .wrapper .icon {
      width: 40px;
      height: 40px;
      font-size: 16px;
      margin: 8px;
    }

    .wrapper .tooltip {
      font-size: 10px;
    }
  }
`;

