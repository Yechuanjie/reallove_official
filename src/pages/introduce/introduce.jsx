import React from 'react';
import './introduce.scss';
const requireContext = require.context(
  '../../assets/introduce',
  true,
  /^\.\/.*\.png$/,
);
const images = requireContext.keys().map(requireContext);

function Introduce() {
  return (
    <div className="introduce-page">
      {images.map((image, key) => {
        return <img src={image} alt="" key={key} />;
      })}
    </div>
  );
}

export default Introduce;
