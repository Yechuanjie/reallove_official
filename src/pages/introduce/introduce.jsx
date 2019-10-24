import React from 'react';
import './introduce.scss';
// const requireContext = require.context(
//   '../../assets/introduce',
//   true,
//   /^\d.\/.*\.png$/,
// );
// const images = requireContext.keys().map(requireContext);

// 所有的表情包对象

const imageList = () => {
    const images = [];
    for (let i = 0; i <= 10; i++) {
      const e = require(`../../assets/introduce/${i}.png`);
      images.push(e);
    }
    return images;
};

function Introduce() {
  return (
    <div className="introduce-page">
      {imageList().map((image, key) => {
        return <img src={image} alt="" key={key} />;
      })}
    </div>
  );
}

export default Introduce;
