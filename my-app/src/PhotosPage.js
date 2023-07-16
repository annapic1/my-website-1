import React, { useState, useRef, useEffect, lazy, Suspense } from 'react';
import './Photo.css';
import NavBar from './NavBar';

// Lazy load the PhotoItem component
const PhotoItem = lazy(() => import('./PhotoItem'));

const PhotoGallery = () => {
  const photos = [
    require('./photos/p1.png'),
    require('./photos/p2.JPG'),
    require('./photos/p3.jpg'),
    require('./photos/p8.JPG'),
    require('./photos/p9.JPG'),
    // require('./photos/p12.JPG'),
    require('./photos/p14.jpg'),
    // require('./photos/p4.jpg'),
    require('./photos/p5.JPG'),
    require('./photos/p6.JPG'),
    require('./photos/p7.JPG'),
    // require('./photos/p10.JPG'),
    require('./photos/p11.JPG'),
    require('./photos/p13.JPG'),
    // require('./photos/p15.JPG'),
    require('./photos/p16.JPG'),
    // require('./photos/p17.jpg'),
    require('./photos/p18.jpg'),
  ];

  const [fullscreen, setFullscreen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const scrollPositionRef = useRef(0);

  const enterFullscreen = (index) => {
    scrollPositionRef.current = window.pageYOffset;
    setCurrentPhotoIndex(index);
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

  const goToPreviousPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === 0 ? photos.length - 1 : prevIndex - 1
    );
  };

  const goToNextPhoto = () => {
    setCurrentPhotoIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
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
      goToPreviousPhoto();
    } else if (event.key === 'ArrowRight') {
      goToNextPhoto();
    }
  };

  if (fullscreen) {
    const currentPhoto = photos[currentPhotoIndex];

    return (
      <div
        className="fullscreen-overlay"
        onClick={handleOverlayClick}
        onKeyDown={handleKeyDown}
        tabIndex={0}
      >
        <div className="fullscreen-content">
          <img
            src={currentPhoto}
            alt={`Photo ${currentPhotoIndex + 1}`}
            className="fullscreen-image"
          />
        </div>
        <button className="previous-button" onClick={goToPreviousPhoto}>
          &lt;
        </button>
        <button className="next-button" onClick={goToNextPhoto}>
          &gt;
        </button>
      </div>
    );
  }

  return (
    <div>
      <NavBar isHomePage={false} />
      <div className="photo-grid">
        <Suspense fallback={<div>Loading...</div>}>
          {photos.map((photo, index) => (
            <PhotoItem
              key={index}
              photo={photo}
              index={index}
              enterFullscreen={enterFullscreen}
            />
          ))}
        </Suspense>
      </div>
    </div>
  );
};

export default PhotoGallery;
