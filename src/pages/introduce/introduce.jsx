import React from 'react';
import './introduce.scss';
// const requireContext = require.context(
//   '../../assets/introduce',
//   true,
//   /^\d.\/.*\.png$/,
// );
// const images = requireContext.keys().map(requireContext);
const imageList = () => {
  const images = [];
  for (let i = 0; i <= 10; i++) {
    //   const e = require(`../../assets/introduce/${i}.png`);
    const e = `http://pzpsn4agr.bkt.clouddn.com/${i}.png`;
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
