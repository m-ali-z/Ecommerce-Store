"use client";
import { UserType } from "@/types/user";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";
const ProductCard = ({
  product,
  isDeleted,
}: {
  product: ProductType;
  isDeleted?: boolean;
}) => {
  if (isDeleted) return null;
  return (
    <div>
      <div key={product._id} className="flex flex-col">
        <Link
          href={`/product/${product._id}`}
          key={product._id}
          className="space-y-4 cursor-pointer"
        >
          <div className="h-[15rem] w-[15rem] relative">
            <Image
              src={product.image[0]}
              alt="Product image"
              fill={true}
              className={`object-cover h-full w-full z-0`}
            />
          </div>
          <div className="text-center">
            <p>{product.name}</p>
            <p className="font-bold">{product.price} Pkr</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
