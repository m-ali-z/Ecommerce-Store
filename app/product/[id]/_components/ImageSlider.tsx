import Image from "next/image";
import React from "react";

const ImageSlider = ({ image }: { image: string[] }) => {
  return (
    <div className="h-full">
      {image.map((src, index) => (
        <div key={index} className="h-[60vh] w-full relative">
          <Image
            src={src}
            alt={`Product Image ${index + 1}`}
            fill
            className="object-cover"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ImageSlider;
