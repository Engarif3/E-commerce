import React from 'react';

const DigitalWatch = ({ time, onScroll }) => {
  return (
    <div onWheel={onScroll}>
      <h1>{time}</h1>
    </div>
  );
};

export default DigitalWatch;