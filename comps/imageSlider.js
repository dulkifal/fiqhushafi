import React, { useState } from "react";

const ImageSlider = ( ) => {
 let images=[

   '/photo1.jpg',
    '/photo2.jpg',
     
  
  ]
  // takes in images as props
  const [index, setIndex] = useState(0); // create state to keep track of images index, set the default index to 0

  const slideRight = () => {
    setIndex((index + 1) % images.length); // increases index by 1
  };

  const slideLeft = () => {
    const nextIndex = index - 1;
    if (nextIndex < 0) {
      setIndex(images.length - 1); // returns last index of images array if index is less than 0
    } else {
      setIndex(nextIndex);
    }
  };

  return (
    images.length > 0 && (
      <div className="m-auto text-ter-color relative h-130 w-11/12">          
        <button className="absolute w-12 bg-sec-color h-20 left-0 transform -translate-y-1/2 top-1/2" onClick={slideLeft}>{"<"}</button>
        
        <button className="absolute w-12 bg-sec-color h-20 right-0 transform -translate-y-1/2 top-1/2" onClick={slideRight}>{">"}</button>
        <img className="w-full h-full object-cover" src={images[index]} alt={index} />
      </div>
    )
  );
};

export default ImageSlider;