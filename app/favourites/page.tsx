import { auth } from "@/auth";
import FavoriteProducts from "./_components/FavoriteProducts";
import { getFvrtProducts } from "@/lib/product";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { UserType } from "@/types/user";
import { Product } from "@/models/Product";

const Favourites = async () => {
 
  const session = await auth();
  const products: UserType = await getFvrtProducts(session?.user.id);
  const fvrts = products.favourites;
  const favouriteProducts = await Product.find({ _id: { $in: fvrts } });
  console.log(favouriteProducts);
  return (
    <div>
      <FavoriteProducts products={favouriteProducts} />
    </div>
  );
};

export default Favourites;
