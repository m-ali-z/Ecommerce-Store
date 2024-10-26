"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import React, { useRef } from "react";
import { deleteProductFromDb } from "../actions";
import Link from "next/link";

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
    <div className="mx-auto my-8 flex gap-4">
      {products.map((product) => (
        <div key={product._id} className="flex flex-col w-[15rem] h-[15rem]">
          <Image
            src={product.image[0]}
            alt={`${product.name}'s image`}
            width={100}
            height={100}
            className="rounded w-full h-full"
          />
          <Card key={product._id} className="rounded-none">
            <CardContent className="px-0">
              <div className=" text-center">
                <p>{product.name}</p>
                <p className="text-gray-500">{product.quantity} items</p>
                <p className="font-bold">{currencyFormatter(product.price)}</p>
              </div>
            </CardContent>
            <CardFooter className="flex justify-between items-center font-bold">
              <Link href={`/edit-product/${product._id}`}>
                <Button variant={"default"} size={"sm"}>
                  Edit
                </Button>
              </Link>
              <Button
                variant={"destructive"}
                size={"sm"}
                onClick={() => deleteProductFromDb(product._id)}
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
