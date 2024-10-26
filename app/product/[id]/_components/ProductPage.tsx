"use client";
import { GoHeartFill } from "react-icons/go";
import React, { useEffect, useRef, useState } from "react";
import ImageSlider from "./ImageSlider";
import { Button } from "@/components/ui/button";
import { addProductToFvrt } from "@/lib/product";
import { useSession } from "next-auth/react";
const ProductPageLgScreen = ({ product }: { product: ProductType }) => {
  const { data: session } = useSession();
  const userId = session?.user.id;
  console.log("user id", userId);
  const [readMore, setReadMore] = useState(false);
  const [isFvrt, setIsFvrt] = useState(false);
  async function handleClick() {
    setIsFvrt(!isFvrt);
    await addProductToFvrt(product._id, userId);
  }
  return (
    <div className="flex h-auto">
      {/* Left Half - Image Slider */}
      <div className="w-1/2 border-r sticky top-0">
        <ImageSlider image={product.image} />
      </div>

      {/* Right Half - Static Content */}
      <div className="w-1/2 p-4 sticky top-0 h-screen flex justify-center">
        <div className="w-1/2 mt-8 space-y-4">
          <div className="flex justify-between items-center">
            <p className="text-gray-400 text-sm">Pre-order now</p>
            <GoHeartFill
              size={30}
              className={`transition-all duration-300 ease-in-out ${
                isFvrt
                  ? "fill-red-600 stroke-red-600 "
                  : "fill-none stroke-black "
              }`}
              strokeWidth={1}
              onClick={handleClick}
            />
          </div>
          <h1 className="text-2xl">{product.name}</h1>
          <p className="mt-2">{product.price}</p>
          <div>
            <Button className="w-full rounded-full">Add to Cart</Button>
          </div>

          <div
            id="expanded-menu"
            className={`overflow-hidden  transition-all duration-500 ease-in-out  ${
              readMore ? "" : "truncate"
            } `}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nulla
            aliquam vel quo molestiae sed ea maiores dignissimos provident
            recusandae. Nemo consectetur porro iste quaerat. Nulla impedit
            dolorum odio aut.
          </div>
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? "Read less" : "Read more"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPageLgScreen;
