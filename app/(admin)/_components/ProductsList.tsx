"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { deleteProductFromDb } from "../actions";

interface ProductsListProps {
  products: ProductType[];
}

const currencyFormatter = (price: Number) => {
  return price.toLocaleString("ur-PK", {
    currency: "PKR",
    style: "currency",
  }); // or en-PK
};

const ProductsList: React.FC<ProductsListProps> = ({ products }) => {
  return (
    <div className="mx-auto h-screen my-8 flex gap-4">
      {products.map((product) => (
        <Card
          key={product._id}
          className="w-[20rem] min-h-[10rem] max-h-[25rem] py-4"
        >
          <CardContent>
            <Image
              src={product.image[0]}
              alt={`${product.name}'s image`}
              width={400}
              height={300}
              quality={100}
              className="rounded h-[15rem] object-cover"
            />
            <p>{product.name}</p>
            <p className="text-gray-500">{product.quantity} items</p>
            <p className="font-bold">{currencyFormatter(product.price)}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center font-bold">
            {/* {Edit dialog goes here} */}

            <Button
              variant={"destructive"}
              onClick={() => deleteProductFromDb(product._id)}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default ProductsList;
