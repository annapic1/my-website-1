import React from 'react';

const PhotoItem = ({ photo, index, enterFullscreen }) => {
  return (
    <div className="photo-item" onClick={() => enterFullscreen(index)}>
      <img src={photo} alt={`Photo ${index + 1}`} />
    </div>
  );
};

export default PhotoItem;
