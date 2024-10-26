"use client";
import ProductCard from "@/components/ProductCard";
import { deleteFvrtProduct } from "@/lib/product";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { RiCloseFill } from "react-icons/ri";

const FavoriteProducts = ({ products }: { products: ProductType[] }) => {
  const { data: session } = useSession();
  const [favourites, setFavourites] = useState(products);
  function handleDelete(productId: any) {
    setFavourites(favourites.filter((p) => p._id !== productId));
    deleteFvrtProduct(productId, session?.user.id);
  }
  return (
    <div className="grid grid-cols-4 justify-items-center mt-8">
      {favourites.map((product) => (
        <div key={product._id} className="relative">
          <RiCloseFill
            className="absolute z-10 left-1 top-1"
            onClick={() => {
              handleDelete(product._id);
            }}
          />
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default FavoriteProducts;
