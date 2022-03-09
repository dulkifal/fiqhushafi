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
      <div className="m-auto text-ter-color relative h-130 w-11/12 flex items-center justify-center">          
        <button className=" w-12 bg-blue-300 h-20 left-0 transform -translate-y-1/2 top-1/2" onClick={slideLeft}>{"<"}</button>
        
        <button className="order-3 w-12 bg-blue-300 h-20 right-0 transform -translate-y-1/2 top-1/2" onClick={slideRight}>{">"}</button>
        <div class="  rounded overflow-hidden shadow-lg">
  <img class="w-full"    src={images[index]} alt={index}   />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">The Coldest Sunset</div>
    <p class="text-gray-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
      
      </div>
    )
  );
};

export default ImageSlider;