import React from 'react';

const MosaicItem = ({ mosaic, index, enterFullscreen }) => {
  return (
    <div className="mosaic-item" onClick={() => enterFullscreen(index)}>
      <img src={mosaic} alt={`mosaic ${index + 1}`} />
    </div>
  );
};

export default MosaicItem;
