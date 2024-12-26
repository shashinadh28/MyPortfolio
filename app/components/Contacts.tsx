'use client';  // Ensure this is a client-side component

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Form = () => {
  const [backgroundImage, setBackgroundImage] = useState('');

  // Only set the background image on the client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setBackgroundImage('url("data:image/png;base64,...")'); // Example dynamic background image
    }
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Get form data (email, username, message)
    const formValues = {
      email: formData.get('email'),
      username: formData.get('username'),
      message: formData.get('textarea'),
    };

    // You can now log the form data or handle it
    console.log(formValues);
  };

  return (
    <StyledWrapper backgroundImage={backgroundImage}>
      <div className="form-container">
        <form className="form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input required name="email" id="email" type="email" placeholder="Enter your email" />
          </div>

          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input required name="username" id="username" type="text" placeholder="Enter your username" />
          </div>

          <div className="form-group">
            <label htmlFor="textarea">How can we help you?</label>
            <textarea required cols={50} rows={10} id="textarea" name="textarea" placeholder="Type your message here" />
          </div>

          <button type="submit" className="form-submit-btn">Submit</button>
        </form>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div<{ backgroundImage: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-repeat: no-repeat;
  background-size: cover;

  .form-container {
    width: 500px;
    padding: 40px;
    background: linear-gradient(#212121, #212121) padding-box,
                linear-gradient(145deg, transparent 35%,#e81cff, #40c9ff) border-box;
    border: 2px solid transparent;
    font-size: 14px;
    font-family: inherit;
    color: white;
    display: flex;
    flex-direction: column;
    gap: 20px;
    box-sizing: border-box;
    border-radius: 16px;
    background-size: 200% 100%;
    animation: gradient 5s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .form-container button:active {
    scale: 0.95;
  }

  .form-container .form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .form-container .form-group {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .form-container .form-group label {
    display: block;
    margin-bottom: 5px;
    color: #717171;
    font-weight: 600;
    font-size: 12px;
  }

  .form-container .form-group input,
  .form-container .form-group textarea {
    width: 100%;
    padding: 12px 16px;
    border-radius: 8px;
    color: #fff;
    font-family: inherit;
    background-color: transparent;
    border: 1px solid #414141;
  }

  .form-container .form-group input::placeholder,
  .form-container .form-group textarea::placeholder {
    opacity: 0.5;
  }

  .form-container .form-submit-btn {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    align-self: flex-start;
    font-family: inherit;
    color: #717171;
    font-weight: 600;
    width: 40%;
    background: #313131;
    border: 1px solid #414141;
    padding: 12px 16px;
    font-size: inherit;
    gap: 8px;
    margin-top: 8px;
    cursor: pointer;
    border-radius: 6px;
  }

  .form-container .form-submit-btn:hover {
    background-color: #fff;
    border-color: #fff;
  }
`;

export default Form;
