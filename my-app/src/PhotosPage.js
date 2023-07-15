import React, { useState, useRef, useEffect} from 'react';
import './Photo.css'

const PhotoGallery = () => {
  const photos = [
    require('./photos/p1.png'),
    require('./photos/p2.JPG'),
    require('./photos/p8.JPG'),
    require('./photos/p9.JPG'),
    require('./photos/p12.JPG'),
    require('./photos/p14.jpg'),
    require('./photos/p3.jpg'),
    require('./photos/p4.jpg'),
    require('./photos/p5.jpg'),
    require('./photos/p6.JPG'),
    require('./photos/p7.JPG'),
    require('./photos/p10.JPG'),
    require('./photos/p11.JPG'),
    require('./photos/p13.JPG'),
    require('./photos/p15.JPG'),
    require('./photos/p16.JPG'),
    require('./photos/p17.jpg'),
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
          <img src={currentPhoto} alt={`Photo ${currentPhotoIndex + 1}`} className="fullscreen-image" />
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
    <div className="photo-grid">
      {photos.map((photo, index) => (
        <div key={index} className="photo-item" onClick={() => enterFullscreen(index)}>
          <img src={photo} alt={`Photo ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;

// import React from 'react'
// import Carousel from 'better-react-carousel'

// const carouselStyle = {
//     maxWidth: '1200px', // Adjust the maximum width of the carousel container
//     margin: '0 auto', // Center the carousel horizontally
//   };
//  const imageStyle = {
//     width: '1200px', // Set the width of the images
//     height: '800px', // Set the height of the images
//     objectFit: 'cover', // Maintain aspect ratio and cover the container
//   };
   

// const Gallery = () => {
//   return (
//     <div style={carouselStyle}>
//     <Carousel cols={1} rows={1} gap={10} loop>
//       <Carousel.Item>
//         <img style={imageStyle}  src="https://assets.community.lomography.com/b3/3c9871b7d007789472aa2e99c865f0f7fe537c/1216x806x2.jpg?auth=089c20f3a35d3322e42018cd5e09ea68592aa6a8" alt = "1"/>
//       </Carousel.Item>
//       <Carousel.Item>
//         <img style={imageStyle} src="https://assets.community.lomography.com/e7/0280ac6092a7b607160a5bb4f460dae4e08d00/1216x1118x2.jpg?auth=200af7d7e1c176aaa7b4217c249eba72745dffa7" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img style={imageStyle} src="https://assets.community.lomography.com/0f/7ba715934e4e677f096369f355dd4bc70f4ff1/1216x847x2.jpg?auth=bbb4e5b6dcd88ebcea79d5f9542f9af4c4cfb8cd" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img style={imageStyle} src="https://assets.community.lomography.com/cf/5a25289ed6814d344966957418e9cbf133d9c5/1216x806x2.jpg?auth=f9ddb45fb8eb57e0761eaadcc8d993772b181a14" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img style={imageStyle} src="https://assets.community.lomography.com/a4/534830e94c2f6f24a283d75ff7e1aa49749f48/1216x813x2.jpg?auth=134a48b215654a5d6bcabdbf352e4e32c8fa3949" />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img style={imageStyle} src="https://assets.community.lomography.com/ca/2d047627b0513d2ceff1c6ad336653f032140f/1216x813x2.jpg?auth=f0347b4a84bff398b140ff3e898e0cacce654dd4" />
//       </Carousel.Item>
//     </Carousel>
//     </div>
//   )

// }
// export default Gallery;

// 
//   {
//     img: 'https://assets.community.lomography.com/79/6ab252bf8ece5e456574fa7415fcfcae46956e/1216x811x2.jpg?auth=ed5c51ee248fde82d37f80d2d29cb6192dac16e1',
//     title: 'Fern',
//   },
//   {
//     img: 'https://assets.community.lomography.com/df/9bd484bc5d3586d0895f021c2e56c281276e7d/1216x806x2.jpg?auth=ddffba5ceff5491fac01ff02b6fc5475ce1bb4fb',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://assets.community.lomography.com/7b/5b64329c78c542e3e522ba3474507179e19d03/1216x806x2.jpg?auth=6c5ecb68ae963c664d9a39aed66951bd6460b407',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://assets.community.lomography.com/14/e86cda74ab3ab866c79c56bd7bc1541c2b38a6/1216x775x2.jpg?auth=33767d312145689f849db45df86892ff1625ba26',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://assets.community.lomography.com/2e/e86319119a2d1d64b0abfade4fcb2cbd23e6e7/1216x813x2.jpg?auth=1ede766414088c79bcb107034a7090efc7895e65',
//     title: 'Bike',
//   },
//   {
//     img: 'https://assets.community.lomography.com/fb/0936261ce43267c56d194501ff511f0e6cfc9d/1216x806x2.jpg?auth=1f79ebc25176def8044ed17296b0a5b7d2a468b9',
//     title: 'Breakfast',
//   },
//   {
//     img: 'https://assets.community.lomography.com/c5/5ddb07cbe45c20fa4b6cd338ded69d95f2f447/1216x806x2.jpg?auth=de64fe12a421840dd2cb366f9d1acd1c32f8bbbb',
//     title: 'Burger',
//   },
//   {
//     img: 'https://assets.community.lomography.com/5d/773ab4778259a55439ceb90dd659188c9e79fd/1216x806x2.jpg?auth=248875a94f3e8d9936d864e1a2413b74470a9f48',
//     title: 'Camera',
//   },
//   {
//     img: 'https://assets.community.lomography.com/cc/f6208e308f5a0965d26fcccfc1c4acb91783a8/1216x806x2.jpg?auth=1ea7e3b9eada01e3254b169179d4265201f27393',
//     title: 'Coffee',
//   },
//   {
//     img: 'https://assets.community.lomography.com/68/3e1c6e97b074e9e3d6d8dbcbbfbbee094d0c1c/1216x813x2.jpg?auth=61d66350505f57782dafc223aa4463e1f74bddf1',
//     title: 'Hats',
//   },
//   {
//     img: 'https://assets.community.lomography.com/24/74340f846e5a5dba707f69fb45568fc2b89dcb/1536x1023x2.jpg?auth=cb55ba8ee912689036932bb732894c4f070492b3',
//     title: 'Honey',
//   },
//   {
//     img: 'https://assets.community.lomography.com/75/f8c80ea31ce2b987dee798cb799ba9acaf8daf/1216x813x2.jpg?auth=7c16a55fa4c3cf3b7b3200a7b6294bb95a9a499a',
//     title: 'Basketball',
//   },
//   {
//     img: 'https://assets.community.lomography.com/44/bcd9d82668e75d8b3eafd7122ee0f773493291/1996x1323x2.jpg?auth=e16d9e76c625af01bd0690410bb9c35c9fcf8364',
//     title: 'Fern',
//   },
//   {
//     img: 'https://assets.community.lomography.com/ad/b0ab65a164d617cdfda15f72e9e3c6f476dc23/1216x806x2.jpg?auth=54a815d82aa7173e06db5c6a996ddf01554447c0',
//     title: 'Mushrooms',
//   },
//   {
//     img: 'https://assets.community.lomography.com/94/025ff1ec8f8758ff5a786c0eb7f4006c2d0c38/1216x806x2.jpg?auth=e9145dc734c354b76cf77f4b8f01e50a0abb9923',
//     title: 'Tomato basil',
//   },
//   {
//     img: 'https://assets.community.lomography.com/a8/528d587612d70e7d7aafdae2e80e042744908d/1216x813x2.jpg?auth=63955548595512c83ebd0369dadd5a24fe333cc9',
//     title: 'Sea star',
//   },
//   {
//     img: 'https://assets.community.lomography.com/5e/2a244c374cdd09e990066b97ffd98855c30446/1216x813x2.jpg?auth=46fc495cefce9cbcfb5527a22837f535dd9989b9',
//     title: 'Bike',
//   },
// ];