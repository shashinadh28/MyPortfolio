import React from 'react';
import styled from 'styled-components';

const Button = () => {
  return (
    <StyledWrapper>
      <button>
        GitHub
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  button {
    padding: 12.5px 30px;
    border: 0;
    border-radius: 100px;
    background-color: #FFCC00; /* Yellow background */
    color: #ffffff;
    font-weight: bold;
    transition: all 0.5s;
    -webkit-transition: all 0.5s;

    /* Light black stroke around the text */
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3), -1px -1px 1px rgba(0, 0, 0, 0.3), 1px -1px 1px rgba(0, 0, 0, 0.3), -1px 1px 1px rgba(0, 0, 0, 0.3);
  }

  button:hover {
    background-color: #FFDD33;  /* Lighter yellow for hover */
    box-shadow: 0 0 20px #FFDD3350;
    transform: scale(1.1);
  }

  button:active {
    background-color: #FFB300;  /* Darker yellow for active */
    transition: all 0.25s;
    -webkit-transition: all 0.25s;
    box-shadow: none;
    transform: scale(0.98);
  }
`;

export default Button;
