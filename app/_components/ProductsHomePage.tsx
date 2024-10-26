"use client";
import { addProductToCart, getAllProductsForUser } from "@/lib/product";
import { Suspense, useEffect, useState } from "react";
import useProductStore from "@/store/productStore";
import React from "react";
import ProductsList from "../(admin)/_components/ProductsList";
import Loading from "./Loading";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import AddToCartButton from "@/components/AddToCartButton";
import { useSession } from "next-auth/react";

const ProductsHomePage = () => {
  const { data: session } = useSession();
  const { products, loading, error, fetchProducts } = useProductStore();
  useEffect(() => {
    if (products.length === 0) fetchProducts(); // Fetch the products on mount
  }, [fetchProducts, products]);

  if (error) {
    return <p>{error}</p>;
  }

  const handleAddProductToCart = async (productId: any) => {
    await addProductToCart(productId, session?.user.id, 1);
  };
  return (
    <div className="h-screen">
      {products?.length > 0 && (
        <div className="mt-6 grid grid-cols-4 justify-items-center">
          {products.map((product: ProductType) => (
            <div key={product._id} className="relative group">
              <Link
                href={`/product/${product._id}`}
                className="space-y-4 cursor-pointer"
              >
                <div className="h-[15rem] w-[15rem] relative">
                  <Image
                    src={product.image[0]}
                    alt="Product image"
                    fill={true}
                    className={`object-cover h-full w-full `}
                  />
                </div>
                <div className="text-center">
                  <p>{product.name}</p>
                  <p className="font-bold">{product.price} Pkr</p>
                </div>
              </Link>
              <AddToCartButton
                onClick={() => {
                  handleAddProductToCart(product._id);
                }}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsHomePage;
