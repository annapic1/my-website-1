import React, { useEffect, useState } from 'react';
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
  top: "37%",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  fontSize: '24px',
  fontWeight: 'normal',
};

const textContent = [
  'Hello!',
  'My name is Anna.',
  'Welcome to my website.',

];

export default function Home() {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    const currentWord = textContent[currentTextIndex];

    if (currentText.length < currentWord.length) {
      const typingTimeout = setTimeout(() => {
        setCurrentText((prevText) => prevText + currentWord[currentText.length]);
      }, 100);

      return () => clearTimeout(typingTimeout);
    } else if (currentTextIndex < textContent.length - 1) {
      const switchTimeout = setTimeout(() => {
        setCurrentTextIndex((prevIndex) => prevIndex + 1);
        setCurrentText('');
      }, 1000);

      return () => clearTimeout(switchTimeout);
    }
  }, [currentText, currentTextIndex]);

  return (
    <div style={parentContainerStyle}>
      <NavBar isHomePage={true} />
      <video src={Video} autoPlay={true} muted={true} playsInline={true} loop={true} style={videoStyle}></video>
      <div style={textContainerStyle}>
        <div>{currentText}</div>
      </div>
    </div>
  );
}
