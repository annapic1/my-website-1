import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import './Mosaic.css';
import NavBar from './NavBar';

// Lazy load the MosaicItem component
const MosaicItem = lazy(() => import('./MosaicItem'));

const MosaicGallery = () => {
  const mosaics = [
    require('./mosaics/m1.jpeg'),
    require('./mosaics/m2.jpeg'),
  ];

  const [fullscreen, setFullscreen] = useState(false);
  const [currentMosaicIndex, setCurrentMosaicIndex] = useState(0);
  const scrollPositionRef = useRef(0);

  const enterFullscreen = (index) => {
    scrollPositionRef.current = window.pageYOffset;
    setCurrentMosaicIndex(index);
    setFullscreen(true);
  };

  const exitFullscreen = () => {
    setFullscreen(false);
  };

  useEffect(() => {
    if (!fullscreen) {
      window.scrollTo(0, scrollPositionRef.current);
    }
  }, [fullscreen]);

  const goToPreviousMosaic = () => {
    setCurrentMosaicIndex((prevIndex) =>
      prevIndex === 0 ? mosaics.length - 1 : prevIndex - 1
    );
  };

  const goToNextMosaic = () => {
    setCurrentMosaicIndex((prevIndex) =>
      prevIndex === mosaics.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleOverlayClick = (event) => {
    if (event.target.classList.contains('fullscreen-overlay')) {
      exitFullscreen();
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      exitFullscreen();
    } else if (event.key === 'ArrowLeft') {
      goToPreviousMosaic();
    } else if (event.key === 'ArrowRight') {
      goToNextMosaic();
    }
  };

  if (fullscreen) {
    const currentMosaic = mosaics[currentMosaicIndex];

    return (
      <div
        className="fullscreen-overlay"
        onClick={handleOverlayClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="fullscreen-content">
          <img
            src={currentMosaic}
            alt={`Mosaic ${currentMosaicIndex + 1}`}
            className="fullscreen-image"
          />
        </div>
        <button className="previous-button" onClick={goToPreviousMosaic}>
          &lt;
        </button>
        <button className="next-button" onClick={goToNextMosaic}>
          &gt;
        </button>
      </div>
    );
  }

  return (
    <div>
      <NavBar isHomePage={false} />
      <div className="mosaic-grid">
        <Suspense fallback={<div>Loading...</div>}>
          {mosaics.map((mosaic, index) => (
            <MosaicItem
              key={index}
              mosaic={mosaic} // Corrected prop name from Mosaic to mosaic
              index={index}
              enterFullscreen={enterFullscreen}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default MosaicGallery;
