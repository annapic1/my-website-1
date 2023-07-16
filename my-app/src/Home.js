import React, { useState, useEffect } from 'react';
import Video from "./video.MOV";
import NavBar from './NavBar';

const parentContainerStyle = {
  position: 'relative',
  height: '100vh',
};

const videoStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  zIndex: -1,
};

const textContainerStyle = {
  color: 'white',
  position: 'absolute',
  top: '30%',
  
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  fontSize: '24px',
  fontWeight: 'normal',
  textAlign: 'center',
};

const textContent = [
  'Hello!',
  'My name is Anna.',
  'Welcome to my website.',
];

export default function Home() {
  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCurrentLine((prevLine) => (prevLine + 1) % textContent.length);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={parentContainerStyle}>
      <NavBar isHomePage={true} />
      <video src={Video} autoPlay={true} muted={true} playsInline={true} loop={true} style={videoStyle}></video>
      <div style={textContainerStyle}>
        {textContent.map((line, index) => (
          <div key={index}>
            {index === currentLine ? line : ''}
          </div>
        ))}
      </div>
    </div>
  );
}
