import Image from "next/image";
import React from "react";
//
//https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww"
const Hero = () => {
  return (
    <div className="w-full relative">
      <Image
        src="https://images.unsplash.com/photo-1516762689617-e1cffcef479d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNsb3RoaW5nfGVufDB8fDB8fHww"
        className="w-full h-[20rem] object-cover"
        alt="Fashion & Accessories"
        width={100}
        height={100}
      />

      <div className="absolute bg-black/60 inset-0 flex justify-center items-center text-white text-2xl font-bold z-10">
        FASHION & MORE
      </div>
    </div>
  );
};

export default Hero;
